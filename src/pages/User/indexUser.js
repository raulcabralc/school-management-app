import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import { Container } from "../../styles/globalStyles";
import { Title, Paragraph, Form, Reminder, ExcluirUser } from "./styledUser";
import Loading from "../../components/Loading/indexLoading";

import { isEmail } from "validator";
import * as actions from "../../store/modules/auth/actions";
import axios from "../../services/axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function User() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const id = user.id;

  useEffect(() => {
    if (!id) return;

    setName(user.name);
    setEmail(user.email);
  }, [user.email, user.name, id]);

  function handleSubmit(e) {
    e.preventDefault();
    const formErrors = [];

    if (!id) {
      toast.info("É preciso fazer login para editar um usuário.");
      return;
    }

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
  }

  function handleConfirmDeleteUser(e) {
    e.preventDefault();

    const delButton = e.currentTarget;
    const confirm = e.currentTarget.nextSibling;
    const cancel = confirm.nextSibling;
    delButton.classList.add("display-none");
    cancel.classList.remove("display-none");
    confirm.classList.remove("display-none");
  }

  function abortDeleteUser(e) {
    e.preventDefault();

    const cancel = e.currentTarget;
    const delButton = e.currentTarget.previousSibling.previousSibling;
    const confirm = e.currentTarget.previousSibling;
    cancel.classList.add("display-none");
    confirm.classList.add("display-none");
    delButton.classList.remove("display-none");
  }

  async function handleDeleteUser(e) {
    e.preventDefault();

    try {
      await axios.delete("/users", user);

      history.push("/");

      dispatch(actions.loginFailure());
      toast.info(
        <span>
          Usuário <b>{user.name}</b> excluído.
        </span>
      );
    } catch (e) {
      toast.error("Falha ao excluir usuário.");
    }
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
        <ExcluirUser onClick={handleConfirmDeleteUser}>
          Excluir Usuário
        </ExcluirUser>
        <ExcluirUser onClick={handleDeleteUser} className="display-none">
          Confirmar
        </ExcluirUser>
        <ExcluirUser
          onClick={abortDeleteUser}
          className="cancelar display-none"
        >
          Cancelar
        </ExcluirUser>
      </Container>
    </>
  );
}
