import React, { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { Container } from "../../styles/globalStyles";
import { Title, Paragraph, Form } from "./styledRegister";

import { isEmail } from "validator";
import axios from "../../services/axios";
import { get } from "lodash";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const formErrors = [];

    if (name.length < 3 || name.length > 30) {
      formErrors.push("Nome deve ter entre 3 a 30 caracteres.");
    }

    if (!isEmail(email)) {
      formErrors.push("Email inválido.");
    }

    if (password.length < 6 || password.length > 50) {
      formErrors.push("Senha deve conter entre 6 a 50 caracteres.");
    }

    formErrors.forEach((error) => toast.error(error));

    if (formErrors.length > 0) return;

    try {
      await axios.post("/users/", {
        name,
        email,
        password,
      });

      history.push("/registered");
    } catch (e) {
      const errors = get(e, "response.data.errors", 0);

      errors.forEach((error) => toast.error(error));
    }
  }

  return (
    <>
      <Container>
        <Title>Cadastro</Title>
        <Paragraph>Cadastre-se criando uma conta</Paragraph>
        <Form>
          <input
            placeholder="Usuário"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Cadastrar
          </button>
        </Form>
        <div className="common-anchor">
          <a href="/login">Já possui cadastro?</a>
        </div>
      </Container>
    </>
  );
}
