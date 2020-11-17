import React, { useState } from "react";
import LogoComponent from "../LoginComponent/LogoComponent";
import EmailComponent from "../LoginComponent/EmailComponent";
import { Container, Send } from "./styles";
import { useNavigate } from "react-router";
import { UserApi } from "../../core/api/user";

const ForgetMyPasswordComponent = () => {
  const [email, setEmail] = useState("");

  const handleClick = () => {
    const api = new UserApi();
    api.Valid(email).then((res) => {
      const valid = res.data;
      if (!email) {
        alert("Caixa email não preenchida!");
      } else if (valid === false) {
        alert("Usuário não existe!");
      } else {
        window.localStorage.setItem("email", `${email}`);
        navigate("/forgetmypassword/authorizedchangepassword");
      }
    });
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

export default ForgetMyPasswordComponent;
