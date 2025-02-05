/*
  Warnings:

  - The primary key for the `Benefit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `sidebarDescription` on the `Course` table. All the data in the column will be lost.
  - The primary key for the `Description` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SuitableFor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `SidebarInfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Benefit" DROP CONSTRAINT "Benefit_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Description" DROP CONSTRAINT "Description_courseId_fkey";

-- DropForeignKey
ALTER TABLE "SidebarInfo" DROP CONSTRAINT "SidebarInfo_courseId_fkey";

-- DropForeignKey
ALTER TABLE "SuitableFor" DROP CONSTRAINT "SuitableFor_courseId_fkey";

-- AlterTable
ALTER TABLE "Benefit" DROP CONSTRAINT "Benefit_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "courseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Benefit_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Benefit_id_seq";

-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
DROP COLUMN "sidebarDescription",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "subtitle" DROP NOT NULL,
ALTER COLUMN "subtitledetail" DROP NOT NULL,
ALTER COLUMN "paragraph" DROP NOT NULL,
ALTER COLUMN "benefitstitle" DROP NOT NULL,
ALTER COLUMN "actualcourse" DROP NOT NULL,
ALTER COLUMN "data" DROP NOT NULL,
ALTER COLUMN "publishDate" DROP NOT NULL,
ALTER COLUMN "sidebarTitle" DROP NOT NULL,
ALTER COLUMN "sidebarPrice" DROP NOT NULL,
ALTER COLUMN "sidebarPrice" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "authorName" DROP NOT NULL,
ALTER COLUMN "authorImage" DROP NOT NULL,
ALTER COLUMN "authorDesignation" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL,
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Course_id_seq";

-- AlterTable
ALTER TABLE "Description" DROP CONSTRAINT "Description_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "courseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Description_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Description_id_seq";

-- AlterTable
ALTER TABLE "SuitableFor" DROP CONSTRAINT "SuitableFor_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "courseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "SuitableFor_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "SuitableFor_id_seq";

-- DropTable
DROP TABLE "SidebarInfo";

-- CreateTable
CREATE TABLE "SidebarDescription" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "paragraph" TEXT NOT NULL,

    CONSTRAINT "SidebarDescription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SidebarInformation" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "SidebarInformation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Benefit" ADD CONSTRAINT "Benefit_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuitableFor" ADD CONSTRAINT "SuitableFor_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Description" ADD CONSTRAINT "Description_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SidebarDescription" ADD CONSTRAINT "SidebarDescription_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SidebarInformation" ADD CONSTRAINT "SidebarInformation_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
