import React from "react";
import { toast } from "react-toastify";

import axios from "../../services/axios";
import { Container } from "../../styles/globalStyles";
import { Title, Paragraph } from "./styledLogin";

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get("/students");
      console.log(response);
    }

    getData();
  }, []);

  toast.success("Success.");

  return (
    <>
      <Container>
        <Title>Login</Title>
        <Paragraph>Parágrafo lorem ipsum dolor sit amet</Paragraph>
        <button>Enviar</button>
      </Container>
    </>
  );
}
