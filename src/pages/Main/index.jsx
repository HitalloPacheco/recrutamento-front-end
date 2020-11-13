import React from "react";
import MainStage from "../../components/MainStage";
import NavBar from "../../components/NavBar";
import { Container } from "./styles";

const Main = () => {
  return (
  <Container>
    <NavBar />
    <MainStage />
  </Container>
  );
}

export default Main;
