import React from 'react';
import { Container, StyledInput, StyledParam } from './styles';

const PasswordComponent = () => {
  return (
  <Container>
    <StyledParam>Senha</StyledParam>
    <StyledInput placeholder={"exemplo1234"}/>
  </Container>
  );
}

export default PasswordComponent;