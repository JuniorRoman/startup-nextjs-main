"use client";

import { useState, useEffect } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import OnlineCourses from "@/components/Courses/CoursesInfo";
import SingleCourse from "@/components/Courses/SingleCourseOff";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Courses Page", 
//   description: "Сторінка курсів-офлайн",
// };

export default function Course() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [views, setViews] = useState(0);

  useEffect(() => {
    fetch("/api/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log("Отримані курси:", data);
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Помилка завантаження курсів:", err);
        setError("Не вдалося завантажити курси");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-20">Завантаження...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Breadcrumb
        pageName="Kursy-Offline"
        description="Запрошуємо всих бажаючих отримати професію за короткий термін"
      />

      <section className="pb-[120px] pt-[80px]">
        <div className="container">
          <div className="wow fadeInUp  text-center lg:mb-16">
            <h4 className="mx-auto mb-4 max-w-3xl text-3xl font-bold">
              Офлайн-курс розпочнеться незабаром.{" "}
            </h4>
            <span className="text-xl">
              Підпишіться на нашу розсилку, щоб дізнатися, коли розпочнеться
              онлайн-курс.
            </span>
          </div>
        
          <div className="-mx-4 flex flex-wrap justify-center">
            {courses.map((cours: any) => (
              <div
                key={cours.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleCourse course={cours} />
              </div>
            ))}
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  );
}
