import { useState, useEffect } from "react";
import "./style.css";
import NavLink from "../Component/NavBar/NavLink/NavLink";
import {
  Cappen,
  Cv,
  GMFB,
  Hostinger,
  WelcomeContent,
} from "../Pages/HomePage/About/Component/Content/Content";
import Projects from "../Pages/HomePage/About/Component/Projects";

export const NavData = [
  {
    title: "Welcome",
    content: <WelcomeContent />,
  },

  {
    title: "Cappen",
    content: <Cappen />,
  },
  {
    title: "Hostinger",
    content: <Hostinger />,
  },
  {
    title: "Perfect Cv",
    content: <Cv />,
  },
  {
    title: "GMFB",
    content: <GMFB />,
  },
];

// export const Tabs = () => {
//   const [flip, setFlip] = useState(false);
//   const handleFlip = (e) => {
//     if (e.target && flip === false) {
//       setFlip(true);
//     } else {
//       setFlip(false);
//     }
//   };
//   let isFlipped = flip === false ? "card" : "is-flipped";

//   return (
//     <>
//       {NavData?.map((item) => (
//         <NavLink title={item.title} key={item.title} onClick={handleFlip} />
//       ))}
//     </>
//   );
// };

export function Tabs({ tabsData }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [flip, setFlip] = useState([]);

  const handleFlip = (idx, e) => {
    console.log(NavData[activeTabIndex].push(false));
    if (e.target) {
      setActiveTabIndex(idx);
      setFlip(true);
    }
  };

  let isFlipped = flip === false ? "card" : "is-flipped";
  return (
    <div className="flex">
      <div className={`py-4 pl-[70px] relative w-[700px] `}>
        <p className={`absolute  card ${isFlipped} `}>
          {NavData[activeTabIndex].content}
        </p>
      </div>
      <div className="pl-[100px]">
        <Projects>
          <div className="flex flex-col gap-6">
            {NavData.map((tab, idx) => {
              return (
                <NavLink
                  key={idx}
                  title={tab.title}
                  onClick={(e) => {
                    handleFlip(idx, e);
                  }}
                ></NavLink>
              );
            })}
          </div>
        </Projects>
      </div>
    </div>
  );
}
