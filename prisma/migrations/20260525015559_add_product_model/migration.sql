/*
  Warnings:

  - You are about to drop the column `emission_factor_unit_id` on the `activity_record` table. All the data in the column will be lost.
  - Added the required column `emission_factor_id` to the `activity_record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `activity_record` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "activity_record" DROP CONSTRAINT "activity_record_emission_factor_unit_id_fkey";

-- AlterTable
ALTER TABLE "activity_record" DROP COLUMN "emission_factor_unit_id",
ADD COLUMN     "emission_factor_id" BIGINT NOT NULL,
ADD COLUMN     "product_id" BIGINT NOT NULL;

-- CreateTable
CREATE TABLE "product" (
    "id" BIGSERIAL NOT NULL,
    "company_id" BIGINT,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "activity_record" ADD CONSTRAINT "activity_record_activity_description_id_fkey" FOREIGN KEY ("activity_description_id") REFERENCES "activity_description"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "activity_record" ADD CONSTRAINT "activity_record_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "activity_record" ADD CONSTRAINT "activity_record_emission_factor_id_fkey" FOREIGN KEY ("emission_factor_id") REFERENCES "emission_factor"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
