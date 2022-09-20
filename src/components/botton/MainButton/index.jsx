import React from "react";
import { Button } from "./styled";

export const MainButton = ({ text, clickAction, type }) => {
  return (
    <Button type={"submit" || type} onClick={clickAction}>
      {text}
    </Button>
  );
};
