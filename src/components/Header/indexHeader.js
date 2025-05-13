import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { Nav } from "./styledHeader";

export default function Header() {
  const botaoClicado = useSelector((state) => state.botaoClicado);

  return (
    <>
      <Nav>
        <Link to="/">
          <FaHome size={24} />
        </Link>
        <Link to="/login">
          <FaUserAlt size={22} />
        </Link>
        <Link to="/logoff">
          <FaSignInAlt size={24} />
        </Link>
        <h3>{botaoClicado ? "Clicado" : "Não clicado"}</h3>
      </Nav>
    </>
  );
}
