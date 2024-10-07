-- CreateTable
CREATE TABLE "Initiative" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "LinkToSynthesisMap" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Initiative_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IndividualInitiatives" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IndividualInitiatives_AB_unique" ON "_IndividualInitiatives"("A", "B");

-- CreateIndex
CREATE INDEX "_IndividualInitiatives_B_index" ON "_IndividualInitiatives"("B");

-- AddForeignKey
ALTER TABLE "_IndividualInitiatives" ADD CONSTRAINT "_IndividualInitiatives_A_fkey" FOREIGN KEY ("A") REFERENCES "Individual"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndividualInitiatives" ADD CONSTRAINT "_IndividualInitiatives_B_fkey" FOREIGN KEY ("B") REFERENCES "Initiative"("id") ON DELETE CASCADE ON UPDATE CASCADE;
