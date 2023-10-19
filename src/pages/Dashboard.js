import React from "react";
import {
  Avatar,
  ButtonGroup,
  StyledButton,
  StyledFormArea,
  StyledTitle,
  color,
} from "../components/Styles";

import Logo from "./../assets/logo.png";

import { connect } from "react-redux";
import { logoutUser } from "../auth/actions/UserAction";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ logoutUser }) => {
  const history = useNavigate();
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
      <StyledFormArea bg={color.light2}>
        <StyledTitle size={65}>Welcome, User</StyledTitle>

        <ButtonGroup>
          <StyledButton to="#" onClick={() => logoutUser(history)}>
            Logout
          </StyledButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
};

export default connect(null, { logoutUser })(Dashboard);
