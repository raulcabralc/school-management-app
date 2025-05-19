import React from "react";
import { Link } from "react-router-dom";

import { Nav } from "./styledHeader";

export default function Header() {
  return (
    <>
      <Nav>
        <div className="links">
          <div className="navigation">
            <Link to="/">Alunos</Link>
            <Link to="/fotos/">Outro</Link>
          </div>
          <div className="login-register">
            <Link className="register" to="/register">
              Cadastrar
            </Link>
            <Link className="login" to="/login">
              Entrar
            </Link>
          </div>
        </div>
      </Nav>
    </>
  );
}
