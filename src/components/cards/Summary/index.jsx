import React from "react";
import BlueContainer from "../../../containers/BlueContainer";
import { Summary } from "./styled";

export const SummaryCard = ({ text1, text2, price1, price2 }) => {
  return (
    <BlueContainer>
      <Summary>
        <div>
          <span>{text1}</span> <span>${price1}</span>{" "}
        </div>
        <div>
          <span>{text2}</span> <span>${price2}</span>{" "}
        </div>
      </Summary>
    </BlueContainer>
  );
};
