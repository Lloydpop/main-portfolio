"use client"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import spotify from "../../../../public/img/spotify.png";
import nose from "../../../../public/img/me3.jpg";
import lloyd from "../../../../public/img/lloyder3.jpg";
import smile from "../../../../public/img/smile.webp";
import './HoverEffect.css'; 
import hoverEffect from "hover-effect";
function Skills({ darkMode }) {
  const data = [
    {
      title: "react",
    },
    {
      title: "react native",
    },
    {
      title: "next/nextera",
    },
    {
      title: "bootstrap",
    },
    {
      title: "tailwind css",
    },
    {
      title: "redux",
    },
    {
      title: "typescript",
    },
    {
      title: "sass",
    },
    {
      title: "react query",
    },
    {
      title: "firebase",
    },
  ];
  const ticketRef = useRef(null);

  useEffect(() => {
    new hoverEffect({
      parent: ticketRef.current,
      intensity1: 0.2,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1:lloyd.src,
      image2:nose.src,
      displacementImage: 'https://images.pexels.com/photos/1097203/pexels-photo-1097203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260?raw=true'
    });
  }, []);
  return (
    <div className="lg:mt-48 mt-24">
      <div className="flex lg:flex-row flex-col lg:justify-center lg:w-[80%] mx-auto   gap-24">
        <div className="lg:w-[50%]">
          <h1 className="font-sauce tracking-tight font-bold mb-6">
            MAJOR SKILLS [ {data?.length} ]
          </h1>
          <div className="font-sauce">
            <ul className="flex flex-col gap-6">
              {data.map((item, i) => (
                <li
                  key={i}
                  className={` border-b ${
                    darkMode ? "border-[#ffffff69]" : "border-black "
                  } gap-2 text-[1rem] tracking-tight uppercase py-2`}
                >
                  <div className=" flex justify-between w-[100]">
                    {item.title}
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <h1 className="font-sauce tracking-tighter font-bold mb-6">
            MY HOBBIES / INTERESTS
          </h1>
          <p className="font-sauce text-sm">
            Beyond my professional pursuits, I engage in sketching and showcase
            my basic singing skills. Outside of work, I have a passion for
            travel and indulging in exquisite cuisine; collaborating with me
            ensures these endeavors are sustained. Feel free to GET IN TOUCH for
            more insights into my professional and personal pursuits.
          </p>
          <p className="font-sauce mt-8 text-sm">
            I find solace in R&B and Soul music, which you can explore on <br />
            my current spotify playlist.
            <Image src={smile} alt="smile" className="w-5 inline ml-1"/>
          </p>

          <div

           ref={ticketRef}
            className={`frame ticket p-5 mt-7  ${darkMode ? " darkMode" : "lightMode"} my-4`}
          ></div>
          <a
            href="https://open.spotify.com/playlist/4jpdsYPe99YSFssvT3PHGF?si=4ebe7ee92cbe49a2"
            rel="noreferer"
            target="_blank"
            className="text-md mt-10 ml-9 flex items-center gap-4 font-bold duration-300 text-primary hover:mix-blend-normal"
          >
            <Image alt="spotify" className="w-[30px]" src={spotify} />
            Click to acess my spotify playlist.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Skills;
