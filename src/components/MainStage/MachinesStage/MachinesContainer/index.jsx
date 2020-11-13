import React from 'react';
import { MachineContainer, StyledTitles } from './styles';

const MachinesContainer = () => {
  return (
  <MachineContainer>
    <StyledTitles>Nome: 180</StyledTitles>
    <StyledTitles>memória RAM: 8GB</StyledTitles>
    <StyledTitles>processador: I5-9800k</StyledTitles>
    <StyledTitles>IP: 542189456</StyledTitles>
    <StyledTitles>status: online</StyledTitles>
  </MachineContainer>
  );
}

export default MachinesContainer;