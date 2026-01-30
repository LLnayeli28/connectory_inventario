const prisma = require('../config/prisma');

const crearCuadrilla = async (req, res, next) => {
  try {
    const cuadrilla = await prisma.cuadrilla.create({
      data: req.body
    });
    res.status(201).json(cuadrilla);
  } catch (error) {
    next(error);
  }
};

const obtenerCuadrillas = async (req, res, next) => {
  try {
    const cuadrillas = await prisma.cuadrilla.findMany({
      include: {
        tecnico: true,
        vehiculo: true
      }
    });
    res.json(cuadrillas);
  } catch (error) {
    next(error);
  }
};

const actualizarCuadrilla = async (req, res, next) => {
  try {
    const cuadrilla = await prisma.cuadrilla.update({
      where: { id: Number(req.params.id) },
      data: req.body
    });
    res.json(cuadrilla);
  } catch (error) {
    next(error);
  }
};

const eliminarCuadrilla = async (req, res, next) => {
  try {
    await prisma.cuadrilla.delete({
      where: { id: Number(req.params.id) }
    });
    res.json({ mensaje: 'Cuadrilla eliminada' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  crearCuadrilla,
  obtenerCuadrillas,
  actualizarCuadrilla,
  eliminarCuadrilla
};
