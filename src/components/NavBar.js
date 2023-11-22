import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const anchors = links.map((element) => 
  <a key={element} href={"#" + element}>{element}</a>)

  return <nav>{anchors}</nav>;
}

export default NavBar;
