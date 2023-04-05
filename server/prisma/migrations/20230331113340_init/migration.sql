/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "FlatRecord" (
    "id" SERIAL NOT NULL,
    "flatName" TEXT NOT NULL,
    "imgURL" TEXT NOT NULL,

    CONSTRAINT "FlatRecord_pkey" PRIMARY KEY ("id")
);
