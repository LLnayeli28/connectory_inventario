const express = require("express");
const router = express.Router();

const {
  crearConsumible,
  obtenerConsumibles,
} = require("../controllers/consumibleController");

router.get("/consumibles", obtenerConsumibles);
router.post("/consumibles", crearConsumible);

module.exports = router;
