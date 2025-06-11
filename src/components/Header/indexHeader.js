import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { Nav } from "./styledHeader";

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Nav>
        <div className="links">
          <div className="navigation">
            <Link to="/">Alunos</Link>
            <Link to="/fotos/">Outro</Link>
          </div>
          <div className="login-register">
            {isLoggedIn ? (
              <>
                <Link className="logged" to={`/user/`}>
                  Logado como <span className="user">{user.name}</span>
                </Link>
                <Link className="logout a-button" to={`/logout`}>
                  Sair
                </Link>
              </>
            ) : (
              <>
                <Link className="register a-button" to="/register">
                  Cadastrar
                </Link>
                <Link className="login a-button" to="/login">
                  Entrar
                </Link>
              </>
            )}
          </div>
        </div>
      </Nav>
    </>
  );
}
