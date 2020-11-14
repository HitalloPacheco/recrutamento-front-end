import React from "react";
import LogoComponent from "../LoginComponent/LogoComponent";
import EmailComponent from "../LoginComponent/EmailComponent";
import { Container, Send } from "./styles";

const RegisterComponent = () => {
  return (
    <Container>
      <LogoComponent />
      <EmailComponent />
      <Send>Enviar</Send>
    </Container>
  );
};

export default RegisterComponent;
