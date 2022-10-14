import React from "react";
import { Button } from "./styled";

export const MainButton = ({ text, clickAction, type, disabled }) => {
  return (
    <Button type={"submit" || type} onClick={clickAction} disabled={disabled}>
      {text}
    </Button>
  );
};
