import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../../contexts/search";
import { MachineApi } from "../../../../core/api";
import MachinesContainer from "./MachinesContainer";
import { Container } from "./styles";

const MachinesStage = () => {
  const [machines, setMachines] = useState([]);
  const { searchText } = useContext(Context);

  const filteredMachines = machines.filter((machine) =>
    machine.Instance.toLowerCase().includes(searchText.toLowerCase())
  );

  const statusColor = machines.InstanceState === "Off" ? "red" : "green";
  console.log(statusColor);

  useEffect(() => {
    const api = new MachineApi();
    api.getAll().then((res) => {
      setMachines(res.data);
    });
  }, []);

  return (
    <Container>
      {filteredMachines.map((machine, statusColor) => (
        <MachinesContainer machine={machine} color={statusColor} />
      ))}
    </Container>
  );
};

export default MachinesStage;
