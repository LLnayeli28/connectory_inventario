const { PrismaClient } = require('../generated/prisma');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

// conexión directa a postgres (pgAdmin)
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',       
  password: 'Aries123zuna456',
  database: 'connectory_db',
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

module.exports = prisma;
