-- CreateTable
CREATE TABLE "BodegaGeneral" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BodegaGeneral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consumible" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "cantidad" INTEGER NOT NULL,
    "stockMinimo" INTEGER NOT NULL,
    "stockMaximo" INTEGER NOT NULL,
    "precioCompra" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bodegaId" INTEGER NOT NULL,

    CONSTRAINT "Consumible_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehiculo" (
    "id" SERIAL NOT NULL,
    "placa" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "anio" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vehiculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MiniBodega" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vehiculoId" INTEGER NOT NULL,

    CONSTRAINT "MiniBodega_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MiniConsumible" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "stockMinimo" INTEGER NOT NULL,
    "stockMaximo" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "miniBodegaId" INTEGER NOT NULL,

    CONSTRAINT "MiniConsumible_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tecnico" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "cedula" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tecnico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empleado" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "cedula" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cuadrilla" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tecnicoId" INTEGER NOT NULL,
    "vehiculoId" INTEGER,

    CONSTRAINT "Cuadrilla_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmpleadoCuadrilla" (
    "empleadoId" INTEGER NOT NULL,
    "cuadrillaId" INTEGER NOT NULL,

    CONSTRAINT "EmpleadoCuadrilla_pkey" PRIMARY KEY ("empleadoId","cuadrillaId")
);

-- CreateTable
CREATE TABLE "MovimientoStock" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "consumibleId" INTEGER,
    "miniConsumibleId" INTEGER,
    "tecnicoId" TEXT NOT NULL,
    "cuadrillaId" INTEGER NOT NULL,

    CONSTRAINT "MovimientoStock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vehiculo_placa_key" ON "Vehiculo"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "MiniBodega_vehiculoId_key" ON "MiniBodega"("vehiculoId");

-- CreateIndex
CREATE UNIQUE INDEX "Tecnico_cedula_key" ON "Tecnico"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_cedula_key" ON "Empleado"("cedula");

-- AddForeignKey
ALTER TABLE "Consumible" ADD CONSTRAINT "Consumible_bodegaId_fkey" FOREIGN KEY ("bodegaId") REFERENCES "BodegaGeneral"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MiniBodega" ADD CONSTRAINT "MiniBodega_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "Vehiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MiniConsumible" ADD CONSTRAINT "MiniConsumible_miniBodegaId_fkey" FOREIGN KEY ("miniBodegaId") REFERENCES "MiniBodega"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cuadrilla" ADD CONSTRAINT "Cuadrilla_tecnicoId_fkey" FOREIGN KEY ("tecnicoId") REFERENCES "Tecnico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cuadrilla" ADD CONSTRAINT "Cuadrilla_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "Vehiculo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmpleadoCuadrilla" ADD CONSTRAINT "EmpleadoCuadrilla_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmpleadoCuadrilla" ADD CONSTRAINT "EmpleadoCuadrilla_cuadrillaId_fkey" FOREIGN KEY ("cuadrillaId") REFERENCES "Cuadrilla"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimientoStock" ADD CONSTRAINT "MovimientoStock_consumibleId_fkey" FOREIGN KEY ("consumibleId") REFERENCES "Consumible"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimientoStock" ADD CONSTRAINT "MovimientoStock_miniConsumibleId_fkey" FOREIGN KEY ("miniConsumibleId") REFERENCES "MiniConsumible"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimientoStock" ADD CONSTRAINT "MovimientoStock_tecnico_fkey" FOREIGN KEY ("tecnicoId") REFERENCES "Tecnico"("cedula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimientoStock" ADD CONSTRAINT "MovimientoStock_cuadrilla_fkey" FOREIGN KEY ("cuadrillaId") REFERENCES "Cuadrilla"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
