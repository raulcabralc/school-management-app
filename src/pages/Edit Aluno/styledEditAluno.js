import styled from "styled-components";
import * as colors from "../../config/colors";

export const Title = styled.h1`
  margin-bottom: 20px;

  .student-name {
    color: ${colors.primaryLightBlack};
    text-decoration: underline 2px;
  }
`;

export const Paragraph = styled.p`
  margin: 20px 0;
  font-size: 1.2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-content: center;

  input,
  select {
    background: white;
    margin: 10px auto;
    padding: 7px 12px;
    width: 300px;
    font-size: 1.1em;
    font-family: "Montserrat", sans-serif;
    border: 2px solid black;
    border-radius: 10px;
    transition: all ease-in-out 0.15s;
  }

  input:focus,
  select:focus {
    outline: none;
    filter: brightness(96%);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  }

  option {
    font-family: "Montserrat", sans-serif;
  }

  button {
    width: 250px;
    align-self: center;
  }

  label {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const VoltarContainer = styled.div`
  height: 0px;
  width: 100%;

  a {
    cursor: pointer;
    position: absolute;
    right: 50px;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background: ${colors.primaryBlack};
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
    transition: all ease-in-out 0.1s;

    & .arrow {
      margin-right: 10px;
      font-weight: 300;
    }

    &:hover {
      color: ${colors.primaryYellow};
    }
  }
`;
