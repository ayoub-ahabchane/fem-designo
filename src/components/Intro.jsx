import React from "react";

const Intro = ({ title, desc }) => {
  return (
    <section
      className={`flex flex-col items-center gap-4 bg-peach bg-[url(../assets/about/mobile/bg-pattern-hero-about-mobile.svg)] bg-right-top bg-no-repeat py-[6.5625rem] px-6 text-center md:gap-6 md:rounded-xl md:bg-[url(../assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg)] md:bg-[position:center_right_-160px] md:py-16 lg:bg-[position:center_right]`}
    >
      <h1 className="md:h1  max-w-[573px] text-[2rem] font-medium capitalize leading-[1.125em] text-white ">
        {title}
      </h1>
      <p className=" max-w-[24.25rem] text-[0.9375rem] leading-relaxed text-white md:text-body ">
        {desc}
      </p>
    </section>
  );
};

export default Intro;
