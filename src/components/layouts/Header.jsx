import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { MdChevronRight } from "react-icons/md";

const Header = () => {
  return (
    <>
      <header className="w-full border-b border-[#99999924] border-t-primary border-t-3 py-5 ">
        <div className="container">
          <div className="flex justify-between">
            <div className="navigate flex text-gray text-[11.34px] leading-24p tracking-sm uppercase">
              <a className="flex items-center justify-between me-4 cursor-pointer group">
                <MdChevronRight className="text-base transition-all duration-200 group-hover:translate-x-1" /> about us
              </a>
              <a className="flex items-center justify-between me-4 cursor-pointer group">
                <MdChevronRight className="text-base transition-all duration-200 group-hover:translate-x-1" /> contact us
              </a>
            </div>
            <div className="contact flex items-center justify-baseline text-gray text-[12.6px] leading-sm leading-24p ">
              <div className="email flex items-center justify-baseline px-2">
                <HiOutlineEnvelope className="text-primary text-[15.12px] me-1 font-bold"/>
                <a href="#">mail@domain.com</a>
              </div>
              <div className="whatsapp flex items-center justify-baseline px-2">
                <FaWhatsapp className="text-primary text-[15.12px] me-1 font-bold"/>
                <a href="#">123-456-7890</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
