import React from "react";

import { Container } from "../../styles/globalStyles";
import { Title, Paragraph, Form } from "./styledLogin";

export default function Login() {
  return (
    <>
      <Container>
        <Title>Login</Title>
        <Paragraph>Faça login com sua conta</Paragraph>
        <Form>
          <input placeholder="Email" />
          <input placeholder="Senha" />
          <button>Entrar</button>
        </Form>
        <div className="common-anchor">
          <a href="/register">Não possui cadastro?</a>
        </div>
      </Container>
    </>
  );
}
