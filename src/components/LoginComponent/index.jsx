import React, { useState } from "react";
import LogoComponent from "./LogoComponent";
import EmailComponent from "./EmailComponent";
import PasswordComponent from "./PasswordComponent";
import { Container, Register, Assitents, Send } from "./styles";
import { useNavigate } from "react-router";
import { UserApi } from "../../core/api/user";
import { toast } from "react-toastify";

const LoginComponent = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    const api = new UserApi();
    if(!email || !password) {
      toast.warning('Digite seu email e senha corretamente')
    }
    api.auth(email, password).then((res) => {
      window.localStorage.setItem("email", `${email}`);
      navigate("/dashboard");
    }).catch((err => {
      toast.error(err.response.data.error)
    }));
  };

  return (
    <Container>
      <LogoComponent />
      <EmailComponent value={email} setValue={setEmail} />
      <PasswordComponent
        value={password}
        setValue={setPassword}
      />
      <Send onClick={handleClick}>Entrar</Send>
      <Register>
        <Assitents onClick={() => navigate("/register")}>Cadastrar</Assitents>
        <Assitents onClick={() => navigate("/forgetmypassword")}>
          Esqueci minha senha
        </Assitents>
      </Register>
    </Container>
  );
};

export default LoginComponent;
