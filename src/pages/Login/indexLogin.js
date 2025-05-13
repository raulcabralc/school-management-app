import React from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { Container } from "../../styles/globalStyles";
import { Title, Paragraph } from "./styledLogin";

export default function Login() {
  const dispatch = useDispatch();

  toast.success("");

  function handleClick(event) {
    event.preventDefault();

    dispatch({
      type: "BOTAO_CLICADO",
      // payload: { email, senha }
    });
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
