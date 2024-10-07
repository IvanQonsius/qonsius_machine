/*
  Warnings:

  - You are about to drop the `Individuals` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Individuals";

-- CreateTable
CREATE TABLE "Individual" (
    "id" SERIAL NOT NULL,
    "user" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inactivatedAt" TIMESTAMP(3),

    CONSTRAINT "Individual_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Individual_email_key" ON "Individual"("email");
