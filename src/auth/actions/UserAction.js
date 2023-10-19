import axios from "axios";

import { sessionService } from "redux-react-session";

export const loginUser = (
  credentials,
  history,
  setSubmitting,
  setFieldError
) => {
  return () => {
    axios
      .post(
        "https://password-reset-cahr.onrender.com/user/signin",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { data } = response;
        //   console.log(data);
        if (data.status === "FAILED") {
          const { message } = data;

          if (message.includes("credentials")) {
            setFieldError("email", message);
            setFieldError("password", message);
          } else if (message.includes("password")) {
            setFieldError("password", message);
          }
        } else if (data.status === "SUCCESS") {
          const userData = data.data[0];

          const token = userData._id;

          sessionService
            .saveSession(token)
            .then(() => {
              sessionService
                .saveUser(userData)
                .then(() => {
                  history("/dashboard");
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        }

        setSubmitting(false);
      })
      .catch((err) => console.log(err));
  };
};

export const signupUser = (
  credentials,
  history,
  setSubmitting,
  setFieldError
) => {
  return (dispatch) => {
    axios
      .post(
        "https://password-reset-cahr.onrender.com/user/signup",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { data } = response;

        if (data.status === "FAILED") {
          const { message } = data;
          if (message.includes("name")) {
            setFieldError("name", message);
          } else if (message.includes("email")) {
            setFieldError("email", message);
          } else if (message.includes("date")) {
            setFieldError("dateofbirth", message);
          } else if (message.includes("password")) {
            setFieldError("password", message);
          }

          setSubmitting(false);
        } else if (data.status === "SUCCESS") {
          const { email, password } = credentials;

          dispatch(
            loginUser(
              { email, password },
              history,
              setFieldError,
              setSubmitting
            )
          );
        }
      })
      .catch((err) => console.error(err));
  };
};

export const logoutUser = (history) => {
  return () => {
    sessionService.deleteSession();
    sessionService.deleteUser();
    history("/");
  };
};
