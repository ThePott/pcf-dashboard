/*
  Warnings:

  - You are about to drop the column `name` on the `activity_category` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `activity_description` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id,activity_unit]` on the table `emission_factor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `label` to the `activity_category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `activity_description` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "activity_record" DROP CONSTRAINT "activity_record_emission_factor_id_fkey";

-- AlterTable
ALTER TABLE "activity_category" DROP COLUMN "name",
ADD COLUMN     "label" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "activity_description" DROP COLUMN "name",
ADD COLUMN     "label" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "emission_factor_id_activity_unit_key" ON "emission_factor"("id", "activity_unit");

-- AddForeignKey
ALTER TABLE "activity_record" ADD CONSTRAINT "activity_record_emission_factor_id_unit_fkey" FOREIGN KEY ("emission_factor_id", "unit") REFERENCES "emission_factor"("id", "activity_unit") ON DELETE CASCADE ON UPDATE NO ACTION;
