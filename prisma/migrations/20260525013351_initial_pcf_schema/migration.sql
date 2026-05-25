-- CreateEnum
CREATE TYPE "activity_unit" AS ENUM ('kWh', 'kg', 'ton_km');

-- CreateEnum
CREATE TYPE "ghg_scope" AS ENUM ('SCOPE_1', 'SCOPE_2', 'SCOPE_3');

-- CreateEnum
CREATE TYPE "record_status" AS ENUM ('PROVISIONAL', 'FINALIZED');

-- CreateTable
CREATE TABLE "activity_category" (
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "activity_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_description" (
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "activity_category_id" BIGINT NOT NULL,

    CONSTRAINT "activity_description_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emission_factor" (
    "id" BIGINT NOT NULL,
    "version" TIMESTAMP(6) NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "activity_unit" "activity_unit" NOT NULL,
    "activity_description_id" BIGINT NOT NULL,

    CONSTRAINT "emission_factor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_record" (
    "id" BIGINT NOT NULL,
    "acted_at" TIMESTAMP(6) NOT NULL,
    "activity_description_id" BIGINT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "unit" "activity_unit" NOT NULL,
    "scope" "ghg_scope" NOT NULL,
    "record_status" "record_status" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "emission_factor_unit_id" BIGINT NOT NULL,

    CONSTRAINT "activity_record_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "activity_description" ADD CONSTRAINT "activity_description_activity_category_id_fkey" FOREIGN KEY ("activity_category_id") REFERENCES "activity_category"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "emission_factor" ADD CONSTRAINT "emission_factor_activity_description_id_fkey" FOREIGN KEY ("activity_description_id") REFERENCES "activity_description"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "activity_record" ADD CONSTRAINT "activity_record_emission_factor_unit_id_fkey" FOREIGN KEY ("emission_factor_unit_id") REFERENCES "emission_factor"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
