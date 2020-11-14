import styled from "styled-components";
import bgImage from "../../static/bgImage.png";

export const Container = styled.div`
  border: 1px solid #000;
  background-image: url(${bgImage});
  width: calc(100vw - 2px);
  height: calc(100vh - 2px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
