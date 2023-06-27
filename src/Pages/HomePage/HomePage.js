import React, { useState } from "react";
import NavItem from "../../Component/NavBar/NavItem/NavItem";
import Logo from "../../Component/Logo/Logo";
import Message from "./About/Component/Message";
import Projects from "./About/Component/Projects";
import Footer from "../../Component/Footer/Footer";

import pat from "../../Assets/pattern.svg";
import { Example } from "../../hooks/example";
import { Pattern, Pattern2 } from "../../Component/pattern/Pattern";
import { tabs } from "../../hooks/tabs";
const HomePage = () => {
  const [welcome, setWelcome] = useState(true);
  const [[page, direction], setPage] = useState([0, 0]);
  return (
    <main className=" px-[40px] h-[100vh] lg:overflow-y-hidden overflow-y-visible">
      <nav className="flex  justify-between">
        <div className="mt-5 pl-[30px]">
          <Pattern
            defaultColor={
              welcome === true
                ? "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
                : tabs[page]?.bg
            }
          />
          <Logo
            onClick={() => {
              setWelcome(true);
            }}
          />
        </div>
        <div className="mt-10 pr-5">
          <NavItem />
        </div>
      </nav>
      <section className="mt-[60px] flex">
        <Example
          welcome={welcome}
          setWelcome={setWelcome}
          tabs={tabs}
          setPage={setPage}
          page={page}
          direction={direction}
        />
        <div className="fixed bottom-[40px] right-[90px]">
          <Footer />
        </div>
      </section>
      <Pattern2
        defaultColor={
          welcome === true
            ? "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
            : tabs[page]?.bg
        }
      />
    </main>
  );
};

export default HomePage;
