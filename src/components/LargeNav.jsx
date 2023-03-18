import React from "react";
import Link from "next/link";

const navItems = [
  { title: "our company", link: "/about" },
  { title: "locations", link: "/locations" },
  { title: "contact", link: "/contact" },
];

const LargeNav = () => {
  return (
    <nav className="navWrapper mdmax:hidden">
      <ul className="largeNavList">
        {navItems.map(({ title, link }, index) => (
          <li key={`navigation${index}`}>
            <Link
              href={link}
              className="uppercase hover:underline"
              onClick={() => isMobile && toggleNav()}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LargeNav;
