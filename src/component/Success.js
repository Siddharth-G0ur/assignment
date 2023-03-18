import React from "react";
import logo from "../img/Logo.png";

export const Success = () => {
  return (
    <div className="animation">
      <div className="logo">
        <img src={logo} alt="logo" className="logo_animate" />
        <button
          style={{
            width: "72px",
            height: " 24px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "24px",
            textAlign: "center",
            color: "#0858F7",
            border: "0px",
            outline: "none",
            textAlign: "center",
            background: "white",
            position: "absolute",
            left: "628px",
            top: "366px",
          }}
        >
          Success!
        </button>
      </div>
    </div>
  );
};
