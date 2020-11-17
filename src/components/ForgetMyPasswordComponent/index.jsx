import React from "react";
import LogoComponent from "../LoginComponent/LogoComponent";
import EmailComponent from "../LoginComponent/EmailComponent";
import { Container, Send } from "./styles";
import { useNavigate } from "react-router";


const ForgetMyPasswordComponent = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <LogoComponent />
      <EmailComponent />
      <Send onClick={() => navigate('/forgetmypassword/forgetmypasswordauth')}>Enviar</Send>
    </Container>
  );
};

export default ForgetMyPasswordComponent;
