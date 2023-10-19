import { Route } from "react-router-dom";
import { connect } from "react-redux";

const BasicRoute = ({ children, authenicated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !authenicated ? (
          children
        ) : (
          <Route to={{ pathname: "/dashboard", state: { from: location } }} />
        )
      }
    />
  );
};

const mapStateToProps = ({ session }) => ({
  authenicated: session.authenicated,
});
export default connect(mapStateToProps)(BasicRoute);
