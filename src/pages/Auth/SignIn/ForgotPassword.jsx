import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ShearnLogo } from "../../../assets/images";
import { MainButton } from "../../../components/botton";
import { PhoneNumberInput, PlainInput } from "../../../components/Input";
import { TextsWithLink } from "../../../components/texts";
import { Footer } from "../../../components/texts/Footer";
import { loginSchema } from "../../../utils/config";
import { Container, Form, Inputs, Main, Middle } from "./styled";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(loginSchema) });

  const handleEmailVerify = (formData) => {
    navigate("/reset");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleEmailVerify)}>
        <Main>
          <img src={ShearnLogo} alt="Shares earn logo" />
          <Inputs>
            <PlainInput
              name="email"
              type="email"
              placeholder="Enter your email address"
              register={register}
              error={errors.email?.message}
            />
          </Inputs>
        </Main>
        <Middle>
          <MainButton text="Continue" />
        </Middle>
      </Form>
      <Footer />
    </Container>
  );
};

export default ForgotPassword;
