import { React, useState, useEffect } from "react";
import OtpComp from "./OtpComp";

export const OTPInput = ({
  setVisibleOTP,
  setVisibleCredentials,
  setSuccess,
}) => {
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
        We sent to <a href="#">hellouser@heads.design</a>. If you don’t see it,
        check your spam.
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
          {counter !== 0 ? <span>Resend 00:0{counter}</span> : <ResendCode />}
        </button>
      </div>
      <button
        style={{
          width: "90px",
          height: "40px",
          fontFamily: "Inter",
          fontWeight: "700",
          fontSize: "15px",
          lineHeight: "24px",
          textAlign: "center",
          color: "white",
          border: "0px",
          backgroundColor: "white",
          marginTop: "100px",
          marginLeft: "140px",
          background: "#0858F7",
          borderRadius: "12px",
        }}
        onClick={() => setSuccess(true)}
      >
        Submit
      </button>
    </div>
  );
};
