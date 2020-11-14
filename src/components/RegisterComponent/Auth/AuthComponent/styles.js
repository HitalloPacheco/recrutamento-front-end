import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  width: 370px;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

export const StyledParam = styled.text`
  margin-bottom: 10px;
  margin-left: 4px;
  font-size: 16px;
  color: white;
`

export const StyledInput = styled.input`
  height: 30px;
  width: 360px;
  background-color: rgba(256,256,256,0.7);
  outline: none;
  border-radius: 15px;
  border: none;
  font-size: 14px;
  font-weight: 400;
  padding-left: 10px;
  ::placeholder{
    color: black;
    font-size: 14px;
  }
`