import SingleKurs from "@/components/Courses/SingleCourseOff";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import OnlineCourses from "@/components/Courses/CoursesInfo";
import coursesDataOff from "@/components/Courses/coursesDataOff";

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

const Courses = () => {
  return (
    <>
      <Breadcrumb
        pageName="Kursy-Offline"
        description="Zapisz się i Dodaj do koszyka, aby rozpocząć kurs."
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
            {coursesDataOff.map((cours) => (
              <div
                key={cours.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleKurs course={cours} />
              </div>
            ))}
          </div>
          <OnlineCourses />
        </div>
      </section>
    </>
  );
};

export default Courses;
