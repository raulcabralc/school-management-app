import React from "react";
import { FaPen, FaUserSlash, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Container } from "../../styles/globalStyles";
import { Title, AlunoContainer } from "./styledAlunos";
import Loading from "../../components/Loading/indexLoading";

import axios from "../../services/axios";

export default function Alunos() {
  const [alunos, setAlunos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await axios.get("http://35.198.38.2/students/");
        setAlunos(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("Error:", e);
      }
    }

    getData();
  }, []);

  return (
    <>
      <Container>
        <Loading isLoading={isLoading} />
        <Title>Alunos</Title>
        <AlunoContainer>
          {alunos.map((aluno) => (
            <div className="aluno" key={String(aluno.id)}>
              <div className="aluno-foto-nome">
                {aluno.Photos && aluno.Photos.length > 0 ? (
                  <img
                    src={aluno.Photos[aluno.Photos.length - 1].url}
                    alt={`Foto de ${aluno.name}`}
                    onError={(e) => {
                      console.log(e);
                    }}
                  />
                ) : (
                  <FaUserCircle size={60} />
                )}

                <h2>
                  {aluno.name} {aluno.surname}
                </h2>
              </div>
              <div className="opcoes">
                <Link to={`/aluno/${aluno.id}/edit`}>
                  <FaPen size={16} />
                </Link>
                <Link className="delete" to={`/aluno/${aluno.id}/delete`}>
                  <FaUserSlash size={20} />
                </Link>
              </div>
            </div>
          ))}
        </AlunoContainer>
      </Container>
    </>
  );
}
