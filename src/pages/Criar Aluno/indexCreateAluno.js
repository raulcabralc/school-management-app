import React, { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { Container } from "../../styles/globalStyles";
import { Title, Paragraph, Form, VoltarContainer } from "./styledCreateAluno";
import Loading from "../../components/Loading/indexLoading";

import { isEmail } from "validator";
import axios from "../../services/axios";
import { get } from "lodash";
import { FaArrowLeft } from "react-icons/fa";

export default function CreateAluno() {
  const [isLoading, setIsLoading] = React.useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [image, setImage] = useState("");

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const formErrors = [];

    if (name.length < 3 || name.length > 30) {
      formErrors.push("Nome deve ter entre 3 a 30 caracteres.");
    }

    if (surname.length < 3 || surname.length > 30) {
      formErrors.push("Sobrenome deve ter entre 3 a 30 caracteres.");
    }

    if (!isEmail(email)) {
      formErrors.push("Email inválido.");
    }

    if (age < 0) {
      formErrors.push("Idade não pode ser negativa.");
    }

    if (height < 0) {
      formErrors.push("A altura não pode ser negativa.");
    }

    if (weight < 0) {
      formErrors.push("Peso não pode ser negativo.");
    }

    formErrors.forEach((error) => toast.error(error));

    if (formErrors.length > 0) return;

    try {
      setIsLoading(true);
      const response = await axios.post(`/students/create`, {
        name,
        surname,
        class: studentClass,
        email,
        age,
        height,
        weight,
      });

      const id = response.data.id;
      console.log(id);
      console.log(response);

      if (id && image) {
        const formData = new FormData();
        formData.append("photoMultipart", image);
        formData.append("student_id", id);

        await axios.post(`/photo`, formData);
      }

      history.push("/");

      toast.success("Aluno cadastrado!");
    } catch (e) {
      const errors = get(e, "response.data.errors", 0);

      errors.map((error) => toast.error(error));
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Container>
        <VoltarContainer>
          <a href="/">
            <FaArrowLeft className="arrow" />{" "}
            <span className="text">Voltar</span>
          </a>
        </VoltarContainer>
        <Loading isLoading={isLoading} />
        <Title>Cadastrar aluno</Title>
        <Paragraph>Preencha os campos para cadastrar o aluno</Paragraph>
        <Form>
          <label>Nome:</label>
          <input
            placeholder="Nome do aluno"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Sobrenome:</label>
          <input
            placeholder="Sobrenome do aluno"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <label>Email:</label>
          <input
            placeholder="Email do aluno"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Idade:</label>
          <input
            placeholder="Idade do aluno"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label>Classe:</label>
          <select
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
          >
            <option value="">Selecione uma classe</option>
            <option value="A">Classe A</option>
            <option value="B">Classe B</option>
            <option value="C">Classe C</option>
            <option value="D">Classe D</option>
          </select>
          <label>Altura (em metros):</label>
          <input
            placeholder="Altura do aluno"
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <label>Peso (em quilos):</label>
          <input
            placeholder="Peso do aluno"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label>Foto do aluno:</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => setImage(e.target.files[0])}
            className="file-input"
          />
          <button type="submit" onClick={handleSubmit}>
            Cadastrar
          </button>
        </Form>
      </Container>
    </>
  );
}
