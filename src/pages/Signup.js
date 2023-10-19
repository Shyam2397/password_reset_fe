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
import { FiMail, FiLock, FiUser, FiCalendar } from "react-icons/fi";
import * as Yup from "yup";
import { RotatingLines } from "react-loader-spinner";
import { connect } from "react-redux";
import { signupUser } from "../auth/actions/UserAction";
import { useNavigate } from "react-router-dom";

const Signup = ({ signupUser }) => {
  const history = useNavigate();

  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle size={30} color={color.theme}>
          Memeber Signup
        </StyledTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
            repeatpassword: "",
            dateofbirth: "",
            name: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string().email("Invalid email address"),
            password: Yup.string()
              .min(8, "password is too short")
              .max(30, "password is too long")
              .required("required"),
            name: Yup.string().required("Required"),
            dateofbirth: Yup.string().required("Required"),
            repeatpassword: Yup.string()
              .required("Required")
              .oneOf([Yup.ref("password")], "password must match"),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(values);
            signupUser(values, history, setSubmitting, setFieldError);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="name"
                type="text"
                label="Full name"
                placeholder="simpson"
                icon={<FiUser />}
              />
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="olga1@example.com"
                icon={<FiMail />}
              />
              <TextInput
                name="dateofbirth"
                type="date"
                label="Date of Birth"
                icon={<FiCalendar />}
              />
              <TextInput
                name="password"
                type="password"
                label="password"
                placeholder="*********"
                icon={<FiLock />}
              />
              <TextInput
                name="repeatpassword"
                type="password"
                label="Repeat password"
                placeholder="*********"
                icon={<FiLock />}
              />

              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit">Signup</StyledFormButton>
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
          Already have an account? <TextLink to="/login">Login</TextLink>
        </ExtraText>
      </StyledFormArea>
      <CopyRightText>All right reserved &copy; 2023</CopyRightText>
    </div>
  );
};

export default connect(null, { signupUser })(Signup);
