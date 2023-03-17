import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import photo from "./me.jpg";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: #87daed;

  & img {
    width: 10rem;
    border-radius: 40%;
  }

  & h1 {
    margin: auto;
    font-size: 3rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  & ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
  }
  & a {
    text-decoration: none;
    font-size: 1.5rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <img src={photo} alt="me" />
      <h1>Lisa Steven</h1>
      <Nav>
        <ul>
          <li>
            <Link to="/github-portfolio/">Home</Link>
          </li>
          <li>
            <Link to="/github-portfolio/contact">Contact</Link>
          </li>
        </ul>
      </Nav>
    </StyledHeader>
  );
}
