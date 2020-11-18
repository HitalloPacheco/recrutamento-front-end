import React, { useState } from "react";
import LogoComponent from "../../LoginComponent/LogoComponent";
import PasswordComponent from "../../LoginComponent/PasswordComponent";
import { Container, Send, PasswordContainer } from "./styles";
import { useNavigate } from "react-router";
import { UserApi } from "../../../core/api/user";

const AuthorizedChagePasswordComponent = () => {
  const [password, setPassword] = useState("");
  const [verifiedPassword, setVerifiedPassword] = useState("");

  var email = window.localStorage.getItem("email");
  var token = window.localStorage.getItem("token");

  const handleClick = () => {
    const api = new UserApi();
    if (password === verifiedPassword) {
      api.changePassword(email, token, password).then((res) => {
        if (!password) {
          alert("Senha não preenchida!");
        } else {
          navigate("/dashboard");
        }
      }
    )} else{
      alert("Erro na autenticação da senha!")
    }
  };

  const navigate = useNavigate();

  return (
    <Container>
      <LogoComponent />
      <PasswordContainer>
        <PasswordComponent value={password} setValue={setPassword}/>
        <PasswordComponent value={verifiedPassword} setValue={setVerifiedPassword}/>
      </PasswordContainer>
      <Send onClick={handleClick}>Confirmar senha</Send>
    </Container>
  );
};

export default AuthorizedChagePasswordComponent;
