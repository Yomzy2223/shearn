import React from "react";
import { Error, Input, InputWrapper } from "./styled";

export const PlainInput = ({
  name,
  type,
  placeholder,
  register,
  error,
  onChange,
}) => {
  return (
    <InputWrapper>
      <Error>{error}</Error>
      {register ? (
        <Input type={type} placeholder={placeholder} {...register(name)} />
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          onChange={onChange ? onChange : () => {}}
        />
      )}
    </InputWrapper>
  );
};
