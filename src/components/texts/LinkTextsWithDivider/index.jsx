import React from "react";
import { Link } from "react-router-dom";
import { Divider, TextContainer } from "./styled";

export const LinkTextsWithDivider = ({ text, style, small }) => {
  return (
    <TextContainer>
      {text.map((element, index) => {
        return (
          <div key={index}>
            {" "}
            {index !== 0 && <Divider />}
            <Link
              to={element.to}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span style={{ ...style, fontSize: small ? "10px" : "" }}>
                {element.text}
              </span>
            </Link>
          </div>
        );
      })}
    </TextContainer>
  );
};
