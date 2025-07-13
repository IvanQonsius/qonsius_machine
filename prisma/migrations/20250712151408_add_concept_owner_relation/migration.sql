/*
  Warnings:

  - You are about to drop the `Initiative` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_IndividualInitiatives` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_IndividualInitiatives" DROP CONSTRAINT "_IndividualInitiatives_A_fkey";

-- DropForeignKey
ALTER TABLE "_IndividualInitiatives" DROP CONSTRAINT "_IndividualInitiatives_B_fkey";

-- DropTable
DROP TABLE "Initiative";

-- DropTable
DROP TABLE "_IndividualInitiatives";

-- CreateTable
CREATE TABLE "Concept" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "synonyms" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "conceptOwnerId" INTEGER NOT NULL,

    CONSTRAINT "Concept_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Concept_name_key" ON "Concept"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Concept_slug_key" ON "Concept"("slug");

-- AddForeignKey
ALTER TABLE "Concept" ADD CONSTRAINT "Concept_conceptOwnerId_fkey" FOREIGN KEY ("conceptOwnerId") REFERENCES "Individual"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
