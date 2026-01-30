const express = require('express');
const router = express.Router();

// 👇 IMPORTAR TODO
const {
  crearCuadrilla,
  obtenerCuadrillas,
  actualizarCuadrilla,
  eliminarCuadrilla
} = require('../controllers/cuadrillaController');

// CRUD
router.post('/cuadrillas', crearCuadrilla);
router.get('/cuadrillas', obtenerCuadrillas);
router.put('/cuadrillas/:id', actualizarCuadrilla);
router.delete('/cuadrillas/:id', eliminarCuadrilla);

module.exports = router;
