import React from "react";
import { Container } from "./styles";

const Profile = () => {
  var email = window.localStorage.getItem('email');
  var firstLetter = email.substr(0,1)

  return <Container>{`${firstLetter.toUpperCase()}`}</Container>;
};

export default Profile;
