import React from 'react';
import { Container, StyledInput, StyledParam } from './styles';

const EmailComponent = () => {
  return (
  <Container>
    <StyledParam >Email</StyledParam>
    <StyledInput placeholder={"exemplo@gmail.com"}/>
  </Container>
  );
}

export default EmailComponent;