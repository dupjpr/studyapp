import { useState, MouseEvent } from "react";
import Input from "../Input/Input";
import Users from "../Users/Users";

import "./tabs.style.scss";

const Tabs = () => {
  const [constrolTabs, setControlTabs] = useState(true);

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLInputElement;
    target.name === "users" ? setControlTabs(true) : setControlTabs(false);
  };

  return (
    <div className="tabsContainer">
      <div className="tabsButtonsContainer">
        <button
          name="users"
          onClick={(e) => handleClick(e)}
          className={`tabsButtonUsers ${
            constrolTabs ? "tabsButtonActive" : ""
          }`}
        >
          Users
        </button>
        <button
          name="newUsers"
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
