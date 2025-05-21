import styled, { createGlobalStyle } from "styled-components";
import * as colors from "../config/colors";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${colors.primaryBlack};
    font-family: "Montserrat", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
  }

  ul {
    list-style: none;
  }

  h1 {
    color: ${colors.primaryBlack};
    font-weight: 500;
    margin-bottom: 25px;
    position: relative;
  }

  h2 {
    font-weight: 300;
    font-size: 1.9rem;
  }

  button {
    background: ${colors.primaryLightYellow};
    padding: 8px 16px;
    margin: 10px;
    font-size: 1.1rem;
    border: 1px solid transparent;
    border-radius: 3px;
    text-transform: uppercase;
    color: white;
    font-family: "Montserrat", sans-serif;
    transition: all 0.15s ease-in-out;
  }

  button:hover {
    background: ${colors.primaryBlack};
    color: ${colors.primaryYellow}
  }

  button:active {
    filter: brightness(80%)
  }

  .common-anchor {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }

  .common-anchor a {
    color: ${colors.primaryDarkYellow};
    text-decoration: underline solid ${colors.primaryYellow};
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  padding: 50px;
  margin: 30px auto;
`;
