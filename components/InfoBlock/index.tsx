import { infoData } from "./infoData";
import SingleBlock from "./SingleBlock";

const InfoBlocks = () => {
  return (
    <div className="container">
      <div className=" my-5 grid grid-cols-1 grid-rows-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {infoData.map((info) => (
          <div key={info.id} className="w-full">
            <SingleBlock info={info} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBlocks;
