import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Імпорт Prisma клієнта

// Обробник GET запиту для отримання всіх курсів
export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        author: true,
        sidebar: {
          include: {
            information: true,
          },
        },
      },
    });

    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 },
    );
  }
}

// Обробник POST запиту для створення нового курсу
export async function POST(request) {
  const {
    title,
    subtitle,
    subtitledetail,
    paragraph,
    benefitstitle,
    benefits,
    suitableFor,
    desc,
    actualcourse,
    data,
    publishDate,
    sidebarTitle,
    sidebarPrice,
    sidebarDescription,
    sidebarInformation,
    authorName,
    authorImage,
    authorDesignation,
    authorTags,
    image,
  } = await request.json();

  try {
    // Логування отриманих даних
    console.log("Дані отримано для створення курсу:", {
      title,
      subtitle,
      benefits,
      suitableFor,
      desc,
      actualcourse,
      data,
      publishDate,
    });

    // Перевірка на обов'язкові поля
    if (!title || !subtitle || !benefitstitle || !authorName) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 },
      );
    }

    const newCourse = await prisma.course.create({
      data: {
        title,
        subtitle,
        subtitledetail,
        paragraph,
        benefitstitle,
        actualcourse,
        data: new Date(data),
        publishDate: new Date(publishDate),
        sidebarTitle,
        sidebarPrice,
        sidebarDescription,
        sidebarInformation: {
          create: sidebarInformation,
        },
        authorName,
        authorImage,
        authorDesignation,
        authorTags,
        image,
        benefits: {
          create: benefits,
        },
        suitableFor: {
          create: suitableFor,
        },
        desc: {
          create: desc,
        },
      },
    });

    return new Response(JSON.stringify(newCourse), { status: 201 });
  } catch (error) {
    console.error("Error creating course:", error); // Логування помилки

    return new Response(
      `Error creating course: ${error.message || "Unknown error"}`,
      { status: 500 },
    );
  }
}
