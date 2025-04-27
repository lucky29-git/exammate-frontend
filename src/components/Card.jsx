import React from 'react';
import './Card.css'; // Import CSS file for styling
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from Font Awesome

function Card(props) {
  const { name, rollNo, college,email, githubLink, linkedin } = props; // Destructuring props

  return (
    <div className="card">
      <h2>Name <br />
      <span> {name} </span></h2>
      <p>Roll No <br />
       <span>{rollNo}</span></p>
      <p>College <br />
      <span> {college} </span></p>
      <div className="icons">
        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
        <a href={`https://github.com/${githubLink}`} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </div>
  );
}

export default Card;
