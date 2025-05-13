import React from "react";
import { useDispatch } from "react-redux";

import { Container } from "../../styles/globalStyles";
import { Title, Paragraph } from "./styledLogin";
import * as exampleActions from "../../store/modules/button/actions";

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(event) {
    event.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <>
      <Container>
        <Title>Login</Title>
        <Paragraph>Parágrafo lorem ipsum dolor sit amet</Paragraph>
        <button onClick={handleClick}>Enviar</button>
      </Container>
    </>
  );
}
