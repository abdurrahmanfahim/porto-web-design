import React from "react";
import desktopImg from '../assets/img/desktop-device-1.png'

const About = () => {
  return (
    <>
      <section className="about bg-[#f4f4f4] w-full pt-[100px] pb-[148px] ">
        <div className="container flex relative">
          <div className="w-1/2">
            <h2 className="text-black text-2xl tracking-[-1.4px] leading-[42plx] ">
              <span className="font-extrabold capitalize">Who</span> We Are
            </h2>

            <p className="text-gray text-[19px] font-light tracking-[-1px] leading-7 my-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit massa enim. Nullam id valorem ipsum dolor sit amet,
              consectetur adipiscinorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>

            <p className="text-sm leading-26p text-gray mb-6 ">Phasellus blandit massa enim. Nullam id varius elit. blandit massa enimariusius.</p>

            <a className="text-[#fefefe] bg-black text-sm leading-4 py-3 px-12 inline-block rounded hover:bg-[#32383e] " href="#">our history</a>
          </div>
          <img className="absolute right-[-12%] top-[-85%] " src={desktopImg} alt="desktopImg" />
        </div>
      </section>
    </>
  );
};

export default About;
