import Image from "next/image";
import Link from "next/link";

const RelatedPost = ({
  title,
}: {
  
  title: string;
}) => {
  return (
    <div className="flex items-center lg:block xl:flex">
      <div className="w-full">
          <p className="mb-[6px] block text-body-color font-medium leading-snug dark:text-white dark:hover:text-primary">
            {title}
          </p>
      </div>
    </div>
  );
};

export default RelatedPost;
