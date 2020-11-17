import React, { useState } from "react";
import LogoComponent from "../../LoginComponent/LogoComponent";
import PasswordComponent from "../../LoginComponent/PasswordComponent";
import { Container, Send, PasswordContainer } from "./styles";
import { useNavigate } from "react-router";
import { UserApi } from "../../../core/api/user";

const AuthorizedRegistrationComponent = () => {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleClick = () => {
    const api = new UserApi();
    if (password === confirmedPassword) {
      var email = window.localStorage.getItem('email');
      api.create(email, password).then(() => {
        navigate("/dashboard");
      });
    } else {
      alert("Erro de validação de senha");
    }
  };

  const navigate = useNavigate();

  return (
    <Container>
      <LogoComponent />
      <PasswordContainer>
        <PasswordComponent value={password} setValue={setPassword} />
        <PasswordComponent
          value={confirmedPassword}
          setValue={setConfirmedPassword}
        />
      </PasswordContainer>
      <Send onClick={handleClick}>Cadastrar</Send>
    </Container>
  );
};

export default AuthorizedRegistrationComponent;
