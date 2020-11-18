import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 210px);
  width: calc(100vw - 120px);
  margin: 30px 40px;
  border: 1px solid lightgray;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 10px;
  padding: 20px;
  position: relative;
  overflow: scroll;

  @media (max-width: 510px) {
    height: 500px;
    width: calc(100% - 30px);
    margin: 10px;
    grid-template-columns: 1fr;
    padding: 5px;
  }
`;
