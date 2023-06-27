import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return <div>@{date} Chizuruoke.dev</div>;
};

export default Footer;
