import React from "react";
import LogoComponent from "../../LoginComponent/LogoComponent";
import EmailComponent from "../../LoginComponent/EmailComponent";
import PasswordComponent from "../../LoginComponent/PasswordComponent";
import { Container, Send } from "../../LoginComponent/styles";

const AuthorizedRegistrationComponent = () => {
  return (
    <Container>
      <LogoComponent />
      <EmailComponent />
      <PasswordComponent />
      <Send>Cadastrar</Send>
    </Container>
  );
};

export default AuthorizedRegistrationComponent;
