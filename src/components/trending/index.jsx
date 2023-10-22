import React, { useState } from 'react';
import { trendingData } from './trendingData';
import { MdOutlineNavigateNext } from 'react-icons/md';
import {AiFillFire} from 'react-icons/ai'

function TrendingCard() {
  const [index, setIndex] = useState(0);

  const incrementerLogic = () => {
    index + 1 >= trendingData.length ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <div className="select-none absolute bottom-8 left-[30%] w-[30rem] h-48 bg-opacity-70 backdrop-filter backdrop-blur-lg bg-[#c7c6c6] rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-20 transform rotate-12 w-1/4 h-full"></div>
      <div className="flex justify-between items-center p-2 w-[30rem] h-48 relative">
        <div className="rounded-xl w-[12rem] overflow-hidden relative">
          <img className="cursor-pointer object-cover h-44 w-[12rem]" src={trendingData[index].imgUrl} alt="prod" />
          <MdOutlineNavigateNext size={25}
            className="absolute z-[1] border rounded-full bg-white  text-c-txt bottom-4 right-4 cursor-pointer"
            onClick={incrementerLogic}
          />
        </div>
        <div className="flex flex-wrap p-2 w-[18rem] flex-col items-center">
          <div className="flex flex-wrap ">
            {trendingData[index].tags.map((tag, i) => (
              <div
                className="cursor-pointer  text-[0.8rem] p-2 w-min m-1 rounded-full bg-c-secondary overflow-hidden"
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
                key={i}
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="cursor-pointer text-xl font-semibold mt-4 flex rounded-full bg-white p-2"><AiFillFire size={25} className='text-c-txt mx-1 '/>{trendingData[index].name}</div>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;