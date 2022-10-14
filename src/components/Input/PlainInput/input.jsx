import React from "react";
import { Error, Input, InputWrapper } from "./styled";

export const PlainInput = ({ name, type, placeholder, register, error }) => {
  return (
    <InputWrapper>
      <Error>{error}</Error>
      <Input type={type} placeholder={placeholder} {...register(name)} />
    </InputWrapper>
  );
};
