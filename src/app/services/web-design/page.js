import React from "react";

const WebDesign = () => {
  return (
    <div className="pageWrapper">
      <section
        className={`flex flex-col items-center gap-4 bg-peach bg-[url(../assets/about/mobile/bg-pattern-hero-about-mobile.svg)] bg-right-top bg-no-repeat py-[6.5625rem] px-6 text-center md:gap-6 md:rounded-xl md:bg-[url(../assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg)] md:bg-[position:center_right_-160px] md:py-16 lg:bg-[position:center_right]`}
      >
        <h1 className="md:h1  max-w-[573px] text-[2rem] font-medium capitalize leading-[1.125em] text-white ">
          Web Design
        </h1>
        <p className=" max-w-[24.25rem] text-[0.9375rem] leading-relaxed text-white md:text-body ">
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </section>
    </div>
  );
};

export default WebDesign;
