const express = require('express');
const router = express.Router();

// 👇 IMPORTAR TODO
const {
  crearTecnico,
  obtenerTecnicos,
  actualizarTecnico,
  eliminarTecnico
} = require('../controllers/tecnicoController');

// CRUD
router.post('/tecnicos', crearTecnico);
router.get('/tecnicos', obtenerTecnicos);
router.put('/tecnicos/:id', actualizarTecnico);
router.delete('/tecnicos/:id', eliminarTecnico);

module.exports = router;
