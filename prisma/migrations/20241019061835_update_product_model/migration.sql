/*
  Warnings:

  - A unique constraint covering the columns `[pucId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `unitPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `VoucherItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "unitPrice" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "VoucherItem" ADD COLUMN     "description" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_pucId_key" ON "Product"("pucId");
