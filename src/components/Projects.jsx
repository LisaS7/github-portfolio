import React from "react";
import styled from "styled-components";
import githubIcon from "./github.svg";
import linkIcon from "./external-link.png";

const CardList = styled.section`
  display: flex;
  justify-content: space-around;
`;

const Card = styled.div`
  width: 20rem;
`;

const Icon = styled.img`
  width: 40px;
  margin: 0 2rem;
`;

export default function Projects() {
  return (
    <CardList>
      <Card>
        <h3>Star Wars Planets</h3>
        <p>
          A simple page which lists Star Wars planets. Data is courtesy of the
          Swapi API. Built with Python/Flask to practice using a REST API.
        </p>
        <GitHub repo="star-wars-planets" />
        <ExternalLink appName="star-wars-planets" />
      </Card>
      <Card>
        <h3>Weekly Planner</h3>
        <p>
          Plan tasks for the week ahead. This is my first Node.js app and the
          data is stored in MongoDB.
        </p>
        <GitHub repo="node-planner" />
        <ExternalLink appName="planner" />
      </Card>
    </CardList>
  );

  function GitHub({ repo }) {
    return (
      <a
        href={`https://github.com/LisaS7/${repo}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="logo" src={githubIcon} alt="github link" />
      </a>
    );
  }

  function ExternalLink({ appName }) {
    return (
      <a
        href={`http://lisasteven.co.uk/${appName}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="logo" src={linkIcon} alt="view project" />
      </a>
    );
  }
}
