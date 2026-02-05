const prisma = require("../config/prisma");

// 🔹 OBTENER CONSUMIBLES
const obtenerConsumibles = async (req, res, next) => {
  try {
    const consumibles = await prisma.consumible.findMany({
      include: {
        bodega: true,
      },
      orderBy: {
        id: "desc",
      },
    });

    res.json(consumibles);
  } catch (error) {
    next(error);
  }
};

// 🔹 CREAR CONSUMIBLE
const crearConsumible = async (req, res, next) => {
  try {
    const {
      nombre,
      descripcion,
      cantidad,
      stockMinimo,
      stockMaximo,
      precioCompra,
      bodegaId,
    } = req.body;

    const consumible = await prisma.consumible.create({
      data: {
        nombre,
        descripcion,
        cantidad: Number(cantidad),
        stockMinimo: Number(stockMinimo),
        stockMaximo: Number(stockMaximo),
        precioCompra: Number(precioCompra),
        bodegaId: Number(bodegaId),
      },
    });

    res.status(201).json(consumible);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  obtenerConsumibles,
  crearConsumible,
};
