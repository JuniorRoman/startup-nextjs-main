import suitableData from "@/components/Courses/coursesDataOff";

export default function Suitable() {
  const suitable = suitableData.find((item) => item.id === Number(item.id));
  return (
    <>
      <div
        className="wow fadeInUp w-full text-body-color dark:text-slate-400"
        data-wow-delay=".1s"
      >
        <div className="mb-5 flex items-center justify-center">
          <h3 className="font-xl mt-10 text-center font-bold leading-tight text-black dark:text-white  sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
            {suitable.benefitstitle}
          </h3>
        </div>
        <ul className="mb-10 list-inside list-disc ">
          {suitable.benefits.map((item) => (
            <li
              key={item.id}
              className="mb-2 text-base font-medium  sm:text-lg lg:text-base xl:text-lg"
            >
              <strong>{item.title} </strong>
              {item.description}
            </li>
          ))}
        </ul>
        <div className="mb-5 flex items-center justify-center">
          <h4 className="font-xl sm:text-md font-semibold leading-tight text-black dark:text-white sm:leading-tight lg:text-lg lg:leading-tight xl:text-2xl xl:leading-tight">
            Кому підійде цей курс
          </h4>
        </div>

        <ul className="mb-10 list-inside list-disc ">
          {suitable.suitableFor.map((item) => (
            <li
              key={item.id}
              className="mb-2 text-base font-medium  sm:text-lg lg:text-base xl:text-lg"
            >
              {item.paragraph}
            </li>
          ))}
        </ul>
        <div className="mb-10">
          <h4 className="font-xl sm:text-md mb-5 text-center font-semibold leading-tight text-black dark:text-white sm:leading-tight lg:text-lg lg:leading-tight xl:text-2xl xl:leading-tight">
            Курс фарбування волосся включає
          </h4>
          {suitable.desc.map((desc) => (
            <p
              key={desc.id}
              className="mb-2 text-base font-medium  sm:text-lg lg:text-base xl:text-lg"
            >
              {desc.paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
