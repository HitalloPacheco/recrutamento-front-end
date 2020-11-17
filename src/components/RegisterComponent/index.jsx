import React from "react";
import LogoComponent from "../LoginComponent/LogoComponent";
import EmailComponent from "../LoginComponent/EmailComponent";
import { Container, Send } from "./styles";
import { useNavigate } from "react-router";

const RegisterComponent = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <LogoComponent />
      <EmailComponent />
      <Send onClick={() => navigate('/register_authenticate')}>Enviar</Send>
    </Container>
  );
};

export default RegisterComponent;
