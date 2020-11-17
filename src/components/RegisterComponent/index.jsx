import React, { useState } from "react";
import LogoComponent from "../LoginComponent/LogoComponent";
import EmailComponent from "../LoginComponent/EmailComponent";
import { Container, Send } from "./styles";
import { useNavigate } from "react-router";
import { UserApi } from "../../core/api/user";

const RegisterComponent = () => {
  const [email, setEmail] = useState("");

  const handleClick = () => {
    const emailRegex = /^.+@([\w-]+\.)+[\w-]{2,4}$/g
    const api = new UserApi();
    if (!email || !emailRegex.test(email)) {
      alert("Caixa email não preenchida corretamente!");
    } else {
      api.createValid(email).then(() => {
        window.localStorage.setItem("email", `${email}`);
        navigate("/register/authorized_registration");
      }).catch((err) => {
        alert(err.response.data)
      })
    }
  };

  const navigate = useNavigate();

  return (
    <Container>
      <LogoComponent />
      <EmailComponent value={email} setValue={setEmail} />
      <Send onClick={handleClick}>Enviar</Send>
    </Container>
  );
};

export default RegisterComponent;
