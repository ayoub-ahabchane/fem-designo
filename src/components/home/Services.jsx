import Link from "next/link";
import React from "react";

const Services = () => {
  // TODO: (Refactor) Extract service tile component
  return (
    <section className="mdmax:px-6">
      <ul className="grid grid-cols-1 grid-rows-[repeat(3,_250px)] gap-y-6 text-center md:grid-rows-[repeat(3,_200px)] lg:grid-cols-2 lg:grid-rows-[repeat(2,_308px)] lg:gap-x-6">
        <li className="rounded-2xl bg-[url('../assets/home/mobile/image-web-design.jpg')] bg-cover md:bg-[url('../assets/home/tablet/image-web-design.jpg')] lg:col-span-1 lg:col-start-1 lg:row-span-full lg:bg-[url('../assets/home/desktop/image-web-design-large.jpg')]">
          <Link
            className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl bg-[image:linear-gradient(rgba(29,_28,_30,_0.7),_rgba(29,_28,_30,_0.7))] bg-cover  text-white bg-blend-overlay hover:bg-[image:linear-gradient(rgba(231,_129,_107,_0.7),_rgba(231,_129,_107,_0.7))]"
            href="/services/web-design"
          >
            <p className="text-[1.75rem] font-medium uppercase tracking-wide md:text-[2.5rem]">
              web design
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <p className="text-[0.9375rem] font-medium uppercase tracking-[0.3em]">
                view projects
              </p>
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1l4 4-4 4"
                  stroke="#E7816B"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </Link>
        </li>
        <li className="rounded-2xl bg-[url('../assets/home/mobile/image-app-design.jpg')] bg-cover md:bg-[url('../assets/home/tablet/image-app-design.jpg')] lg:bg-[url('../assets/home/desktop/image-app-design.jpg')]">
          <Link
            className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl bg-[image:linear-gradient(rgba(29,_28,_30,_0.7),_rgba(29,_28,_30,_0.7))] bg-cover  text-white bg-blend-overlay hover:bg-[image:linear-gradient(rgba(231,_129,_107,_0.7),_rgba(231,_129,_107,_0.7))]"
            href="/services/app-design"
          >
            <p className="text-[1.75rem] font-medium uppercase tracking-wide md:text-[2.5rem]">
              app design
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <p className="text-[0.9375rem] font-medium uppercase tracking-[0.3em]">
                view projects
              </p>
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1l4 4-4 4"
                  stroke="#E7816B"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </Link>
        </li>
        <li className="rounded-2xl bg-[url('../assets/home/mobile/image-graphic-design.jpg')] bg-cover md:bg-[url('../assets/home/tablet/image-graphic-design.jpg')] lg:bg-[url('../assets/home/desktop/image-graphic-design.jpg')]">
          <Link
            className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl bg-[image:linear-gradient(rgba(29,_28,_30,_0.7),_rgba(29,_28,_30,_0.7))] bg-cover  text-white bg-blend-overlay hover:bg-[image:linear-gradient(rgba(231,_129,_107,_0.7),_rgba(231,_129,_107,_0.7))]"
            href="/services/graphic-design"
          >
            <p className="text-[1.75rem] font-medium uppercase tracking-wide md:text-[2.5rem]">
              graphic design
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <p className="text-[0.9375rem] font-medium uppercase tracking-[0.3em]">
                view projects
              </p>
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1l4 4-4 4"
                  stroke="#E7816B"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Services;
