import Heading from "@/components/Heading/Heading";
import crypto from "../../../../public/img/crypto.png";
import cappen from "../../../../public/img/cappen2.png";
import primus from "../../../../public/img/primus.png";
import student from "../../../../public/img/student.png";
import gmfb from "../../../../public/img/gmfb.png";
import React from "react";
import Image from "next/image";
import { Link } from "iconsax-react";

function Projects({ darkMode }) {
  const data = [
    {
      name: "CRYPTO-NET",
      description:
        " Experience the sophistication of tracking cryptocurrency exchange rates effortlessly. Our platform seamlessly blends cutting-edgetechnology with refined simplicity, empowering you with confidence in understanding and monitoring crypto values. Join our community for a journey into precise cryptocurrency tracking.",
      image: crypto,
      href: "https://crpto-net.vercel.app/",
    },
    {
      name: "GMFB",
      description:
        " Embracing the latest in financial technology, we provide seamless digital banking solutions that enhance efficiency and convenience for our corporate clients. Manage your finances, conduct transactions, and access information with ease through our user-friendly platforms.",
      image: gmfb,
      href: "https://corporatebanking.groomingmfb.com/",
    },
    {
      name: "CAPPEN",
      description:
        "Discover Cappen: Your Hub for Dynamic Animations. Elevate your content with captivating visuals and interactive storytelling. Join the animated revolution now",
      image: cappen,
      href: "https://cappen22.netlify.app/",
    },
    {
      name: "PRIMUS",
      description:
        " Explore Primus Microservices — Your Gateway to Seamless Integration. Harness the power of modular solutions for simplified and efficient development. Join us in building resilient applications with Primus Microservices.",
      image: primus,
      href: "https://www.primussuite.com/",
    },

    {
      name: "HOMES",
      description:
        "At Student Homes, we're here to simplify the rental experience. We connect landlords with their ideal tenants and offer a diverse range of rental options for those in search of a home. Our mission is to provide transparency, convenience, and exceptional service. Join us today and discover a better way to rent.",
      image: student,
      href: "https://student-homes.vercel.app/",
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
            <a
              target="_blank"
              rel="noreferer"
              href={item.href}
              className={`flex items-center gap-2 font-sauce mt-3 tracking-tighter ${
                darkMode
                  ? "text-primary hover:text-gray-400"
                  : "text-black hover:text-primary"
              } font-bold`}
            >
              VISIT NOW
              <Link className="w-5 h-5" />
            </a>
          </div>
          <div
            className={`${
              darkMode ? "bg-white" : "bg-black"
            } lg:w-[50%] lg:h-[300px]`}
          >
            <Image
              className={`w-full object-cover border  h-full rounded-se-[60px] rounded-bl-[60px] scale-90 ${
                (darkMode && i === 1) || i === 3
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
