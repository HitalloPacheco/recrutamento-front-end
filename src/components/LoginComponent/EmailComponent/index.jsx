import React from "react";
import { Container, StyledInput, StyledParam } from "./styles";

const EmailComponent = ({ value, setValue }) => {
  return (
    <Container>
      <StyledParam>Email</StyledParam>
      <StyledInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Container>
  );
};

export default EmailComponent;
