import React from "react";
import { Circles, Rings, SpinningCircles, TailSpin } from "react-loading-icons";
import { Button } from "./styled";

export const MainButton = ({ text, clickAction, type, disabled, loading }) => {
  return (
    <Button
      type={"submit" || type}
      onClick={clickAction}
      disabled={disabled || loading}
    >
      {loading ? (
        <TailSpin stroke="#6a6a6a" fill="#fff" width={40} height={40} />
      ) : (
        text
      )}
    </Button>
  );
};
