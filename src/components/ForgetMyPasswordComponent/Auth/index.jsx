import React, { useState } from "react";
import LogoComponent from "../../LoginComponent/LogoComponent";
import AuthComponent from "./AuthComponent";
import { Container, Send } from "./styles";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Auth = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState("");

  const handleClick = () => {
    if (!token) {
      toast.warning("Token não informado!");
    } else {
      window.localStorage.setItem("token", `${token}`);
      navigate("/forgetmypassword/authorizedchangepassword");
    }
  };

  return (
    <Container>
      <LogoComponent />
      <AuthComponent value={token} setValue={setToken} />
      <Send onClick={handleClick}>Enviar</Send>
    </Container>
  );
};

export default Auth;
