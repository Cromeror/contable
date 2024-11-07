-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "nit" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Voucher" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "contactId" INTEGER,
    "amount" DECIMAL NOT NULL,
    "description" TEXT,
    "status" TEXT
);

-- CreateTable
CREATE TABLE "VoucherItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "voucherId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "total" DECIMAL NOT NULL,
    "discount" DECIMAL NOT NULL DEFAULT 0,
    "quantity" DECIMAL NOT NULL,
    "unitPrice" DECIMAL NOT NULL,
    "productId" INTEGER,
    CONSTRAINT "VoucherItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "pucId" INTEGER,
    "unitPrice" DECIMAL NOT NULL,
    CONSTRAINT "Product_pucId_fkey" FOREIGN KEY ("pucId") REFERENCES "Puc" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Puc" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parentId" INTEGER,
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tax" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "percentage" DECIMAL NOT NULL
);

-- CreateTable
CREATE TABLE "VoucherItemTax" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "voucherItemId" INTEGER NOT NULL,
    "taxId" INTEGER NOT NULL,
    "value" DECIMAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_pucId_key" ON "Product"("pucId");
