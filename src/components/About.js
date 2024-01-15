import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null} {/* Conditional rendering */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links githubLink={props.githubLink} linkedinLink={props.linkedinLink} />
    </div>
  );
}

export default About;
