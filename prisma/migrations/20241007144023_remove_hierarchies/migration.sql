/*
  Warnings:

  - You are about to drop the `Hierarchy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Hierarchy" DROP CONSTRAINT "Hierarchy_initiativeId_fkey";

-- DropTable
DROP TABLE "Hierarchy";
