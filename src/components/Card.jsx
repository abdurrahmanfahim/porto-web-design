import React from "react";
import { MdChevronRight } from "react-icons/md";

const Card = ({ style, heading, description, icon, cardColor, btnTxt, day, month }) => {
  return (
    <>
      {style === "serviceCard" && (
        <div className="card w-1/3 flex items-start p-3 ">
          <div className="icon bg-white text-primary p-4 text-[28px] rounded-full mt-3 me-4  ">
            {icon}
          </div>
          <div className="text">
            <h2 className=" text-[16.8px] font-bold tracking-[-1px] leading-6 uppercase mb-1  ">
              {heading}
            </h2>
            <p className="text-sm leading-26p opacity-[70%] ">{description}</p>
          </div>
        </div>
      )}

      {style === "achievementCard" && (
        <div className={`w-1/4 px-3 group `}>
          <div
            className={`card flex flex-col items-center py-12 px-7 text-center leading-26p border-t-4 border-t-${cardColor} rounded-lg shadow-lg `}
          >
            <div
              className={`ring-4 ${
                cardColor === "black" ? "ring-black" : `ring-${cardColor}`
              } icon flex items-center justify-center size-[110px] bg-${cardColor} rounded-full text-3xl border-${cardColor} text-white group-hover:border-[3px] group-hover:border-white transition-all duration-75 ease-out `}
            >
              {icon}
            </div>
            <h3
              className={`text-${cardColor} text-sm font-bold leading-24p tracking-[-0.7px] uppercase mt-8 mb-2 `}
            >
              {heading}
            </h3>
            <p className="text-gray text-sm px-5 mb-5">
              {description}
            </p>
            <a
              className="text-black text-xs font-bold inline-flex items-center gap-1 uppercase"
              href={`#`}
            >
              {btnTxt} <MdChevronRight className="text-[22px]" />{" "}
            </a>
          </div>
        </div>
      )}

      {style === "postCard" && (
        <div className="card h-[192px] flex gap-3.5 mt-7 w-1/4 ">
        <div className="date ">
          <div className="day bg-[#f4f4f4] text-black text-lg font-extrabold leading-26p size-[42px] flex justify-center items-center ">{day}</div>
          <div className="month bg-primary h-[22px] w-[42px] leading-26p text-xs text-white flex justify-center items-center mt-0.5 uppercase ">{month}</div>
        </div>
        <div className="post pe-10  ">
          <a className='text-black text-[17px] font-semibold leading-[22px] tracking-[-1px] hover:underline ' href="#">{heading}</a>
          <p className='text-gray text-sm leading-[21px]'>{description}</p>
          <a className='text-balance text-[12.5px] font-bold leading-26p inline-flex justify-center items-center gap-0.5 ' href="#">{btnTxt}<MdChevronRight className='text-lg' /></a>
        </div> 
      </div>
      )}
    </>
  );
};

export default Card;
