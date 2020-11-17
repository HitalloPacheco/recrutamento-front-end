import React from "react";
import LogoComponent from "./LogoComponent";
import EmailComponent from "./EmailComponent";
import PasswordComponent from "./PasswordComponent";
import { Container, Register, Assitents, Send } from "./styles";
import { useNavigate } from "react-router";


const LoginComponent = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <LogoComponent />
      <EmailComponent />
      <PasswordComponent />
      <Send onClick={() => navigate('/dashboard')}>Entrar</Send>
      <Register>
        <Assitents onClick={() => navigate('/register')}>Cadastrar</Assitents>
        <Assitents onClick={() => navigate('/forgetmypassword')}>Esqueci minha senha</Assitents>
      </Register>
    </Container>
  );
};

export default LoginComponent;
