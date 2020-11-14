import React from "react";
import MainStage from "../../components/DashboardComponent/MainStage";
import NavBar from "../../components/DashboardComponent/NavBar";
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
