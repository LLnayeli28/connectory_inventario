const express = require('express');
const cors = require('cors');

const app = express();

//  Importar rutas
const empleadoRoutes = require('./routes/empleadoRoutes');
const tecnicoRoutes = require('./routes/tecnicoRoutes');
const cuadrillaRoutes = require('./routes/cuadrillaRoutes');
const vehiculoRoutes = require('./routes/vehiculoRoutes');
const consumibleRoutes = require("./routes/consumibleRoutes");

//  Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Rutas API
app.use('/api', empleadoRoutes);
app.use('/api', tecnicoRoutes);
app.use('/api', cuadrillaRoutes);
app.use('/api', vehiculoRoutes);
app.use("/api", consumibleRoutes);

//  Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Connectory API funcionando ' });
});

module.exports = app;
