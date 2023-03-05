"use client";

import React from "react";
import useNavMenu from "../store/hooks/useNavMenu";
import Close from "./svg/Close";
import Hamburger from "./svg/Hamburger";
import Link from "next/link";

const navItems = [
  { title: "our company", link: "/about" },
  { title: "location", link: "/location" },
  { title: "contact", link: "/contact" },
];

const Navmenu = () => {
  const { isMobile, isVisible, toggleNav } = useNavMenu("(max-width: 768px)");
  return (
    <div>
      {isMobile && (
        <button className="inline-block" onClick={toggleNav}>
          {isVisible ? <Close /> : <Hamburger />}
        </button>
      )}
      {isVisible && (
        <nav className="navWrapper">
          <ul className="nav">
            {navItems.map(({ title, link }, index) => (
              <li key={`navigation${index}`}>
                <Link href={link} className="uppercase hover:underline">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navmenu;
