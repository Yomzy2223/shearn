import React from "react";
import { Link } from "react-router-dom";
import { TextContainer } from "./styled";

export const TextsWithLink = ({ text }) => {
  return (
    <TextContainer>
      {text.map((element, index) => {
        return (
          <p key={index}>
            {" "}
            {element.text}{" "}
            <Link
              to={element.link.to}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span>{element.link.text}</span>
            </Link>
          </p>
        );
      })}
    </TextContainer>
  );
};
