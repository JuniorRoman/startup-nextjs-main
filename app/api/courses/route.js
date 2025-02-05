import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
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
    } = body;

    const newCourse = await prisma.course.create({
      data: {
        title,
        subtitle,
        subtitledetail,
        paragraph,
        benefitstitle,
        actualcourse,
        data: data ? new Date(data) : null,
        publishDate: publishDate ? new Date(publishDate) : null,
        sidebarTitle,
        sidebarPrice: sidebarPrice ? parseFloat(sidebarPrice) : null,
        sidebarDescription: sidebarDescription?.length
          ? { create: sidebarDescription }
          : undefined, // 🛠 Фікс sidebarDescription
        authorName,
        authorImage,
        authorDesignation,
        authorTags: Array.isArray(authorTags) ? authorTags : [],
        image,
        benefits: benefits?.length ? { create: benefits } : undefined,
        suitableFor: suitableFor?.length ? { create: suitableFor } : undefined,
        desc: desc?.length ? { create: desc } : undefined,
        sidebarInformation: sidebarInformation?.length
          ? { create: sidebarInformation }
          : undefined,
      },
    });

    return NextResponse.json(newCourse, { status: 201 });
  } catch (error) {
    console.error("Помилка створення курсу:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
