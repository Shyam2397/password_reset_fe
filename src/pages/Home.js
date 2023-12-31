import React from "react";
import {
  Avatar,
  ButtonGroup,
  StyledButton,
  StyledSubTitle,
  StyledTitle,
} from "../components/Styles";

import Logo from "./../assets/logo.png";

const Home = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "trasparent",
          width: "100%",
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Avatar image={Logo} />
      </div>
      <StyledTitle size={65}>Welcome</StyledTitle>
      <StyledSubTitle size={27}>Feel free to explore our page</StyledSubTitle>
      <ButtonGroup>
        <StyledButton to="/login">Login</StyledButton>
        <StyledButton to="/signup">Signup</StyledButton>
      </ButtonGroup>
    </div>
  );
};

export default Home;
