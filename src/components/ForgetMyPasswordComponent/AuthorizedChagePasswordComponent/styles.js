import styled from 'styled-components';

export const Container = styled.div`
  height: 400px;
  width: 500px;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
`;

export const Send = styled.button`
  width: 100px;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 15px;
  background-color: #00AFF0;
  color: white;
  font-weight: 500;
  cursor: pointer;
  padding: 5px;
`

export const PasswordContainer = styled.div`
  margin-top: 70px;
`