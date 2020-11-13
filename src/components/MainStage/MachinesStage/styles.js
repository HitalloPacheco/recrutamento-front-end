import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 210px);
  width: calc(100vw - 120px);
  margin: 30px 40px;
  border: 1px solid lightgray;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 20vh;
  grid-gap: 10px;
  padding: 20px;
  position: relative;
  overflow: scroll;
`;
