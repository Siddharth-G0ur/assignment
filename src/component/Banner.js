import { React, useState } from "react";
import { CiShare1 } from "react-icons/ci";
import BannerImg from "../img/BannerImg.png";

export const Banner = () => {
  const [shareIcon, setShareIcon] = useState(false);
  return (
    <>
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
            src={BannerImg}
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
    </>
  );
};
