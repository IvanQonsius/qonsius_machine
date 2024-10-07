-- CreateTable
CREATE TABLE "Hierarchy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "depth" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "initiativeId" INTEGER NOT NULL,

    CONSTRAINT "Hierarchy_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hierarchy" ADD CONSTRAINT "Hierarchy_initiativeId_fkey" FOREIGN KEY ("initiativeId") REFERENCES "Initiative"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
