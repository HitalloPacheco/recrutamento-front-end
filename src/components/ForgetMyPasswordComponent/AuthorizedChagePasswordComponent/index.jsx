import React, { useState } from "react";
import LogoComponent from "../../LoginComponent/LogoComponent";
import PasswordComponent from "../../LoginComponent/PasswordComponent";
import { Container, Send, PasswordContainer } from "./styles";
import { useNavigate } from "react-router";
import { UserApi } from "../../../core/api/user";
import { toast } from "react-toastify";

const AuthorizedChagePasswordComponent = () => {
  const [password, setPassword] = useState("");
  const [verifiedPassword, setVerifiedPassword] = useState("");

  var email = window.localStorage.getItem("email");
  var token = window.localStorage.getItem("token");

  const handleClick = () => {
    const api = new UserApi();
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g

    if (!passwordRegex.test(password)) {
      toast.warning("Senha não preenchida corretamente, ela deve conter 8 digitos entre eles pelo menos 1 letra e 1 numero!");
    } else {
      if (password === verifiedPassword) {
        api
          .changePassword(email, token, password)
          .then((res) => {
            navigate("/dashboard");
          })
          .catch((err) => {
            toast.error(err.response.data.error);
          });
      } else {
        toast.error("Erro na autenticação da senha!");
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
          value={verifiedPassword}
          setValue={setVerifiedPassword}
        />
      </PasswordContainer>
      <Send onClick={handleClick}>Confirmar senha</Send>
    </Container>
  );
};

export default AuthorizedChagePasswordComponent;
