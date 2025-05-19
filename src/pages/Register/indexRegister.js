import React from "react";

import { Container } from "../../styles/globalStyles";
import { Title, Paragraph, Form } from "./styledRegister";

export default function Register() {
  return (
    <>
      <Container>
        <Title>Cadastro</Title>
        <Paragraph>Cadastre-se criando uma conta</Paragraph>
        <Form>
          <input placeholder="Email" />
          <input placeholder="Senha" />
          <button>Cadastrar</button>
        </Form>
      </Container>
    </>
  );
}
