import { Course } from "@/types/course";
import Image from "next/image";
import Link from "next/link";

const SingleCourse = ({ course }: { course: Course }) => {
  const { title, image, paragraph, author, publishDate } = course;
  return (
    <>
      <div
        className="wow fadeInUp  dark:shadow-gray-light group relative overflow-hidden rounded-sm bg-white shadow-md duration-300 dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link
          href={`/courses/courses-offline/${course.id}`}
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
          {course.authorTags[0]}
          </span>
          <Image
            src={image}
            alt="image"
            width={500}
            height={450}
            // fill
            className="w-full h-auto  border object-cover object-center"
          />
          
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/courses/courses-offline/${course.id}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10 ">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={course.authorImage}
                    alt="author"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {course.authorName}
                </h4>
                <p className="text-xs text-body-color">
                  {course.authorDesignation}
                </p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">
                {publishDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
