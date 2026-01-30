const prisma = require('../config/prisma');

const crearTecnico = async (req, res, next) => {
  try {
    const tecnico = await prisma.tecnico.create({ data: req.body });
    res.status(201).json(tecnico);
  } catch (error) {
    next(error);
  }
};

const obtenerTecnicos = async (req, res, next) => {
  try {
    const tecnicos = await prisma.tecnico.findMany();
    res.json(tecnicos);
  } catch (error) {
    next(error);
  }
};

const actualizarTecnico = async (req, res, next) => {
  try {
    const tecnico = await prisma.tecnico.update({
      where: { id: Number(req.params.id) },
      data: req.body
    });
    res.json(tecnico);
  } catch (error) {
    next(error);
  }
};

const eliminarTecnico = async (req, res, next) => {
  try {
    await prisma.tecnico.delete({
      where: { id: Number(req.params.id) }
    });
    res.json({ mensaje: 'Técnico eliminado' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  crearTecnico,
  obtenerTecnicos,
  actualizarTecnico,
  eliminarTecnico
};
