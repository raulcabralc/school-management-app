import React from "react";

import { Container } from "../../styles/globalStyles";
import { Title, AlunoContainer } from "./styledAlunos";
import axios from "../../services/axios";

export default function Alunos() {
  const [alunos, setAlunos] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get("/students");
      setAlunos(response.data);
    }

    getData();
  }, []);

  return (
    <>
      <Container>
        <Title>Alunos</Title>
        <AlunoContainer>
          {alunos.map((aluno) => (
            <div key={String(aluno.id)}>
              {aluno.name}
              <img src={aluno.Photos[0].url} alt="Foto do Aluno" />
            </div>
          ))}
        </AlunoContainer>
      </Container>
    </>
  );
}
