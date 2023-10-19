import "./App.css";

import { StyledContainer } from "./components/Styles";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import BasicRoute from "./components/BasicRoutes";
import AuthRoute from "./components/AuthRoute";
import { connect } from "react-redux";

function App({ checked }) {
  return (
    <Router>
      {checked && (
        <StyledContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <BasicRoute path="/signup" element={<Signup />} />
            <BasicRoute path="/login" element={<Login />} />
            <AuthRoute path="/dashboard" element={<Dashboard />} />
          </Routes>
        </StyledContainer>
      )}
    </Router>
  );
}
const mapStateToProps = ({ session }) => ({
  checked: session.checked,
});

export default connect(mapStateToProps)(App);
