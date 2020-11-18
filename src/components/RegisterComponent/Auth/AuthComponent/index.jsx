import React from 'react';
import { Container, StyledInput, StyledParam } from './styles';

const AuthComponent = ({value, setValue}) => {
  return (
  <Container>
    <StyledParam >Código de Segurança</StyledParam>
    <StyledInput value={value} onChange={(e) => setValue && setValue(e.target.value)}/>
  </Container>
  );
}

export default AuthComponent;