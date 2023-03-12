"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navmenu from "./Navmenu";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className=" bg-white py-9 px-6 md:py-16 md:px-10">
      <div className="mx-auto flex w-full max-w-[1111px] items-center justify-between">
        <Logo />

        <Navmenu />
      </div>
    </header>
  );
};

export default Header;
