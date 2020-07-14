import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

function Header() {
  return (
    <header>
      <span>
        <GitHubIcon />
        <h1 style={{ display: "inline" }}> Keeper</h1>
      </span>
    </header>
  );
}

export default Header;
