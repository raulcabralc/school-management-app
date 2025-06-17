import React from "react";
import {
  FaPen,
  FaUserSlash,
  FaUserCircle,
  FaCheck,
  FaPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { Container } from "../../styles/globalStyles";
import {
  Title,
  AlunoContainer,
  AlunosContainer,
  SemAlunos,
  AdicionarAluno,
} from "./styledAlunos";
import Loading from "../../components/Loading/indexLoading";
import { get } from "lodash";

import axios from "../../services/axios";

export default function Alunos() {
  const [alunos, setAlunos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const history = useHistory();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

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

  function handleConfirmDelete(e) {
    e.preventDefault();

    if (!isLoggedIn) {
      toast.info("Realize Login para acessar");

      history.push("/login");
      return;
    }

    const delButton = e.currentTarget;
    const confirm = delButton.nextSibling;
    delButton.remove();
    confirm.setAttribute("display", "block");
  }

  async function handleDelete(e, id, index) {
    e.persist();

    try {
      setIsLoading(true);
      await axios.delete(`/students/delete/${id}`);

      const novosAlunos = [...alunos];
      const alunoDel = novosAlunos.splice(index, 1);
      history.push("/");
      toast.success(
        <span>
          Aluno <b>{alunoDel[0].name}</b> excluído.
        </span>
      );

      setAlunos(novosAlunos);
    } catch (e) {
      const errors = get(e, "response.data.errors", []);
      errors.map((error) => toast.error(error));
    } finally {
      setIsLoading(false);
    }
  }

  const alunosClasseA = React.useMemo(
    () => alunos.filter((aluno) => String(aluno.class) === "A"),
    [alunos]
  );

  const alunosClasseB = React.useMemo(
    () => alunos.filter((aluno) => String(aluno.class) === "B"),
    [alunos]
  );

  const alunosClasseC = React.useMemo(
    () => alunos.filter((aluno) => String(aluno.class) === "C"),
    [alunos]
  );

  const alunosClasseD = React.useMemo(
    () => alunos.filter((aluno) => String(aluno.class) === "D"),
    [alunos]
  );

  const renderStundentsClass = (alunosClasseX) =>
    alunosClasseX.length > 0 ? (
      <AlunoContainer>
        {alunosClasseX.map((aluno, index) => (
          <div className="aluno" key={String(aluno.id)}>
            <div className="aluno-foto-nome">
              {aluno.Photos && aluno.Photos.length > 0 ? (
                <img src={aluno.Photos[0].url} alt={`Foto de ${aluno.name}`} />
              ) : (
                <FaUserCircle size={50} />
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
              <Link onClick={handleConfirmDelete} className="delete">
                <FaUserSlash size={20} />
              </Link>
              <FaCheck
                className="confirmar-delete"
                onClick={(e) => handleDelete(e, aluno.id, index)}
                size={18}
                display="none"
              />
            </div>
          </div>
        ))}
      </AlunoContainer>
    ) : (
      <SemAlunos>Essa classe não possui alunos</SemAlunos>
    );

  return (
    <>
      <Container>
        <Loading isLoading={isLoading} />
        <Title>Alunos</Title>
        <AdicionarAluno href="/aluno/cadastrar">
          <FaPlus /> Adicionar Aluno
        </AdicionarAluno>

        <AlunosContainer>
          <h2 className="classe-separador">Classe A</h2>
          {renderStundentsClass(alunosClasseA)}

          <h2 className="classe-separador">Classe B</h2>
          {renderStundentsClass(alunosClasseB)}

          <h2 className="classe-separador">Classe C</h2>
          {renderStundentsClass(alunosClasseC)}

          <h2 className="classe-separador">Classe D</h2>
          {renderStundentsClass(alunosClasseD)}
        </AlunosContainer>
      </Container>
    </>
  );
}
