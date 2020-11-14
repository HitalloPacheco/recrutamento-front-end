import React, { useContext } from "react";
import { Context } from "../../../contexts/search";
import { Container, SearchContainer, Search, IconContainer, SearchIcon } from "./styles";

const SearchBox = () => {

  const { searchText, setSearchText } = useContext(Context);

  return (
    <Container>
      <SearchContainer>
        <Search placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
      </SearchContainer>
      <IconContainer>
        <SearchIcon />
      </IconContainer>
    </Container>
  );
};

export default SearchBox;
