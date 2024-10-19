-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "pucId" INTEGER;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_pucId_fkey" FOREIGN KEY ("pucId") REFERENCES "Puc"("id") ON DELETE SET NULL ON UPDATE CASCADE;
