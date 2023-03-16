import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      className={`flex h-[843px] flex-col items-center gap-4 bg-peach bg-[fill,_cover] bg-[url(../assets/home/desktop/image-hero-phone.png),_url(../assets/home/desktop/bg-pattern-hero-home.svg)] bg-[position:bottom_-370px_center,_left] bg-no-repeat px-7 py-20 text-center md:gap-8 md:rounded-xl md:bg-[position:bottom_-360px_center,center_right_-100px] md:py-[3.75rem] lg:h-auto lg:items-start lg:justify-center lg:gap-10 lg:bg-[position:bottom_-240px_right_-80px,center_right] lg:py-36 lg:px-24 lg:text-left`}
    >
      <h1 className="md:h1  max-w-[573px] text-[2rem] font-medium leading-[1.125em] text-white ">
        Award-winning custom designs and digital branding solutions
      </h1>
      <p className=" max-w-[445px] text-[0.9375rem] leading-relaxed text-white md:text-body ">
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <Link href={"/about"} className="button dark">
        learn more
      </Link>
    </section>
  );
};

export default Hero;
