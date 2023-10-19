import React from "react";
import Logo from "./../assets/logo.png";
import {
  Avatar,
  ButtonGroup,
  CopyRightText,
  ExtraText,
  StyledFormArea,
  StyledFormButton,
  StyledTitle,
  TextLink,
  color,
} from "../components/Styles";
import { Form, Formik } from "formik";
import { TextInput } from "../components/FormLib";
import { FiMail, FiLock } from "react-icons/fi";
import * as Yup from "yup";
import { RotatingLines } from "react-loader-spinner";
import { connect } from "react-redux";
import { loginUser } from "../auth/actions/UserAction";
import { useNavigate } from "react-router-dom";

const Login = ({ loginUser }) => {
  const history = useNavigate();

  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle size={30} color={color.theme}>
          Memeber Login
        </StyledTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string().email("Invalid email address"),
            password: Yup.string()
              .min(8, "password is too short")
              .max(30, "password is too long")
              .required("required"),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(values);
            loginUser(values, history, setFieldError, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="olga1@example.com"
                icon={<FiMail />}
              />
              <TextInput
                name="password"
                type="password"
                label="password"
                placeholder="*********"
                icon={<FiLock />}
              />

              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit">Login</StyledFormButton>
                )}

                {isSubmitting && (
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                  />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>

        <ExtraText>
          New here? <TextLink to="/signup">Signup</TextLink>
        </ExtraText>
      </StyledFormArea>
      <CopyRightText>All right reserved &copy; 2023</CopyRightText>
    </div>
  );
};

export default connect(null, { loginUser })(Login);
