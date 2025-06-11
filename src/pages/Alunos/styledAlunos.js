import styled from "styled-components";

import { primaryLightGray } from "../../config/colors";

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  margin: 20px 0;
  font-size: 1.2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-content: center;

  input {
    margin: 10px auto;
    padding: 7px;
    font-size: 1.1em;
    font-family: "Montserrat";
    border: 2px solid black;
    border-radius: 10px;
    transition: all ease-in-out 0.15s;
  }

  input:focus {
    outline: none;
    filter: brightness(96%);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  }
`;

export const AlunoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;

  img {
    height: 60px;
    width: 60px;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
  }

  h2 {
    font-size: 1.4em;
    font-family: "Outfit", "Montserrat", sans-serif;
  }

  .aluno {
    border-top: 2px solid ${primaryLightGray};
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    padding: 20px 0;
  }

  .aluno-foto-nome {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 20px;
  }

  :first-child {
    border: none;
  }

  .opcoes {
    display: flex;
    width: 100px;
    justify-content: space-around;
    align-items: center;
  }

  .delete {
    color: firebrick;
  }
`;
