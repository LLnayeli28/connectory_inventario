const prisma = require('../config/prisma');

// POST
const crearEmpleado = async (req, res, next) => {
  try {
    const { nombres, cedula, cargo } = req.body;
    const empleado = await prisma.empleado.create({
      data: { nombres, cedula, cargo }
    });
    res.status(201).json(empleado);
  } catch (error) {
    next(error);
  }
};

// GET
const obtenerEmpleados = async (req, res, next) => {
  try {
    const empleados = await prisma.empleado.findMany();
    res.json(empleados);
  } catch (error) {
    next(error);
  }
};

// PUT
const actualizarEmpleado = async (req, res, next) => {
  try {
    const { id } = req.params;
    const empleado = await prisma.empleado.update({
      where: { id: Number(id) },
      data: req.body
    });
    res.json(empleado);
  } catch (error) {
    next(error);
  }
};

// DELETE
const eliminarEmpleado = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.empleado.delete({
      where: { id: Number(id) }
    });
    res.json({ mensaje: 'Empleado eliminado' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  crearEmpleado,
  obtenerEmpleados,
  actualizarEmpleado,
  eliminarEmpleado
};
