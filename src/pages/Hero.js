import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate("");

  return (
    <div className="main-hero flex justify-between items-center h-full">
      <div className="hero-container flex flex-col items-center justify-center gap-7">
        <h1 className="text-6xl">
          <span className="font-normal text-4xl">HI, I AM</span> JERRY MASOLA
        </h1>
        <h2 className="text-4xl">5 YEARS FULL STACK DEVELOPER</h2>

        <p>
          Hardworking and passionate Self-driven developer dedicated to
          developing user-friendly and feature-rich websites with strong
          organization. Proficient in developing servers, user interfaces,
          testing and debugging. Dependable developer successful at managing
          multiple priorities with a positive attitude. Willingness to take on
          added responsibilities to meet team goals.
        </p>

        <section className="flex gap-5">
          <button className="px-8 py-2" onClick={() => navigate("/projects")}>
            PROJECTS
          </button>
          <button className=" px-8 py-2" onClick={() => navigate("/contact")}>
            CONTACT
          </button>
        </section>
      </div>

      <img src={require("../images/myself.jpg")} alt="" />
    </div>
  );
};

export default Hero;
