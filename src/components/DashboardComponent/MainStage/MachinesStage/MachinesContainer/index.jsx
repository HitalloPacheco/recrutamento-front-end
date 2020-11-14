import React from "react";
import { MachineContainer, StyledTitles, StyledParans, StatusColor } from "./styles";

/*
const machinesSpecifications = {
  t3_medium: {
    processor: "Intel Xeon Platinum 8000 3,1 GHz, 2 vCPUs",
    memory: "4 GB",
  },
  t3_large: {
    processor: "Intel Xeon Platinum 8000 3,1 GHz, 2 vCPUs",
    memory: "8 GB",
  },
  t3a_small: { processor: "AMD EPYC 7000 2,5 GHz, 2 vCPUs", memory: "2 GB" },
  t3a_medium: { processor: "AMD EPYC 7000 2,5 GHz, 2 vCPUs", memory: "4 GB" },
  t3a_large: { processor: "AMD EPYC 7000 2,5 GHz, 2 vCPUs", memory: "8 GB" },
  t3a_xlarge: { processor: "AMD EPYC 7000 2,5 GHz, 4 vCPUs", memory: "16 GB" },
  c5_large: {
    processor: "Intel Xeon Platinum 8000 3,1 GHz, 2 vCPUs",
    memory: "4 GB",
  },
  c5_xlarge: {
    processor: "Intel Xeon Platinum 8000 3,1 GHz, 4 vCPUs",
    memory: "8 GB",
  },
  c5_2xlarge: {
    processor: "Intel Xeon Platinum 8000 3,6 GHz, 8 vCPUs",
    memory: "16 GB",
  },
  c5_4xlarge: {
    processor: "Intel Xeon Platinum 8000 3,6 GHz, 16 vCPUs",
    memory: "32 GB",
  },
  c5d_large: {
    processor: "Intel Xeon Platinum 8000 3,6 GHz, 2 vCPUs",
    memory: "4 GB",
  },
  m5_large: {
    processor: "Intel Xeon Platinum 8000 3,1 GHz, 2 vCPUs",
    memory: "8 GB",
  },
  m5_xlarge: {
    processor: "Intel Xeon Platinum 8000 3,1 GHz, 4 vCPUs",
    memory: "16 GB",
  },
  m5a_xlarge: { processor: "AMD EPYC 7000 2,5 GHz, 4 vCPUs", memory: "16 GB" },
};
*/

const MachinesContainer = ({ machine }) => {
  return (
    <MachineContainer>
      <StyledParans>
        <StyledTitles>Nome: </StyledTitles>
        {machine.Instance}
      </StyledParans>
      <StyledParans>
        <StyledTitles>Memória RAM: </StyledTitles>8GB
      </StyledParans>
      <StyledParans>
        <StyledTitles>Processador: </StyledTitles>I5-9800k
      </StyledParans>
      <StyledParans>
        <StyledTitles>IP: </StyledTitles>
        {machine.PublicIpAddress}
      </StyledParans>
      <StyledParans>
        <StyledTitles>Status: </StyledTitles>
        {machine.InstanceState}
      </StyledParans>
      <StatusColor />
    </MachineContainer>
  );
};

export default MachinesContainer;
