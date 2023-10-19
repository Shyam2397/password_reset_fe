import styled from "styled-components";

import background from "./../assets/bgimage.jpg";
import { Link } from "react-router-dom";

export const color = {
  primary: "#fff",
  theme: "#BE185D",
  light1: "#F3F4F6",
  light2: "#E5E7EB",
  dark1: "#1F2937",
  dark2: "#4B5563",
  dark3: "#9CA3AF",
  red: "#DC2626",
};

// background
export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background});
  background-size: cover;
  background-attachment: fixed;
`;

// home

export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : color.primary)};
  padding: 5px;
  margin-bottom: 20px;
  color: black;
`;

export const StyledSubTitle = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : color.primary)};
  padding: 5px;
  margin-bottom: 25px;
  color: black;
`;

export const Avatar = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: auto;
`;

export const StyledButton = styled(Link)`
  padding: 10px;
  width: 150px;
  background-color: black;
  font-size: 16px;
  border: 3px solid white;
  border-radius: 25px;
  color: ${color.primary};
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: ${color.primary};
    color: ${color.theme};
    cursor: pointer;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;

// input

export const StyledTextInput = styled.input`
  width: 280px;
  padding: 15px;
  padding-left: 50px;
  font-size: 17px;
  letter-spacing: 1px;
  color: ${color.light2};
  border: 0;
  outline:0
  display: block;
  margin: 5px auto 10px auto;
  transition: ease-in-out 0.3s;

  ${(props) =>
    props.invalid && `background-color:${color.red}; color :${color.primary}`}

  &:focus {
    background-color: ${color.dark2};
    color: ${color.primary};
  }
`;

export const Styledlabel = styled.p`
  text-align: left;
  font-size: 13px;
  font-weight: bold;
`;

export const StyledFormArea = styled.div`
  background-color: ${(props) => props.bg || color.light1};
  text-align: center;
  padding: 45px 55px;
`;

export const StyledFormButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: black;
  font-size: 16px;
  border: 2px solid white;
  border-radius: 25px;
  color: ${color.primary};
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: ${color.primary};
    color: ${color.theme};
    cursor: pointer;
  }
`;

export const ErrorMsg = styled.div`
  font-size: 11px;
  color: ${color.red};
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
`;

export const ExtraText = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : color.dark2)};
  padding: 2px;
  margin-top: 10px;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${color.theme};
  transition: ease-in-out 0.3s;
  &:hover {
    text-decoration: underline;
    letter-spacing: 2px;
    font-weight: bold;
  }
`;

// icons

export const StyledIcon = styled.p`
  color: ${color.dark1};
  position: absolute;
  font-size: 21px;
  top: 35px;
  ${(props) => props.right && `right:15px`}
  ${(props) => !props.right && `left:15px`}
`;

// copyright

export const CopyRightText = styled.p`
  padding: 5px;
  margin: 5px;
  text-align: center;
  color: ${color.dark2};
`;
