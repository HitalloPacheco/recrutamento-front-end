import styled from 'styled-components';
import { AiOutlineSearch } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 5px;
  position: relative;
`;

export const Search = styled.input`
  height: 26px;
  width: 400px;
  min-width: 210px;
  border-radius: 30px;
  border: none;
  background: white;
  padding: 0 10px;
  color: black;
  outline: none;
  padding-right: 30px;
  border: 1px solid gray;
  ::placeholder {
    color: gray;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
  position: absolute;
  height: 28px;
  width: 26px;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  color: gray;
`;

