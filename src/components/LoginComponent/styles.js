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

export const Register = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`

export const Assitents = styled.text`
  font-size: 16px;
  color: white;
  cursor: pointer;
  margin-top: 16px;
`

export const Send = styled.button`
  height: 30px;
  width: 100px;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 15px;
  background-color: #00AFF0;
  color: white;
  font-weight: 500;
  cursor: pointer;
`