import React from "react";

import { FooterContainer } from "./styledFooter";
import { FaCode, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterContainer>
      <a href="https://github.com/raulcabralc">
        Feito por <span>Raul Cabral</span>
      </a>
      <div className="links">
        <a href="https://github.com/raulcabralc">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/raul-cabral-caxeta/">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/558393989159">
          <FaWhatsapp />
        </a>
        <a href="https://github.com/raulcabralc/school-management-app">
          <FaCode />
        </a>
      </div>
    </FooterContainer>
  );
}
