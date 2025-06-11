import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import { Container } from "../../styles/globalStyles";
import { Title, Paragraph, Form, Reminder } from "./styledUser";
import Loading from "../../components/Loading/indexLoading";

import { isEmail } from "validator";
import * as actions from "../../store/modules/auth/actions";

export default function User() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const id = user.id;

  useEffect(() => {
    if (!user.id) return;

    setName(user.name);
    setEmail(user.email);
  }, [user.email, user.name, user.id]);

  function handleRenewToken() {
    dispatch(actions.renewTokenRequest({ email, password }));
  }

  function handleSubmit(e) {
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

    dispatch(actions.userRequest({ name, email, password, id }));

    handleRenewToken();
  }

  return (
    <>
      <Container>
        <Loading isLoading={isLoading} />
        <Title>Editar dados</Title>
        <Paragraph>Edite os dados de sua conta</Paragraph>
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
          <Reminder className="password-reminder">
            Para salvar as alterações, insira a senha e confirme
          </Reminder>
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Confirmar
          </button>
        </Form>
      </Container>
    </>
  );
}
