"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import phoneImg from "../../assets/exports/heroPhone.png";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const mediaQueryString = "(max-width: 1023px)";
  const [isMobile, setIsMobile] = useState(false);

  const mobileHeroPhone = {
    initial: {
      translateY: "300px",
      opacity: 0,
    },
    animate: {
      opacity: 1,
      translateY: isMobile ? "0px" : "8.6875rem",
    },
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(mediaQueryString);
    const updateMobile = () => {
      setIsMobile(mediaQuery.matches);
    };
    updateMobile();

    mediaQuery.addEventListener("change", updateMobile);
    return () => mediaQuery.removeEventListener("change", updateMobile);
  }, [mediaQueryString]);
  console.log(isMobile);
  /*<motion.section
      className={`flex h-[843px] flex-col items-center gap-4 bg-peach bg-[fill,_cover] bg-[url(../assets/home/desktop/image-hero-phone.png),_url(../assets/home/desktop/bg-pattern-hero-home.svg)] bg-no-repeat px-7 py-20 text-center md:gap-8 md:rounded-xl md:bg-[position:bottom_-360px_center,center_right_-100px] md:py-[3.75rem] lg:h-auto lg:items-start lg:justify-center lg:gap-10 lg:bg-[position:bottom_-240px_right_-80px,center_right] lg:py-36 lg:px-24 lg:text-left`}
      initial={mobileHeroStyle.initial}
      animate={mobileHeroStyle.animate}
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
  </motion.section>*/

  return (
    <section className="grid grid-flow-row grid-rows-[auto_22.8rem] overflow-hidden bg-peach bg-[url(../assets/home/desktop/bg-pattern-hero-home.svg)] bg-[size:640px_640px] bg-[position:left_center] bg-no-repeat md:grid-rows-[auto_24.5rem] md:rounded-xl md:bg-[position:center_right_-100px] lg:grid-flow-col lg:grid-cols-[auto_auto] lg:grid-rows-1 lg:bg-[position:center_right] lg:px-24">
      <div className="z-20 flex flex-col items-center gap-5 self-center py-20 px-7 text-center md:gap-8 md:py-[3.75rem] lg:items-start lg:gap-10 lg:px-0 lg:py-[9.0625rem] lg:text-left">
        <h1 className="md:h1  max-w-[573px] text-[2rem] font-medium leading-[1.125em] text-white ">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className=" max-w-[445px] text-[0.9375rem] leading-relaxed text-white md:text-body ">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Link href={"/about"} className="button dark">
          learn more
        </Link>
      </div>
      <motion.div
        initial={mobileHeroPhone.initial}
        animate={mobileHeroPhone.animate}
        transition={{ duration: 0.7, ease: "circOut" }}
        className="justify-self-center rounded-[35px] drop-shadow-heroShadow lg:translate-y-[8.6875rem]"
      >
        <Image src={phoneImg} alt="" />
      </motion.div>
    </section>
  );
};

export default Hero;
