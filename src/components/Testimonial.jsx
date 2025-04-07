import React from "react";
import clientAvatar from "../assets/img/clients/client-1.jpg";
import { RxQuote } from "react-icons/rx";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial pt-20 pb-[102px]  bg-[url('https://www.okler.net/previews/porto/12.1.0/img/parallax/parallax-10.jpg')] bg-cover ">
        <div className="container text-center">
          <img
            className="size-[60px] rounded-full mx-auto mb-4 "
            src={clientAvatar}
            alt="clientAvatar"
          />
          <div className="slider relative ">
            <div className="slides">
              <div className="slide py-5 px-[22px] relative ">
                <p className=" font-Playfair text-black text-[22px] leading-8 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eget risus porta, tincidunt turpis at, interdum tortor.
                  Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Fusce ante tellus,
                  convallis non consectetur sed, pharetra nec ex.
                </p>
                <p className="text-[12.0px] leading-[15px] font-extrabold mt-7 mb-3 "> - John Smith. Okler</p>
                  <RxQuote className="text-4xl absolute top-0 left-[-4px]  rotate-180" />
                  <RxQuote className="text-4xl absolute bottom-0 right-[-4px]" />
              </div>
            </div>
            <div className="dots flex gap-1.5 absolute bottom-0 left-[50%] transform-x-[-50%] ">
              <div className="dot p-1 bg-primary rounded-full "></div>
              <div className="dot p-1 bg-[#d6d6d6] rounded-full hover:bg-primary "></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
