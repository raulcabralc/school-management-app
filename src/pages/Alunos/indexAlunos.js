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
        const response = await axios.get("/students");
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
                    src={aluno.Photos[0].url}
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
                <h3>{aluno.email}</h3>
              </div>
              <div className="opcoes">
                <Link to={`/aluno/edit/${aluno.id}`}>
                  <FaPen size={16} />
                </Link>
                <Link className="delete" to={`/aluno/delete/${aluno.id}`}>
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
