import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  margin: 20px 0;
  font-size: 1.2rem;
`;

export const Reminder = styled.p`
  margin: 10px;
  font-size: 16px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-content: center;

  input {
    margin: 10px auto;
    padding: 7px 12px;
    width: 300px;
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

  button {
    width: 250px;
    align-self: center;
  }
`;
