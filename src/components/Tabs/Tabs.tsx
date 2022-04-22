import { useState, MouseEvent } from "react";
import Input from "../Input/Input";
import Users from "../Users/Users";

import "./tabs.style.scss";

const Tabs = () => {
  const [constrolTabs, setControlTabs] = useState(true);

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    target.innerText === "Users" ? setControlTabs(true) : setControlTabs(false);
  };

  return (
    <div className="tabsContainer">
      <div>
        <button onClick={(e) => handleClick(e)}>Users</button>
        <button onClick={(e) => handleClick(e)}>New User</button>
      </div>
      {constrolTabs ? <Users /> : <Input />}
    </div>
  );
};

export default Tabs;
