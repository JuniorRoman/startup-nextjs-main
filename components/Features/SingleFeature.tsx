import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { image, title, paragraph } = feature;
  return (
    <div className="w-full border-0 border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-700 dark:bg-gray-800 rounded-lg">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex  items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
        </div>
        <h3 className="mb-5 text-center text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
