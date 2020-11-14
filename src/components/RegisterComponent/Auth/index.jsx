import React from "react";
import LogoComponent from "../../LoginComponent/LogoComponent";
import AuthComponent from "./AuthComponent";
import { Container, Send } from "./styles";

const RegisterComponent = () => {
  return (
    <Container>
      <LogoComponent />
      <AuthComponent />
      <Send>Enviar</Send>
    </Container>
  );
};

export default RegisterComponent;
