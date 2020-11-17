import React from "react";
import LogoComponent from "../../LoginComponent/LogoComponent";
import AuthComponent from "./AuthComponent";
import { Container, Send } from "./styles";
import { useNavigate } from "react-router";

const AuthRegisterComponent = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <LogoComponent />
      <AuthComponent />
      <Send onClick={() => navigate('/register/authorized_registration')}>Enviar</Send>
    </Container>
  );
};

export default AuthRegisterComponent;
