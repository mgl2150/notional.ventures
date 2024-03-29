import React from "react";
import "./Project.css";
import Diglogo from "../../media/logo/dig-logo.png";
import Anonelogo from "../../media/logo/another-logo.png";
import Craft from "../../media/logo/economy-logo.png";
import ProjectList from "./ProjectList";

const Project = () => {
  const PROJECTS = [
    {
      id: "p1",
      image: `${Anonelogo}`,
      name: "Another-1",
    },
    {
      id: "p2",
      image: `${Diglogo}`,
      name: "Digchain",
    },
    {
      id: "p3",
      image: `${Craft}`,
      name: "Craft Economy",
    },
  ];
  return (
    <div id="Project" className="project">
      <div className="title">
        <hr className="bar"></hr>
        <p className="name">Our Projects</p>
      </div>
      <ProjectList items={PROJECTS} />
    </div>
  );
};

export default Project;
