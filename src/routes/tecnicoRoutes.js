const express = require('express');
const router = express.Router();

const {
  crearTecnico,
  obtenerTecnicos
} = require('../controllers/tecnicoController');

router.post('/tecnicos', crearTecnico);
router.get('/tecnicos', obtenerTecnicos);

module.exports = router;
