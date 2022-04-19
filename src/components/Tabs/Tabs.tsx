import React, { useState } from "react";
import Input from "../Input/Input";

const Tabs = () => {
  const [constrolTabs, setControlTabs] = useState(true);

  const handleClick = (e: any) => {
    const target = e.target;
    target.innerText === "Users" ? setControlTabs(true) : setControlTabs(false);
  };

  return (
    <div>
      <div>
        <button onClick={(e) => handleClick(e)}>Users</button>
        <button onClick={(e) => handleClick(e)}>New User</button>
      </div>
      {constrolTabs ? (
        <div>content tab list of users </div>
      ) : (
        <div>
          <Input />
        </div>
      )}
    </div>
  );
};

export default Tabs;
