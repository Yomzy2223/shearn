import React from "react";
import { Error, Input, InputWrapper } from "./styled";

export const PlainInput = ({
  name,
  type,
  placeholder,
  register,
  error,
  onChange,
  disable,
}) => {
  return (
    <InputWrapper>
      <Error>{error}</Error>
      {register ? (
        <Input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          disabled={disable}
        />
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          onChange={onChange ? onChange : () => {}}
          disabled={disable}
        />
      )}
    </InputWrapper>
  );
};
