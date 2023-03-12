import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectTile({ title, desc, image }) {
  return (
    <Link
      href={""}
      className=" group grid grid-flow-row rounded-2xl bg-lighter-peach hover:bg-peach hover:text-white md:grid-flow-col md:grid-cols-2 lg:grid-flow-row lg:grid-cols-1"
    >
      <Image
        src={image}
        alt=""
        className="w-full rounded-t-2xl object-contain md:rounded-l-2xl md:rounded-tr-none lg:rounded-tr-2xl lg:rounded-bl-none"
      />
      <div className="p-8 text-center md:flex md:flex-col md:justify-center ">
        <h3 className="h3 mb-4 text-peach group-hover:text-white">{title}</h3>
        <p className="text-body">{desc}</p>
      </div>
    </Link>
  );
}
