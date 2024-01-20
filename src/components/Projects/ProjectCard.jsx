import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <div style={{ display: "flex", gap: "20px" }}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
          style={{ borderRadius: "10px" }}
        />
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div style={{ marginTop: "20px" }}>
        <a
        target="_blank"
          href={demo}
          style={{
            color: "white",
            backgroundColor: "#576cbc",
            padding: "5px",
            borderRadius: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          Demo
        </a>
        {/* <a href={source} className={styles.link}>
          Source
        </a> */}
      </div>
    </div>
  );
};
