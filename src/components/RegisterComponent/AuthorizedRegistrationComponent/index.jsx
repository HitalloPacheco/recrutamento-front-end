import React, { useState } from "react";
import LogoComponent from "../../LoginComponent/LogoComponent";
import PasswordComponent from "../../LoginComponent/PasswordComponent";
import { Container, Send, PasswordContainer } from "./styles";
import { useNavigate } from "react-router";
import { UserApi } from "../../../core/api/user";
import { toast } from "react-toastify";

const AuthorizedRegistrationComponent = () => {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g

  const handleClick = () => {
    const api = new UserApi();
    if (!passwordRegex.test(password)) {
      toast.warning("Senha não preenchida corretamente, ela deve conter 8 digitos entre eles pelo menos 1 letra e 1 numero!");
    } else {
      if (password === confirmedPassword) {
        var email = window.localStorage.getItem("email"),
          token = window.localStorage.getItem("token"),
          cryptoToken = window.localStorage.getItem("cryptoToken"),
          now = new Date(window.localStorage.getItem("now")),
          _now = new Date();

        if (cryptoToken === token && now > _now) {
          api.create(email, password).then(() => {
            navigate("/dashboard");
          });
        } else {
          toast.error("Token invalido!");
        }
      } else {
        toast.error("Erro de validação de senha");
      }
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
