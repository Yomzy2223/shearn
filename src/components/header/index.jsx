import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ShearnLogo } from "../../assets/images";

const MainHeader = ({ title }) => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 0 ? setShadow(true) : setShadow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <Top
      style={{ boxShadow: shadow ? "0 5px 5px #00000063" : "" }}
      title={title}
    >
      {title ? <h2>{title}</h2> : <img src={ShearnLogo} alt="" />}
    </Top>
  );
};

export default MainHeader;

const Top = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: #022d57;
  z-index: 10;

  > img {
    max-height: 94px;
    align-self: center;
    justify-self: center;
    margin: -10px 0 -21px;
  }

  > h2 {
    font-size: clamp(14px, 1.4vw, 16px);
    font-weight: 600;
    margin: 20px;
  }
`;
