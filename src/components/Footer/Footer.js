import React from "react";
import Heading from "../Heading/Heading";
import { ArrowRotateRight, ArrowUp, ArrowUp2 } from "iconsax-react";

function Footer({ darkMode }) {
  const links = [
    {
      href: "https://github.com/Lloydpop",
      title: "github",
    },
    {
      href: "https://www.linkedin.com/in/lloydpop",
      title: "linkden",
    },
    {
      href: "https://twitter.com/perfectionchiz",
      title: "twitter",
    },
    {
      href: "https://www.instagram.com/perfection_dev_dump/",
      title: "instagram",
    },
    {
      href: "https://www.tiktok.com/@perfection_de_programmer",
      title: "tiktok",
    },
  ];
  return (
    <div className="lg:mt-48 mt-24">
      <footer>
        <p className="font-sauce text-center my-24 text-sm">
          If you have any inquiries, proposals, or exciting projects in mind,
          <br />
          feel free to reach out. I&apos;m open to collaboration
          <br /> and always ready to discuss new opportunities.
        </p>
        <div
          className={`text-center
          } border-b border-t py-6 ${
            darkMode ? "border-[#ffffffa6]" : "border-[#000]"
          } overflow-hidden`}
        >
          <a
            rel="noreferer"
            target="_blank"
            href="mailto:lloydperfect199@gmail.com"
            className={`text-[8rem] lg:text-[12rem]  flex items-center gap-10 ${
              darkMode ? "hover:text-primary" : "hover:text-gray-800"
            } animate-horizontalMovement px-4`}
          >
            <span> WANNA</span>
            <span>COLLABORATE?</span>

            <span>REACH</span>
            <span> OUT</span>
            <span>...</span>
            <span> WANNA</span>
            <span>COLLABORATE?</span>
            <span>REACH</span>
            <span> OUT</span>
            <span>...</span>
          </a>
        </div>
        <ul className="flex justify-center flex-wrap gap-9 mt-12 font-sauce font-[600]">
          {links.map((link) => (
            <li key={link.title}>
              <a
                rel="noreferer"
                target="_blank"
                href={link.href}
                className={` uppercase flex items-center gap-2 ${
                  darkMode
                    ? "border-white hover:border-b-primary"
                    : "border-black hover:border-b-gray-700"
                } hover:translate-x-1 duration-300 block border-b py-1`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
