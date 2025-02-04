/*
  Warnings:

  - You are about to drop the column `actualYear` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `publishDate` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `subtitledetail` on the `Course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "actualYear",
DROP COLUMN "description",
DROP COLUMN "image",
DROP COLUMN "publishDate",
DROP COLUMN "startDate",
DROP COLUMN "subtitledetail",
ALTER COLUMN "subtitle" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Sidebar" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Sidebar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Information" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" TEXT,
    "sidebarId" INTEGER NOT NULL,

    CONSTRAINT "Information_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sidebar_courseId_key" ON "Sidebar"("courseId");

-- AddForeignKey
ALTER TABLE "Sidebar" ADD CONSTRAINT "Sidebar_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Information" ADD CONSTRAINT "Information_sidebarId_fkey" FOREIGN KEY ("sidebarId") REFERENCES "Sidebar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
