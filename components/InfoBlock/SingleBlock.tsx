import { Info } from "@/types/info";

const SingleBlock = ({ info }: { info: Info }) => {
  const { title, description} = info;
  return (
    <div className="relative grid  h-[10rem] max-w-lg flex-col items-center justify-center overflow-hidden rounded-lg shadow-[0px_0px_6px_3px_rgba(100,181,232,1)] dark:shadow-[0px_0px_6px_3px_rgba(255,157,46,1)]">
      <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none "></div>
      <div className="relative p-6 px-6 py-5 text-center md:px-12">
        <h2 className="flex flex-col items-start text-center text-lg  uppercase lg:items-center lg:text-xl">
          {title}
        </h2>
        <p className="mt-5 text-sm ">{description}</p>
      </div>
    </div>
  );
};

export default SingleBlock;
