import React from "react";
import MainStage from "../../components/MainStage";
import NavBar from "../../components/NavBar";
import { Container } from "./styles";

const Dashboard = () => {
  return (
  <Container>
    <NavBar />
    <MainStage />
  </Container>
  );
}

export default Dashboard;
