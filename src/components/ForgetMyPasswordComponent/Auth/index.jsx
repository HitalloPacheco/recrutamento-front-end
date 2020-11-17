import React from "react";
import LogoComponent from "../../LoginComponent/LogoComponent";
import AuthComponent from "./AuthComponent";
import { Container, Send } from "./styles";
import { useNavigate } from "react-router";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoComponent />
      <AuthComponent />
      <Send onClick={() => navigate("/forgetmypassword/authorizedchangepassword")}>Enviar</Send>
    </Container>
  );
};

export default Auth;
