import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate("");

  const navTo = (destination) => {
    console.log(destination);

    navigate(`${destination}`);
  };

  return (
    <header className="sticky top-0 flex justify-between items-center p-4 z-10 mb-6">
      <h1>Portfolio.</h1>

      <nav>
        <ul className="flex">
          <li onClick={() => navTo("/")}>Home</li>
          <li onClick={() => navTo("/skills")}>Skills</li>
          <li onClick={() => navTo("/projects")}>Projects</li>
          <li onClick={() => navTo("/contact")}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
