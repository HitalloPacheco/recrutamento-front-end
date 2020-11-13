import React from "react";
import { MachineContainer, StyledTitles, StyledParans } from "./styles";

const MachinesContainer = ({ machine }) => {
  return (
    <MachineContainer>
      <StyledParans>
        <StyledTitles>Nome: </StyledTitles>{ machine.Instance }
      </StyledParans>
      <StyledParans>
        <StyledTitles>Memória RAM: </StyledTitles>8GB
      </StyledParans>
      <StyledParans>
        <StyledTitles>Processador: </StyledTitles>I5-9800k
      </StyledParans>
      <StyledParans>
        <StyledTitles>IP: </StyledTitles>{ machine.PublicIpAddress }
      </StyledParans>
      <StyledParans>
        <StyledTitles>Status: </StyledTitles>{ machine.InstanceState }
      </StyledParans>
    </MachineContainer>
  );
};

export default MachinesContainer;
