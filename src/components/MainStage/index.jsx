import React from "react";
import MachinesStage from "./MachinesStage";
import { Container, TitleStyled } from "./styles";

const MainStage = () => {
  return (
    <Container>
      <TitleStyled>Dashboard</TitleStyled>
      <MachinesStage />
    </Container>
  );
};

export default MainStage;
