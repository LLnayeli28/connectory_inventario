const express = require('express');
const router = express.Router();

// 👇 IMPORTA TODO LO QUE USAS
const {
  crearEmpleado,
  obtenerEmpleados,
  actualizarEmpleado,
  eliminarEmpleado
} = require('../controllers/empleadoController');

// RUTAS CRUD
router.post('/empleados', crearEmpleado);
router.get('/empleados', obtenerEmpleados);
router.put('/empleados/:id', actualizarEmpleado);
router.delete('/empleados/:id', eliminarEmpleado);

module.exports = router;
