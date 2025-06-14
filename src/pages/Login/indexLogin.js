import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "../../styles/globalStyles";
import { Title, Paragraph, Form } from "./styledLogin";
import Loading from "../../components/Loading/indexLoading";

import { isEmail } from "validator";

import * as actions from "../../store/modules/auth/actions";

export default function Login(props) {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isLoggedIn) {
    window.location.pathname = "/";
  }

  function handleSubmit(e) {
    e.preventDefault();
    let formErrors = [];

    if (!isEmail(email)) {
      formErrors.push("Email inválido.");
    }

    if (password.length < 6 || password.length > 50) {
      formErrors.push("Senha inválida.");
    }

    formErrors.forEach((error) => toast.error(error));

    if (formErrors.length > 0) return;

    dispatch(
      actions.loginRequest({
        email,
        password,
      })
    );
  }

  return (
    <>
      <Container>
        <Loading isLoading={isLoading} />
        <Title>Login</Title>
        <Paragraph>Faça login com sua conta</Paragraph>
        <Form>
          <input
            placeholder="Email"
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
            Entrar
          </button>
        </Form>
        <div className="common-anchor">
          <a href="/register">Não possui cadastro?</a>
        </div>
      </Container>
    </>
  );
}
