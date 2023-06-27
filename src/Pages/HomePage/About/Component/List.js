import React from "react";
import NavLink from "../../../../Component/NavBar/NavLink/NavLink";
import { Tabs } from "../../../../hooks/useFlip";

const List = () => {
  return (
    <div className="flex flex-col gap-6">
      <Tabs />
    </div>
  );
};

export default List;
