"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { League_Spartan } from "next/font/google";
import Navmenu from "./Navmenu";

const league_spartan = League_Spartan({
  variable: "--font-league-spartan",
  display: "swap",
});

const Header = () => {
  return (
    <header className="fixed inset-x-0 bg-white py-9 md:py-16 md:px-10 mdmax:px-6">
      <div className="mx-auto flex w-full max-w-[1111px] items-center justify-between">
        <Link href="/" className="flex cursor-pointer items-center gap-4">
          <span className=" inline-block h-6 w-6 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-peach via-light-peach to-white" />
          <span
            className={`${league_spartan.className} text-2xl font-bold uppercase leading-none tracking-[0.2em]`}
          >
            designo
          </span>
        </Link>

        <Navmenu />
      </div>
    </header>
  );
};

export default Header;
