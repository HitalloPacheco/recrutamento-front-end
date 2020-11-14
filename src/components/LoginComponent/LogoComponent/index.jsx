import React from "react";
import { Container, StyledLogin } from "./styles";
import LoginImage from "../../../icons/LoginImage";

const LogoComponent = () => {
  return (
    <Container>
      <LoginImage />
      <StyledLogin>Alterdata</StyledLogin>
    </Container>
  );
};

export default LogoComponent;
