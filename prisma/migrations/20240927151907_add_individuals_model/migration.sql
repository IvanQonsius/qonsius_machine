-- CreateTable
CREATE TABLE "Individuals" (
    "id" SERIAL NOT NULL,
    "user" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inactivatedAt" TIMESTAMP(3),

    CONSTRAINT "Individuals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Individuals_email_key" ON "Individuals"("email");
