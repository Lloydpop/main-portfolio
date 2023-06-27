import * as React from "react";
import {
  Cappen,
  Cv,
  GMFB,
  Hostinger,
  WelcomeContent,
} from "../Pages/HomePage/About/Component/Content/Content";

export const tabs = [
  {
    title: "Cappen",
    content: <Cappen />,
    bg: "linear-gradient(315deg, #44b09e 0%, #e0d2c7 74%)",
  },
  {
    title: "Hostinger",
    content: <Hostinger />,
    bg: "linear-gradient(315deg, #89d4cf 0%, #6e45e1 74%)",
  },

  {
    title: "Perfect Cv",
    content: <Cv />,
    bg: "linear-gradient(315deg, #ffffb5 0%, #247ba0 74%)",
  },

  {
    title: "GMFB",
    content: <GMFB />,
    bg: "linear-gradient(315deg, #fefefe 0%, #00a4e4 74%)",
  },
];
