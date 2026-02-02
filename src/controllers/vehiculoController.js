const prisma = require('../config/prisma');

// 🔹 CREAR VEHÍCULO
const crearVehiculo = async (req, res, next) => {
  try {
    const { placa, marca, modelo, anio } = req.body;

    if (!placa || !marca || !modelo || !anio) {
      return res.status(400).json({
        mensaje: 'Todos los campos son obligatorios'
      });
    }

    const vehiculo = await prisma.vehiculo.create({
      data: {
        placa,
        marca,
        modelo,
        anio: Number(anio)
      }
    });

    res.status(201).json(vehiculo);
  } catch (error) {
    next(error);
  }
};

// 🔹 OBTENER VEHÍCULOS
const obtenerVehiculos = async (req, res, next) => {
  try {
    const vehiculos = await prisma.vehiculo.findMany({
      orderBy: {
        id: 'desc'
      }
    });

    res.json(vehiculos);
  } catch (error) {
    next(error);
  }
};

// 🔹 ACTUALIZAR VEHÍCULO
const actualizarVehiculo = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { placa, marca, modelo } = req.body;

    const vehiculo = await prisma.vehiculo.update({
      where: { id },
      data: {
        placa,
        marca,
        modelo,
        anio: Number(req.body.anio)
      }
    });

    res.json(vehiculo);
  } catch (error) {
    next(error);
  }
};

// 🔹 ELIMINAR VEHÍCULO
const eliminarVehiculo = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    await prisma.vehiculo.delete({
      where: { id }
    });

    res.json({ mensaje: 'Vehículo eliminado' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  crearVehiculo,
  obtenerVehiculos,
  actualizarVehiculo,
  eliminarVehiculo
};
