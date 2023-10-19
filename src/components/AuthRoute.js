import { Route } from "react-router-dom";
import { connect } from "react-redux";

const AuthRoute = ({ children, authenicated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenicated ? (
          children
        ) : (
          <Route to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

const mapStateToProps = ({ session }) => ({
  authenicated: session.authenicated,
});
export default connect(mapStateToProps)(AuthRoute);
