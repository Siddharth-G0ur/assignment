import { React, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { RxEyeNone } from "react-icons/rx";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Credentials = ({ setVisibleOTP, setVisibleCredentials }) => {
  const [isMouseHoverEmail, setIsMouseHoverEmail] = useState(false);
  const [isMouseHoverDropdown, setIsMouseHoverDropdown] = useState(true);
  const [isMouseHoverPassword, setIsMouseHoverPassword] = useState(false);
  const [isMouseHoverShowPassword, setIsMouseHoverShowPassword] =
    useState(true);
  const [nextIcon, setNextIcon] = useState(false);
  return (
    <>
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
    </>
  );
};
