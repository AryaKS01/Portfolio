import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card">
      <img className="project__img" src={item.image} alt={item.title} />
      <h3 className="project__title">{item.title}</h3>
      <p className="project__description">{item.description}</p>
      <div className="project__buttons">
        <a
          href={item.link}
          className="project__button"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo <HiOutlineArrowSmRight className="project__button-icon" />
        </a>
        <a
          href={item.github}
          className="project__button"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <FiGithub className="project__button-icon" />
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
