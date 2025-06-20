import React, { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { Container } from "../../styles/globalStyles";
import { Title, Paragraph, Form } from "./styledRegister";
import Loading from "../../components/Loading/indexLoading";

import { isEmail } from "validator";
import axios from "../../services/axios";
import { get } from "lodash";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const formErrors = [];

    if (name.length < 4 || name.length > 50) {
      formErrors.push("Nome deve ter entre 4 a 50 caracteres.");
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
      setIsLoading(true);
      await axios.post("/users/", {
        name,
        email,
        password,
      });

      history.push("/registered");
    } catch (e) {
      const errors = get(e, "response.data.errors", 0);

      errors.forEach((error) => toast.error(error));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Container>
        <Loading isLoading={isLoading} />
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
