const prisma = require('../config/prisma');

const crearVehiculo = async (req, res, next) => {
  try {
    const vehiculo = await prisma.vehiculo.create({ data: req.body });
    res.status(201).json(vehiculo);
  } catch (error) {
    next(error);
  }
};

const obtenerVehiculos = async (req, res, next) => {
  try {
    const vehiculos = await prisma.vehiculo.findMany();
    res.json(vehiculos);
  } catch (error) {
    next(error);
  }
};

const actualizarVehiculo = async (req, res, next) => {
  try {
    const vehiculo = await prisma.vehiculo.update({
      where: { id: Number(req.params.id) },
      data: req.body
    });
    res.json(vehiculo);
  } catch (error) {
    next(error);
  }
};

const eliminarVehiculo = async (req, res, next) => {
  try {
    await prisma.vehiculo.delete({
      where: { id: Number(req.params.id) }
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
