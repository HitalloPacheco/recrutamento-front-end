import React from "react";
import LogoComponent from "../../LoginComponent/LogoComponent";
import PasswordComponent from "../../LoginComponent/PasswordComponent";
import { Container, Send, PasswordContainer } from "./styles";
import { useNavigate } from "react-router";

const AuthorizedChagePasswordComponent = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoComponent />
      <PasswordContainer>
        <PasswordComponent />
        <PasswordComponent />
      </PasswordContainer>
      <Send onClick={() => navigate("/dashboard")}>Confirmar senha</Send>
    </Container>
  );
};

export default AuthorizedChagePasswordComponent;
