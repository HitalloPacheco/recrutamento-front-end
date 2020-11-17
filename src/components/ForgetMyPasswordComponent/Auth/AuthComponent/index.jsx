import React from 'react';
import { Container, StyledInput, StyledParam } from './styles';

const AuthComponent = () => {
  return (
  <Container>
    <StyledParam >Código de Segurança</StyledParam>
    <StyledInput placeholder={"1234"}/>
  </Container>
  );
}

export default AuthComponent;