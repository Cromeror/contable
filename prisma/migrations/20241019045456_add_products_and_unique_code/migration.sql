-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nit" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT,
    "type" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Voucher" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "contactId" INTEGER,
    "amount" DECIMAL(65,30) NOT NULL,
    "description" TEXT,
    "status" TEXT,

    CONSTRAINT "Voucher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VoucherItem" (
    "id" SERIAL NOT NULL,
    "voucherId" INTEGER NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "discount" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "quantity" DECIMAL(65,30) NOT NULL,
    "unitPrice" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "VoucherItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Puc" (
    "id" SERIAL NOT NULL,
    "parentId" INTEGER,
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Puc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tax" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "percentage" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Tax_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VoucherItemTax" (
    "id" SERIAL NOT NULL,
    "voucherItemId" INTEGER NOT NULL,
    "taxId" INTEGER NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "VoucherItemTax_pkey" PRIMARY KEY ("id")
);
