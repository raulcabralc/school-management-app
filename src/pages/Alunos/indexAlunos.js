import React from "react";

import { Container } from "../../styles/globalStyles";
import { Title, AlunoContainer } from "./styledAlunos";
import axios from "../../services/axios";

import userDefaultImage from "../../images/user.jpg";

export default function Alunos() {
  const [alunos, setAlunos] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://35.198.38.2/students/");
        setAlunos(response.data);
      } catch (e) {
        console.log("Error:", e);
      }
    }

    getData();
  }, []);

  return (
    <>
      <Container>
        <Title>Alunos</Title>
        <AlunoContainer>
          {alunos.map((aluno) => (
            <div className="aluno" key={String(aluno.id)}>
              {aluno.Photos && aluno.Photos.length > 0 ? (
                <img
                  src={aluno.Photos[0].url}
                  alt={`Foto de ${aluno.name}`}
                  onError={(e) => {
                    console.log(e);
                  }}
                />
              ) : (
                <img
                  src={userDefaultImage}
                  alt={`${aluno.name} não possui foto`}
                  onError={(e) => {
                    console.log(e);
                  }}
                />
              )}

              <h2>{aluno.name}</h2>
              <div className="opcoes">
                <p>Resto</p>
              </div>
            </div>
          ))}
        </AlunoContainer>
      </Container>
    </>
  );
}
