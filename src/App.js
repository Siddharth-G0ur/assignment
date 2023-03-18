import "./App.css";
import logo from "./img/Logo.png";
import Banner from "./img/Banner.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { RxEyeNone } from "react-icons/rx";
import OtpComp from "./component/OtpComp";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";

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
  const [isMouseHoverEmail, setIsMouseHoverEmail] = useState(false);
  const [isMouseHoverDropdown, setIsMouseHoverDropdown] = useState(true);
  const [isMouseHoverPassword, setIsMouseHoverPassword] = useState(false);
  const [isMouseHoverShowPassword, setIsMouseHoverShowPassword] =
    useState(true);
  const [visibleCredentials, setVisibleCredentials] = useState(true);
  const [visibleOTP, setVisibleOTP] = useState(false);
  const [nextIcon, setNextIcon] = useState(false);
  const [shareIcon, setShareIcon] = useState(false);
  // const [successAnimation, setSuccessAnimation] = useState(false);
  const [counter, setCounter] = useState(9);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  const handleChange = (value) => {
    console.log("value inside handle change", value);
  };

  const ResendCode = () => (
    <text
      style={{
        width: "110px",
        height: "24px",
        fontFamily: "Inter",
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "24px",
        textAlign: "center",
        color: "#0858F7",
        border: "0px",
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      Resend Code
    </text>
  );

  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {/* -------------------------Banner------------------------- */}
      <div
        style={{
          position: " absolute",
          width: "480px",
          height: "664px",
          left: "calc(75% - 480px/2 - 24px)",
          top: "calc(50% - 664px/2)",
          padding: 0,
          background: "#0858F7",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", height: "376px" }}>
          {" "}
          <img
            src={Banner}
            style={{
              borderRadius: "24px",
              justifyContent: "center",
              alignContent: "center",
              margin: "10px",
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "288px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "352px",
              height: "168px",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                width: "47px",
                height: "24px",
                background: "#18181B",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  width: "31px",
                  height: "16px",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "13px",
                  lineHeight: "16px",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                }}
              >
                NEW
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: "64px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "28px",
                lineHeight: "32px",
                letterSpacing: "-0.01em",
                color: "#FFFFFF",
                marginTop: "15px",
              }}
            >
              Developer handoff improvements
            </div>
            <div
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#FFFFFF",
                marginTop: "10px",
              }}
            >
              You’ll now see a highlight around Symbols on the Canvas and in the
              Inspector.
            </div>
          </div>
          <div
            style={{
              width: "352px",
              height: "32px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "100%",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                gap: "11px",
              }}
            >
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div
              style={{
                width: "80px",
                height: "100%",
                textAlign: "center",
                color: "white",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "24px",
              }}
              onMouseEnter={() => setShareIcon(true)}
              onMouseLeave={() => setShareIcon(false)}
            >
              Share {shareIcon ? <CiShare1 /> : <></>}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          width: "433.96px",
          height: "600.32px",
          left: "calc(74% - 433.96px/2 + 40.11px",
          top: "calc(51% - 600.32px/2 - 17.61px",
          zIndex: "-1",
          background: "#0646C6",
          borderRadius: "21.6982px",
          transform: "rotate(5deg)",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "387.7px",
          height: "536.32px",
          left: "calc(73% - 387.7px/2 + 97.63px)",
          top: "calc(51% - 536.32px/2 - 21.43px)",
          background: "#053594",
          borderRadius: "19.385px",
          transform: "rotate(10deg)",
          zIndex: "-2",
        }}
      ></div>

      {/* ----------------------------Credentials-----------------------------  */}
      <div className={visibleCredentials ? "fadeIn" : "fadeOut"}>
        <div
          style={{
            position: "absolute",
            width: "344px",
            height: "144px",
            left: "calc(50% - 800px/2)",
            top: "calc(35% - 190px/2 - 20px)",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            padding: 0,
          }}
        >
          <div
            style={{
              width: "344px",
              height: "64px",
              fontFamily: "Inter",
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "32px",
              letterSpacing: "-0.01em",
              color: "#18181B",
              marginBottom: "40px",
            }}
          >
            Welcome to Systempackage
          </div>
          <div
            style={{
              width: "100%",
              height: "56px",
              marginBottom: "32px",
              display: "flex",
              flexDirection: "row",
              borderRadius: "12px",
              outline: !isMouseHoverEmail ? "none" : "solid blue",
            }}
            onMouseEnter={() => setIsMouseHoverEmail(true)}
            onMouseLeave={() => setIsMouseHoverEmail(false)}
          >
            <div
              style={{
                width: "50%",
                height: "56px",
                borderTopLeftRadius: "12px",
                borderBottomLeftRadius: "12px",
              }}
            >
              <input
                style={{
                  height: "100%",
                  width: "100%",
                  background: isMouseHoverEmail
                    ? "white"
                    : "rgba(24, 24, 27, 0.05)",
                  border: "0px",
                  outline: "none",
                  borderTopLeftRadius: "12px",
                  borderBottomLeftRadius: "12px",
                  paddingLeft: "20px",
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
                value={"hellouser"}
              />
            </div>
            <div
              style={{
                width: "50%",
                height: "56px",
                padding: 4,
                background: isMouseHoverEmail
                  ? "white"
                  : "rgba(24, 24, 27, 0.05)",
                borderTopRightRadius: "12px",
                borderBottomRightRadius: "12px",
              }}
            >
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#FFFF",
                  borderRadius: "8px",
                  border: "0px",
                  background: isMouseHoverDropdown
                    ? "white"
                    : "rgba(230, 237, 254)",
                  color: !isMouseHoverDropdown ? "blue" : "grey",
                }}
                onMouseEnter={() => setIsMouseHoverDropdown(false)}
                onMouseLeave={() => setIsMouseHoverDropdown(true)}
              >
                @heads.design
                <FiChevronDown style={{ marginLeft: "10px" }} />
              </button>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: "56px",
              marginBottom: "32px",
              display: "flex",
              flexDirection: "row",
              borderRadius: "12px",
              outline: !isMouseHoverPassword ? "none" : "solid blue",
              justifyContent: "space-between",
            }}
            onMouseEnter={() => setIsMouseHoverPassword(true)}
            onMouseLeave={() => setIsMouseHoverPassword(false)}
          >
            <div
              style={{
                width: "83.7%",
                height: "56px",
                borderTopLeftRadius: "12px",
                borderBottomLeftRadius: "12px",
              }}
            >
              <input
                style={{
                  height: "100%",
                  width: "100%",
                  background: isMouseHoverPassword
                    ? "white"
                    : "rgba(24, 24, 27, 0.05)",
                  border: "0px",
                  outline: "none",
                  borderTopLeftRadius: "12px",
                  borderBottomLeftRadius: "12px",
                  paddingLeft: "20px",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
                type="password"
              />
            </div>
            <div
              style={{
                width: "16.3%",
                height: "56px",
                padding: 4,
                background: isMouseHoverPassword
                  ? "white"
                  : "rgba(24, 24, 27, 0.05)",
                borderTopRightRadius: "12px",
                borderBottomRightRadius: "12px",
              }}
            >
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#FFFF",
                  borderRadius: "8px",
                  border: "0px",
                  background: isMouseHoverShowPassword
                    ? "white"
                    : "rgba(230, 237, 254)",
                  color: !isMouseHoverShowPassword ? "blue" : "grey",
                }}
                onMouseEnter={() => setIsMouseHoverShowPassword(false)}
                onMouseLeave={() => setIsMouseHoverShowPassword(true)}
              >
                <RxEyeNone />
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0px",
            gap: "24px",
            position: "absolute",
            width: "344px",
            height: "104px",
            left: "calc(50% - 800px/2)",
            top: "calc(67% - 160px/2 - 20px)",
          }}
        >
          <button
            style={{
              width: "100%",
              height: "100px",
              border: "0px",
              borderRadius: "12px",
              background: " #0858F7",
              borderRadius: "12px",
              textAlign: "center",
              justifyContent: "center",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFFFFF",
            }}
            onClick={() => {
              setVisibleCredentials(false);
              setVisibleOTP(true);
            }}
          >
            <div
              className="next-txt"
              onMouseEnter={() => setNextIcon(true)}
              onMouseLeave={() => setNextIcon(false)}
            >
              Next {nextIcon ? <AiOutlineArrowRight /> : <></>}
            </div>
          </button>
          <div
            style={{
              width: "100%",
              height: "56px",
              border: "0px",
              textAlign: "center",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFFFFF",
            }}
          >
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
      {/* ----------------------------OTP Input-----------------------------  */}
      <div className={visibleOTP ? "fadeIn" : "fadeOut"}>
        <div
          style={{
            position: "absolute",
            width: "344px",
            height: "144px",
            left: "calc(50% - 800px/2)",
            top: "calc(35% - 190px/2 - 20px)",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            padding: 0,
          }}
        >
          <div
            style={{
              width: "344px",
              height: "64px",
              fontFamily: "Inter",
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "32px",
              letterSpacing: "-0.01rem",
              color: "#18181B",
            }}
          >
            Enter the verification code to continue
          </div>
          <div
            style={{
              width: "344px",
              height: "48px",
              marginTop: "16px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#7A7A85",
            }}
          >
            We sent to <a href="#">hellouser@heads.design</a>. If you don’t see
            it, check your spam.
          </div>
          <div
            style={{
              width: "384px",
              height: "48px",
              marginTop: "40px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#7A7A85",
            }}
          >
            <OtpComp numInputs={6} handleChange={handleChange} />
          </div>
          <div
            style={{
              width: "344px",
              height: "48px",
              marginTop: "56px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#7A7A85",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <button
              style={{
                width: "39px",
                height: "24px",
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "24px",
                textAlign: "center",
                color: "#0858F7",
                border: "0px",
                backgroundColor: "white",
              }}
              onClick={() => {
                setVisibleCredentials(true);
                setVisibleOTP(false);
              }}
            >
              Back
            </button>
            <button
              style={{
                width: "118px",
                height: "24px",
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "24px",
                textAlign: "center",
                color: "#0858F7",
                border: "0px",
                backgroundColor: "white",
                color: "#CACACE",
              }}
            >
              {counter !== 0 ? (
                <span>Resend 00:0{counter}</span>
              ) : (
                <ResendCode />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="bottom_text">
        Not member? <a href="#">Create account</a>
      </div>
    </>
  );
}

export default App;
