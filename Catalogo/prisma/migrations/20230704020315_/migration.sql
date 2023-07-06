-- CreateTable
CREATE TABLE "Photo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "ProductPhoto" (
    "idProduct" INTEGER NOT NULL,
    "idPhoto" INTEGER NOT NULL,

    PRIMARY KEY ("idProduct", "idPhoto"),
    CONSTRAINT "ProductPhoto_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductPhoto_idPhoto_fkey" FOREIGN KEY ("idPhoto") REFERENCES "Photo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CategoryPhoto" (
    "idCategory" INTEGER NOT NULL,
    "idPhoto" INTEGER NOT NULL,

    PRIMARY KEY ("idCategory", "idPhoto"),
    CONSTRAINT "CategoryPhoto_idCategory_fkey" FOREIGN KEY ("idCategory") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CategoryPhoto_idPhoto_fkey" FOREIGN KEY ("idPhoto") REFERENCES "Photo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductCategory" (
    "idProduct" INTEGER NOT NULL,
    "idCategory" INTEGER NOT NULL,

    PRIMARY KEY ("idProduct", "idCategory"),
    CONSTRAINT "ProductCategory_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductCategory_idCategory_fkey" FOREIGN KEY ("idCategory") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
