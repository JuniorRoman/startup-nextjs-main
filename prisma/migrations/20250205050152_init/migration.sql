-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "subtitledetail" TEXT NOT NULL,
    "paragraph" TEXT NOT NULL,
    "benefitstitle" TEXT NOT NULL,
    "actualcourse" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "publishDate" TIMESTAMP(3) NOT NULL,
    "sidebarTitle" TEXT NOT NULL,
    "sidebarPrice" INTEGER NOT NULL,
    "sidebarDescription" TEXT[],
    "authorName" TEXT NOT NULL,
    "authorImage" TEXT NOT NULL,
    "authorDesignation" TEXT NOT NULL,
    "authorTags" TEXT[],
    "image" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Benefit" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Benefit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuitableFor" (
    "id" SERIAL NOT NULL,
    "paragraph" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "SuitableFor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Description" (
    "id" SERIAL NOT NULL,
    "paragraph" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Description_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SidebarInfo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "SidebarInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Benefit" ADD CONSTRAINT "Benefit_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuitableFor" ADD CONSTRAINT "SuitableFor_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Description" ADD CONSTRAINT "Description_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SidebarInfo" ADD CONSTRAINT "SidebarInfo_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
