import styled from 'styled-components';

export const MachineContainer = styled.div`
  width: 380px;
  height: 100px;
  background-color: #f2f2f2;
  border: 1px solid gray;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const StyledTitles = styled.text`
  font-weight: 500;
`

export const StyledParans = styled.text`
  font-size: 14px;
  color: #333;
`

export const StatusColor = styled.div`
  //background-color: ${props => [props.color]};
  height: 10px;
  width: 30px;
  background-color: green;
  border-radius: 15px;
  margin-top: 3px;
`
