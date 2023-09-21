import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [selectedNav, setSelectedNav] = useState("");
  const navigate = useNavigate("");

  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (window.location.pathname) {
      case "/":
        setSelectedNav("home");
        break;

      case "/skills":
        setSelectedNav("skills");
        break;

      case "/projects":
        setSelectedNav("projects");
        break;

      case "/contact":
        setSelectedNav("contact");
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);

  return (
    <header className="sticky top-0 flex justify-between items-center p-4 z-10 mb-10">
      <h1>Portfolio.</h1>

      <nav>
        <ul className="flex">
          <li
            className={`${selectedNav === "home" ? "selected" : undefined}`}
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className={`${selectedNav === "skills" ? "selected" : undefined}`}
            onClick={() => navigate("/skills")}
          >
            Skills
          </li>
          <li
            className={`${selectedNav === "projects" ? "selected" : undefined}`}
            onClick={() => navigate("/projects")}
          >
            Projects
          </li>
          <li
            className={`${selectedNav === "contact" ? "selected" : undefined}`}
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
