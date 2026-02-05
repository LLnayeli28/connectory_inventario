const prisma = require('../config/prisma');

// 🔹 CREAR TÉCNICO
const crearTecnico = async (req, res, next) => {
  try {
    const { nombres, cedula, especialidad } = req.body;

    if (!nombres || !cedula || !especialidad) {
      return res.status(400).json({
        mensaje: 'Nombres, cédula y especialidad son obligatorios'
      });
    }

    const tecnico = await prisma.tecnico.create({
      data: {
        nombres,
        cedula,
        especialidad
      }
    });

    res.status(201).json(tecnico);
  } catch (error) {
    next(error);
  }
};

// 🔹 OBTENER TÉCNICOS
const obtenerTecnicos = async (req, res, next) => {
  try {
    const tecnicos = await prisma.tecnico.findMany({
      orderBy: { id: 'desc' }
    });
    res.json(tecnicos);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  crearTecnico,
  obtenerTecnicos
};
