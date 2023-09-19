import React from "react";

const Skills = () => {
  return (
    <div className="skills-container h-full">
      <h2 className="text-center ">PROFESSIONAL SKILLS</h2>

      <ul>
        <li>
          <img src={require("../images/skills/html.png")} alt="" />
          <h4>HTML</h4>
        </li>

        <li>
          <img src={require("../images/skills/css.png")} alt="" />
          <h4>CSS</h4>
        </li>

        <li>
          <img src={require("../images/skills/JavaScript.png")} alt="" />
          <h4>JAVASCRIPT</h4>
        </li>

        <li>
          <img src={require("../images/skills/tailwind.png")} alt="" />
          <h4>TAILWIND CSS</h4>
        </li>

        <li>
          <img src={require("../images/skills/React.png")} alt="" />
          <h4>REACT JS</h4>
        </li>

        <li>
          <img src={require("../images/skills/nodejs.png")} alt="" />
          <h4>NODE JS</h4>
        </li>

        <li>
          <img src={require("../images/skills/express.png")} alt="" />
          <h4>EXPRESS JS</h4>
        </li>

        <li>
          <img src={require("../images/skills/firebase.png")} alt="" />
          <h4>FIREBASE</h4>
        </li>

        <li>
          <img src={require("../images/skills/mongodb.png")} alt="" />
          <h4>MONGO DB</h4>
        </li>

        <li>
          <img src={require("../images/skills/socketio.png")} alt="" />
          <h4>SOCKET.IO</h4>
        </li>

        <li>
          <img src={require("../images/skills/git.png")} alt="" />
          <h4>GIT</h4>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
