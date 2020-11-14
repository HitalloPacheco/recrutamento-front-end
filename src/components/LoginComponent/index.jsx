import React from "react";
import LogoComponent from "./LogoComponent";
import EmailComponent from "./EmailComponent";
import PasswordComponent from "./PasswordComponent";
import { Container, Register, Assitents, Send } from "./styles";

const LoginComponent = () => {
  return (
    <Container>
      <LogoComponent />
      <EmailComponent />
      <PasswordComponent />
      <Send>entrar</Send>
      <Register>
        <Assitents>Cadastrar</Assitents>
        <Assitents>Esqueci minha senha</Assitents>
      </Register>
    </Container>
  );
};

export default LoginComponent;
