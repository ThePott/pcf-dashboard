/*
  Warnings:

  - A unique constraint covering the columns `[name,company_id]` on the table `product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "product_name_company_id_key" ON "product"("name", "company_id");
