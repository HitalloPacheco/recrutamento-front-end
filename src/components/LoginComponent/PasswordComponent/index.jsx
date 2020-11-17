import React from "react";
import { Container, StyledInput, StyledParam } from "./styles";

const PasswordComponent = ({ value, setValue }) => {
  return (
    <Container>
      <StyledParam>Senha</StyledParam>
      <StyledInput
        type='password'
        value={value}
        onChange={(e) => setValue && setValue(e.target.value)}
      />
    </Container>
  );
};

export default PasswordComponent;
