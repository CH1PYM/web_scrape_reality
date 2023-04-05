-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "flatnName" TEXT NOT NULL,
    "imgURL" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
