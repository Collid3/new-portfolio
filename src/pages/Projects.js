import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      image: "movies2.png",
      name: "Movies App",
      description:
        "Movie app is the app I built to get hold of making Api calls and fetching data from an already existing database. Forced me to be creative in making an whole complete application from just a JSON data",
      githubLink: "https://github.com/Collid3/seroba-movies",
      liveLink: "https://seroba-movies.onrender.com",
    },
    {
      image: "chat2.png",
      name: "Chat App",
      description:
        "This is an application I created to add a new skill to my calibre which is socket.io. It helped me understand how to make real-time updates and it is always a good skill to have in the pocket ",
      githubLink: "https://github.com/Collid3/chat-client",
      liveLink: "https://seroba-chat.onrender.com",
    },
    {
      image: "e-commerce.png",
      name: "E-commerce App",
      description:
        "An E-commerce application inspired by the app i made above this one called movies app. I developed it to sharpen my skills in being creative and make something out of nothing.",
      githubLink: "https://github.com/Collid3/seroba-store",
      liveLink: "https://seroba-store.onrender.com",
    },
    {
      image: "musicpad.png",
      name: "MusicPad",
      description:
        "Musicpad is an app for song writers to write their lyrics at. It is different from notepad as it has a feature for searching rhymes, provide meaning, synonyms and examples of the word you want to know about. Making it easier to write.",
      githubLink: "https://github.com/Collid3/musicpad",
      liveLink: "https://musicpad.onrender.com",
    },
    {
      image: "cakelicious.png",
      name: "Cakelicious",
      description:
        "An application I built for my sisters cake company. I saw an opportunity to get out of tutorial hell and make use of my skills while being creative and hard thinking and I took it. It is not finished yet, but i hope you get the idea of where I am going with it",
      githubLink: "https://github.com/Collid3/cakelicious-client",
      liveLink: "https://cakelicious.onrender.com",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="mb-7 text-center">PROJECTS</h2>

      <ul>
        {projects.map((project) => (
          <li key={project.name} className="flex flex-col gap-3">
            <img src={require(`../images/projects/${project.image}`)} alt="" />

            <section className="grow flex flex-col gap-3">
              <h3 className="text-3xl font-bold">{project.name}</h3>

              <p className="grow">{project.description}</p>

              <div className="buttons flex items-center gap-5 mt-2">
                <a
                  href={`${project.githubLink}`}
                  target="blank"
                  rel="noreferrer"
                >
                  Source Code{" "}
                  <span>
                    <AiFillGithub />
                  </span>
                </a>

                <a href={`${project.liveLink}`} target="blank" rel="noreferrer">
                  Run App{" "}
                  <span className="play-button">
                    <FaPlay className="text-xl" />
                  </span>
                </a>
              </div>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
