import React, { useState } from "react";
import LogoComponent from "../LoginComponent/LogoComponent";
import EmailComponent from "../LoginComponent/EmailComponent";
import { Container, Send } from "./styles";
import { useNavigate } from "react-router";
import { UserApi } from "../../core/api/user";
import { toast } from "react-toastify";

const ForgetMyPasswordComponent = () => {
  const [email, setEmail] = useState("");

  const handleClick = () => {
    const api = new UserApi();
    api.forgotPassword(email).then((res) => {
      if (!email) {
        toast.warning("Caixa email não preenchida!");
      } else {
        window.localStorage.setItem("email", `${email}`);
        navigate('/forgetmypassword/ForgetMyPasswordAuth');
      }
    }).catch((err) => {
      toast.error(err.response.data.error)
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
