import React from "react";
import LogoComponent from "../LoginComponent/LogoComponent";
import EmailComponent from "../LoginComponent/EmailComponent";
import { Container, Send } from "./styles";

const ForgetMyPasswordComponent = () => {
  return (
    <Container>
      <LogoComponent />
      <EmailComponent />
      <Send>Enviar</Send>
    </Container>
  );
};

export default ForgetMyPasswordComponent;
