import "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/User/Login";
import Signup from "./Pages/User/Signup";
import Navbar from "./Component/Navbar/Navbar";
import Error from "./Pages/Error/Error";
import Protected from "./Component/Protected";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ForgetPassword from "./Pages/User/ForgetPassword";
import ResetPassword from "./Pages/User/ResetPassword";
import EmailVerification from "./Pages/User/emailVerification";

function App() {
  const options = {
    timeout: 5000,
    position: positions.TOP_CENTER,
  };
  return (
    <>
      <Provider template={AlertTemplate} {...options}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/another"
              exact
              element={
                <Protected>
                  <h1>Another Page</h1>
                </Protected>
              }
            />
            <Route path="/" exact element={<h1>Home Page</h1>} />

            <Route path="login" exact element={<Login />} />
            <Route path="signup" exact element={<Signup />} />
            <Route path="*" element={<Error />} />
            <Route path="/forgot-password" exact element={<ForgetPassword />} />
            <Route path="/reset-password" exact element={<ResetPassword />} />
            <Route path="/verify-email" exact element={<EmailVerification />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
