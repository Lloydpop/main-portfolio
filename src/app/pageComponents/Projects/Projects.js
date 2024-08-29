import crypto from "../../../../public/img/crypto.png";
import cappen from "../../../../public/img/cheap.jpg";
import primus from "../../../../public/img/primus.png";
import student from "../../../../public/img/student.png";
import gmfb from "../../../../public/img/gmfb.png";
import landest from "../../../../public/img/landest.png";
import React from "react";
import Image from "next/image";
import { EyeSlash, Link } from "iconsax-react";
import Heading from "../../../components/Heading/Heading";
function Projects({ darkMode }) {
  const data = [
    {
      name: "LANDEST",
      description:
        "Enhance and elevate your real estate operations like never before with Landest. Experience seamless, innovative solutions designed to streamline your processes, maximize efficiency, and unlock new potential in the real estate market.",
      image: landest,
      href: "https://landest.co",
      tool: "Next",
    },
    {
      name: "GMFB",
      description:
        " Embracing the latest in financial technology, we provide seamless digital banking solutions that enhance efficiency and convenience for our corporate clients. Manage your finances, conduct transactions, and access information with ease through our user-friendly platforms.",
      image: gmfb,
      href: "https://corporatebanking.groomingmfb.com/",
      tool: "React",
    },
    {
      name: "CRYPTO-NET",
      description:
        " Experience the sophistication of tracking cryptocurrency exchange rates effortlessly. Our platform seamlessly blends cutting-edgetechnology with refined simplicity, empowering you with confidence in understanding and monitoring crypto values. Join our community for a journey into precise cryptocurrency tracking.",
      image: crypto,
      href: "https://crpto-net.vercel.app/",
      tool: "Next",
    },
    {
      name: "CHEAP RIDE",
      description:
        "A mobile solution designed to make affordable transportation accessible to everyone.",
      image: cappen,
      href: "#",
      tool: "React Native",
    },
    {
      name: "PRIMUS",
      description:
        " Explore Primus Microservices — Your Gateway to Seamless Integration. Harness the power of modular solutions for simplified and efficient development. Join us in building resilient applications with Primus Microservices.",
      image: primus,
      href: "https://www.primussuite.com/",
      tool: "Next",
    },

    {
      name: "HOMES",
      description:
        "At Student Homes, we're here to simplify the rental experience. We connect landlords with their ideal tenants and offer a diverse range of rental options for those in search of a home. Our mission is to provide transparency, convenience, and exceptional service. Join us today and discover a better way to rent.",
      image: student,
      href: "https://student-homes.vercel.app/",
      tool: "React",
    },
  ];
  return (
    <div className=" mt-24">
      <h1 className="font-sauce tracking-tight font-bold mb-6">
        FEATURED / PERSONAL PROJECTS [ {data?.length} ]
      </h1>

      {data.map((item, i) => (
        <div
          key={item.name}
          className={`flex lg:flex-row flex-col justify-between lg:gap-24 gap-12   ${
            i === 0 && "border-t"
          } border-b py-6 ${darkMode ? "border-[#ffffffa6]" : "border-[#000]"}`}
        >
          <div className="lg:w-[50%]">
            <Heading darkMode={darkMode} size="10rem">
              {item.name}
            </Heading>
            <p
              className={`font-sauce lg:-mt-10 mt-7 text-sm ${
                darkMode ? "text-gray-300" : "font-[500]"
              }`}
            >
              {item?.description}
            </p>
            <p className=" font-sauce uppercase flex items-center gap-1 mt-4 text-sm">
              {item.tool}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </p>
            <a
              target={i !== 2 && "_blank"}
              rel="noreferer"
              href={item.href}
              className={`flex items-center gap-2 font-sauce mt-3 tracking-tighter ${
                darkMode
                  ? "text-primary hover:text-gray-400"
                  : "text-black hover:text-primary"
              } font-bold`}
            >
              {i === 2 ? "COMING SOON" : " VISIT NOW"}
              {i === 2 ? (
                <EyeSlash className="w-5 h-5" />
              ) : (
                <Link className="w-5 h-5" />
              )}
            </a>
          </div>
          <div
            className={`${
              darkMode ? "bg-white" : "bg-black"
            } lg:w-[50%] lg:h-[300px]`}
          >
            <Image
              className={`w-full object-cover border  h-full rounded-se-[60px] rounded-bl-[60px] scale-90 ${
                (darkMode && i === 1) || i === 4
                  ? "border-[#000]"
                  : "border-[#ffffff9d]"
              }`}
              src={item.image}
              alt="primus"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
