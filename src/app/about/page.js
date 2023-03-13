import Locations from "@/components/Locations";
import Canada from "@/components/svg/Canada";
import Link from "next/link";
import React from "react";
const About = () => {
  return (
    <div className="pageWrapper flex flex-col md:gap-[7.5rem] lg:gap-40">
      <section className="grid auto-rows-auto lg:grid-cols-[auto_476px]">
        <div className="row-span-1 row-start-2 flex flex-col items-center gap-6 bg-peach bg-[url('../assets/about/mobile/bg-pattern-hero-about-mobile.svg')] bg-[position:right_top_-140px] bg-no-repeat py-20 px-6 text-center text-white md:gap-8 md:rounded-b-2xl md:bg-[url('../assets/about/desktop/bg-pattern-hero-about-desktop.svg')] md:bg-[position:left_-121px_top_-430px] md:px-16 md:py-14 lg:col-span-1 lg:col-start-1 lg:row-span-1 lg:row-start-1 lg:items-start lg:justify-center lg:rounded-r-none lg:rounded-l-2xl lg:bg-[position:center_bottom] lg:px-24 lg:text-left">
          <h1 className=" text-[2rem]  font-medium capitalize leading-[1.125em]  md:text-5xl">
            About us
          </h1>
          <p className=" w-full text-[0.9375rem] leading-relaxed md:text-body">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
        <div
          role="none presentation"
          className="row-span-1 row-start-1 h-[20rem] w-full bg-[url('../assets/about/mobile/image-about-hero.jpg')] bg-cover md:rounded-t-2xl md:bg-[url('../assets/about/tablet/image-about-hero.jpg')] lg:col-span-1 lg:col-start-2 lg:row-span-1 lg:row-start-1 lg:h-[30rem] lg:rounded-l-none  lg:rounded-r-2xl lg:bg-[url('../assets/about/desktop/image-about-hero.jpg')]"
        ></div>
      </section>
      <section className="grid auto-rows-auto lg:grid-cols-[476px_auto] lg:grid-rows-1">
        <div className="row-span-1 row-start-2 flex flex-col items-center gap-6 bg-lighter-peach bg-[url('../assets/shared/desktop/bg-pattern-three-circles.svg')] bg-[position:left_top] bg-no-repeat py-20 px-6 text-center md:gap-8 md:rounded-b-2xl md:bg-[position:right_11px_bottom_44px] md:px-14 md:py-14 md:text-left lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:items-start lg:rounded-r-2xl lg:rounded-l-none lg:bg-[position:left_-146px_bottom] lg:py-[154px] lg:px-24">
          <h3 className="text-[2rem] font-medium capitalize leading-[1.125em]  text-peach md:text-[2.5rem]">
            World-class talent
          </h3>
          <p className="w-full text-center text-[0.9375rem] leading-relaxed text-black md:text-body lg:text-left">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="w-full text-center text-[0.9375rem] leading-relaxed text-black md:text-body lg:text-left">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
        <div
          role="none presentation"
          className="row-span-1 row-start-1 h-[20rem] w-full bg-[url('../assets/about/mobile/image-world-class-talent.jpg')] bg-cover md:rounded-t-2xl md:bg-[url('../assets/about/tablet/image-world-class-talent.jpg')] lg:col-span-1 lg:col-start-1 lg:h-full lg:rounded-tr-none lg:rounded-bl-2xl lg:bg-[url('../assets/about/desktop/image-world-class-talent.jpg')]"
        ></div>
      </section>
      <section>
        <Locations />
      </section>
      <section className="grid auto-rows-auto lg:grid-cols-[auto_476px] lg:grid-rows-1">
        <div className="row-span-1 row-start-2 flex flex-col items-center gap-6 bg-lighter-peach bg-[url('../assets/shared/desktop/bg-pattern-three-circles.svg')] bg-[position:left_top] bg-no-repeat py-20 px-6 text-center md:gap-8 md:rounded-b-2xl md:bg-[position:right_11px_bottom_44px] md:px-14 md:py-14 md:text-left lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:items-start lg:rounded-l-2xl lg:rounded-r-none lg:bg-[position:left_-146px_bottom] lg:py-[154px] lg:px-24">
          <h3 className=" text-[2rem] font-medium capitalize leading-[1.125em]  text-peach md:text-[2.5rem]">
            The real deal
          </h3>
          <p className="w-full text-center text-[0.9375rem] leading-relaxed text-black md:text-body lg:text-left">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="w-full text-center text-[0.9375rem] leading-relaxed text-black md:text-body lg:text-left">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
        <div
          role="none presentation"
          className="row-span-1 row-start-1 h-[20rem] w-full bg-[url('../assets/about/mobile/image-real-deal.jpg')] bg-cover md:rounded-t-2xl md:bg-[url('../assets/about/tablet/image-real-deal.jpg')] lg:col-span-1 lg:col-start-2 lg:h-full lg:rounded-r-2xl lg:rounded-l-none lg:bg-[url('../assets/about/desktop/image-real-deal.jpg')]"
        ></div>
      </section>
    </div>
  );
};

export default About;
