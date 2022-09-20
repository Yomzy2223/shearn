import React from "react";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import "./style.css";

export const PhoneNumberInput = () => {
  const { register, handleSubmit, control } = useForm();

  return (
    <PhoneInputWithCountry
      name="phoneNumberInput"
      control={control}
      rules={{ require: true }}
      defaultCountry="NG"
      placeholder="Enter your mobile number"
    />
  );
};
