const express = require('express');
const router = express.Router();

// 👇 IMPORTAR TODO
const {
  crearVehiculo,
  obtenerVehiculos,
  actualizarVehiculo,
  eliminarVehiculo
} = require('../controllers/vehiculoController');

// CRUD
router.post('/vehiculos', crearVehiculo);
router.get('/vehiculos', obtenerVehiculos);
router.put('/vehiculos/:id', actualizarVehiculo);
router.delete('/vehiculos/:id', eliminarVehiculo);

module.exports = router;
