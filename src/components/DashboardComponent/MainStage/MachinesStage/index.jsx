import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../../contexts/search";
import { MachineApi } from "../../../../core/api/machines"
import MachinesContainer from "./MachinesContainer";
import { Container } from "./styles";


const MachinesStage = () => {
  const [machines, setMachines] = useState([]);
  const { searchText } = useContext(Context);

  const filteredMachines = machines.filter((machine) =>
    machine.Instance.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    const api = new MachineApi();
    api.getAll().then((res) => {
      setMachines(res.data);
    });
  }, []);

  return (
    <Container>
      {filteredMachines.map((machine) => (
        <MachinesContainer machine={machine} color={ machine.InstanceState === "Off" ? "red" : "green"} />
      ))}
    </Container>
  );
};

export default MachinesStage;
