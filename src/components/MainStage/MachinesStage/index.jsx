import React from "react";
import MachinesContainer from "./MachinesContainer";
import { Container } from "./styles";

const machines = [
  {
    Instance: "CLI-313190-AP01",
    InstanceId: "i-0c7ae871e31f5da04",
    InstanceType: "t3a.medium",
    LaunchTime: "13/11/2020 09:48:23",
    PrivateIpAddress: "172.30.0.16",
    PublicIpAddress: "18.231.23.219",
    InstanceState: "On",
  },
  {
    Instance: "CLI-346106-AP01",
    InstanceId: "i-0ee5e10b4092f5978",
    InstanceType: "t3a.medium",
    LaunchTime: "13/11/2020 10:41:23",
    PrivateIpAddress: "172.30.0.25",
    PublicIpAddress: "18.228.235.25",
    InstanceState: "Off",
  },
];

const MachinesStage = () => {
  return (
    <Container>
      {machines.map((machine) => (
        <MachinesContainer machine={machine} />
      ))}
    </Container>
  );
};

export default MachinesStage;
