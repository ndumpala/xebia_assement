import React from "react";

function HeaderContainer() {
  return (
    <div className="display-flex flex-space-between">
      <div>
        <img
          src="https://vistapointe.net/images/logo-4.jpg"
          width="40"
          height="40"
          alt="logo"
        />
      </div>
      <div>search box</div>
      <div>greetings</div>
    </div>
  );
}

export default HeaderContainer;
