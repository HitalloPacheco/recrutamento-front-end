import styled from 'styled-components';

export const MachineContainer = styled.div`
  min-width: 380px;
  max-width: 760px;
  height: 100px;
  background-color: #f2f2f2;
  border: 1px solid gray;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));

  @media (max-width: 510px) {
    min-width: 160px;
    height: 120px;
    padding: 5px;
  }
`;

export const StyledTitles = styled.text`
  font-weight: 500;
`

export const StyledParans = styled.text`
  font-size: 14px;
  margin-right: 5px;
  color: #333;
`

export const StatusColor = styled.div`
  background-color: ${props => props.color};
  height: 10px;
  width: 30px;
  border-radius: 15px;
  margin-top: 3px;
`
