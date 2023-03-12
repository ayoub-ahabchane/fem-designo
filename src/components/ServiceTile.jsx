import Link from "next/link";
import React from "react";

const ServiceTile = ({ title, link }) => {
  return (
    <Link
      className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl bg-[image:linear-gradient(rgba(29,_28,_30,_0.7),_rgba(29,_28,_30,_0.7))] bg-cover  text-white bg-blend-overlay hover:bg-[image:linear-gradient(rgba(231,_129,_107,_0.7),_rgba(231,_129,_107,_0.7))]"
      href={link}
    >
      <p className="text-[1.75rem] font-medium uppercase tracking-wide md:text-[2.5rem]">
        {title}
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
  );
};

export default ServiceTile;
