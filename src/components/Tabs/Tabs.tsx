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
      <div className="tabsButtonsContainer">
        <button
          onClick={(e) => handleClick(e)}
          className={`tabsButtonUsers ${
            constrolTabs ? "tabsButtonActive" : ""
          }`}
        >
          Users
        </button>
        <button
          onClick={(e) => handleClick(e)}
          className={`tabsButtonNewUsers ${
            constrolTabs ? "" : "tabsButtonActive"
          }`}
        >
          New User
        </button>
      </div>
      <div className="tabsinformationContainer">
        {constrolTabs ? <Users /> : <Input />}
      </div>
    </div>
  );
};

export default Tabs;
