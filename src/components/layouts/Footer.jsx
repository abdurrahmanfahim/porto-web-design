import React from "react";
import { FaRegDotCircle, FaWhatsapp } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { MdChevronRight } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-black  ">
        <div className="container relative -top-4">
        <div className="absolute before:absolute  before:content-['']  before:border-r-[10px] before:border-r-[#006699] before:border-t-[16px] before:border-t-transparent before:top-0 before:right-full before:w-[7px]  before:h-0 ">
        <p className="font-Shadows pt-2.5 pb-1.5 px-5 text-xl text-white bg-primary leading-26p ">Get in Touch</p>
        </div>
        </div>
        <div className="container py-[72px] ">
          <div className="flex">
            <div className="w-1/2">
              <div className="logo opacity-[70%] w-[71px]">
                <img src="../../../public/logo-footer.png" alt="logo-footer" />
              </div>
              <p className="text-gray text-[12.6px] leading-26p my-2.5 pe-9 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eu pulvinar magna. Phasellus semper scelerisque purus, et semper
                nisl lacinia sit amet. Praesent venenatis turpis vitae purus
                semper...
              </p>
              <a
                className="text-white text-[11.6px] font-bold inline-flex items-center gap-1 uppercase "
                href={`#`}
              >
                VIEW MORE
                <MdChevronRight className="text-xl " />
              </a>
            </div>
            <div className="w-1/2">
              <h5 className="text-[12.6px] leading-[18px] font-semibold text-white uppercase mb-[22px] ">
                CONTACT US
              </h5>
              <div className="flex ">
                <ul className="w-1/2 flex flex-col gap-0.5  ">
                  <li>
                    <p className="text-gray text-[12.6px] my-2 flex gap-3 items-center ">
                      <FaRegDotCircle className="text-primary text-base" />
                      234 Street Name, City Name
                    </p>
                  </li>
                  <li>
                    <p className="text-gray text-[12.6px] my-2 flex gap-3 items-center ">
                      <FaWhatsapp className="text-primary text-base" />
                      (800) 123-4567
                    </p>
                  </li>
                  <li>
                    <p className="text-gray text-[12.6px] my-2 flex gap-3 items-center ">
                      <HiOutlineEnvelope className="text-primary text-base" />
                      mail@example.com
                    </p>
                  </li>
                </ul>

                <ul className="w-1/2 flex flex-col  ">
                  <li className="text-gray text-[12.6px] my-2 flex gap-3 items-center">
                    <MdChevronRight className="text-primary text-base" />
                    <p className=" relative hover:left-1 hover:text-white transition-all duration-100 ease-in-out  ">
                      FAQ's
                    </p>
                  </li>
                  <li className="text-gray text-[12.6px] my-2 flex gap-3 items-center">
                    <MdChevronRight className="text-primary text-base" />
                    <p className=" relative hover:left-1 hover:text-white transition-all duration-100 ease-in-out  ">
                      Sitemap
                    </p>
                  </li>
                  <li className="text-gray text-[12.6px] my-2 flex gap-3 items-center">
                    <MdChevronRight className="text-primary text-base" />
                    <p className=" relative hover:left-1 hover:text-white transition-all duration-100 ease-in-out  ">
                      Contact Us
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="opacity-10 text-gray " />
        <div className="py-6 flex justify-center ">
          <p className=" text-[#555] leading-26p text-[11.34px] ">© Copyright 2025. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
