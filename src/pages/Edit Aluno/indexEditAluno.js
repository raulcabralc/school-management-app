import React, { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { Container } from "../../styles/globalStyles";
import { Title, Paragraph, Form, VoltarContainer } from "./styledEditAluno";
import Loading from "../../components/Loading/indexLoading";

import { isEmail } from "validator";
import axios from "../../services/axios";
import { get } from "lodash";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { FaArrowLeft } from "react-icons/fa";

export default function EditAluno() {
  const [alunos, setAlunos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await axios.get("/students");
        setAlunos(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("Error:", e);
      }
    }

    getData();
  }, []);

  const { id } = useParams();

  const aluno = alunos.find((aluno) => String(aluno.id) === id);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  React.useEffect(() => {
    if (aluno) {
      setName(aluno.name || "");
      setSurname(aluno.surname || "");
      setEmail(aluno.email || "");
      setStudentClass(aluno.class || "");
      setHeight(aluno.height || "");
      setWeight(aluno.weight || "");
    }
  }, [aluno]);

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
      await axios.put(`/students/update/${id}`, {
        name,
        surname,
        email,
        class: studentClass,
        height,
        weight,
      });

      history.push("/");

      toast.success("Aluno editado!");
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
        <VoltarContainer>
          <a href="/">
            <FaArrowLeft className="arrow" />{" "}
            <span className="text">Voltar</span>
          </a>
        </VoltarContainer>
        <Loading isLoading={isLoading} />
        <Title>
          Editar <span className="student-name">{name}</span>
        </Title>
        <Paragraph>Edite os dados do aluno</Paragraph>
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
          <button type="submit" onClick={handleSubmit}>
            Confirmar
          </button>
        </Form>
      </Container>
    </>
  );
}
