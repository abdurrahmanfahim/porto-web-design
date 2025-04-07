import React from "react";

const Banner = () => {
  return (
    <>
      <section className="bg-[url('https://www.okler.net/previews/porto/12.1.0/img/slides/slide-bg-8.jpg')] bg-cover w-full h-[600px] ">
        <div className="container h-full flex flex-col justify-center items-center ">
          <div className="sub flex gap-26p mb-3 ">
            <img
              src="slide-title-border-light.png"
              alt="slide-title-border-light"
            />
            <span className="text-black text-xl font-semibold leading-[32px] tracking-[-1px] uppercase ">
              DO YOU NEED A NEW
            </span>
            <img
              src="slide-title-border-light.png"
              alt="slide-title-border-light"
            />
          </div>
          <h1 className="text-black text-5xl font-extrabold tracking-[-2.5px] leading-11 mb-4 uppercase ">
            Web design
          </h1>
          <p className="text-lg font-light leading-26p text-black ">
            Check out our options and features
          </p>
        </div>
      </section>

      {/* Text And Button */}
      <div className="textAndButton py-10 bg-[#ededed] ">
        <div className="container flex items-center">
          <div className="w-2/3">
            <h6 className="text-xl font-bold leading-26p tracking-sm text-black">
              The fastest way to grow your business with the leader in{" "}
              <span className="text-3xl font-semibold tracking-sm leading-26p text-primary font-Shadows relative">
                Technology
                <img
                  className="absolute rotate-180 bottom-[-6px] right-[36px]"
                  src="https://www.okler.net/previews/porto/12.1.0/img/pencil-blue-line.png"
                  alt="pencil-blue-line"
                />
              </span>
            </h6>
            <p className="text-base font-light leading-26p tracking-sm text-gray ">
              Check out our options and features included.
            </p>
          </div>
          <div className="w-1/3 ">
            <a
              className="py-3 px-6 bg-[#0088cc] text-white text-sm leading-[18.5px] tracking-sm border rounded-lg border-[#006ea6
] hover:bg-[#069] capitalize me-5  "
              href="#"
            >
              get started now
            </a>
            <span>or </span>
            <a
              className="text-dark text-sm leading-26p tracking-sm font-bold text-right hover:underline"
              href="#"
            >
              learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
