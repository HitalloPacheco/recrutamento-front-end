import React from "react";
import LogoContainer from "./LogoContainer";
import Profile from "./Profile";
import SearchBox from "./SearchBox";
import { Container } from "./styles";

const NavBar = () => {
  return (
    <Container>
      <LogoContainer />
      <SearchBox />
      <Profile />
    </Container>
  );
};

export default NavBar;
