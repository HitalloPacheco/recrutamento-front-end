import React from "react";
import { Container, SearchContainer, Search, IconContainer, SearchIcon } from "./styles";

const SearchBox = () => {
  return (
    <Container>
      <SearchContainer>
        <Search placeholder="Search"/>
      </SearchContainer>
      <IconContainer>
        <SearchIcon />
      </IconContainer>
    </Container>
  );
};

export default SearchBox;
