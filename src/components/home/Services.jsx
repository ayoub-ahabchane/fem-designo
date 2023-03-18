import React from "react";
import ServiceTile from "../ServiceTile";

const servicesData = [
  {
    bgDesktop:
      "lg:bg-[url('../assets/home/desktop/image-web-design-large.jpg')]",
    bgMobile: "bg-[url('../assets/home/mobile/image-web-design.jpg')]",
    bgTablet: "md:bg-[url('../assets/home/tablet/image-web-design.jpg')]",
    title: "web design",
    link: "/services/web-design",
    gridStyles: "lg:col-span-1 lg:col-start-1 lg:row-span-full",
  },
  {
    bgDesktop: "lg:bg-[url('../assets/home/desktop/image-app-design.jpg')]",
    bgMobile: "bg-[url('../assets/home/mobile/image-app-design.jpg')]",
    bgTablet: "md:bg-[url('../assets/home/tablet/image-app-design.jpg')]",
    title: "app design",
    link: "/services/app-design",
  },
  {
    bgDesktop: "lg:bg-[url('../assets/home/desktop/image-graphic-design.jpg')]",
    bgMobile: "bg-[url('../assets/home/mobile/image-graphic-design.jpg')]",
    bgTablet: "md:bg-[url('../assets/home/tablet/image-graphic-design.jpg')]",
    title: "graphic design",
    link: "/services/graphic-design",
  },
];

const Services = () => {
  return (
    <section className="mdmax:px-6">
      <ul className="grid grid-cols-1 grid-rows-[repeat(3,_250px)] gap-y-6 text-center md:grid-rows-[repeat(3,_200px)] lg:grid-cols-2 lg:grid-rows-[repeat(2,_308px)] lg:gap-x-6">
        {servicesData.map((service) => (
          <li
            key={service.title}
            className={`${(service.gridStyles ??= null)} rounded-2xl ${
              service.bgMobile
            } bg-cover ${service.bgTablet}
        ${service.bgDesktop}`}
          >
            <ServiceTile {...service} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
