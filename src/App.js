import "./App.css";
import logo from "./img/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Banner } from "./component/Banner";
import { Credentials } from "./component/Credentials";
import { OTPInput } from "./component/OTPInput";
import { Success } from "./component/Success";

function App() {
  const grey = {
    background: "grey",
    width: "300px",
    height: "56px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  };
  const white = {
    background: "white",
    outline: "blue",
    width: "300px",
    height: "56px",
    borderRadius: "12px",
    background: "rgba(24, 24, 27, 0.05)",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  };
  const [visibleCredentials, setVisibleCredentials] = useState(true);
  const [visibleOTP, setVisibleOTP] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      {!success ? (
        <div className={success ? "success" : ""}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <Banner />
          <div className={visibleCredentials ? "fadeIn" : "fadeOut"}>
            <Credentials
              setVisibleOTP={setVisibleOTP}
              setVisibleCredentials={setVisibleCredentials}
            />
          </div>
          <div className={visibleOTP ? "fadeIn" : "fadeOut"}>
            <OTPInput
              setVisibleOTP={setVisibleOTP}
              setVisibleCredentials={setVisibleCredentials}
              setSuccess={setSuccess}
            />
          </div>
          <div className="bottom_text">
            Not member? <a href="#">Create account</a>
          </div>
        </div>
      ) : (
        <Success />
      )}
    </>
  );
}

export default App;
