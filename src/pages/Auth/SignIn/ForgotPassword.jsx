import { yupResolver } from "@hookform/resolvers/yup";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ShearnLogo } from "../../../assets/images";
import { MainButton } from "../../../components/botton";
import { PhoneNumberInput, PlainInput } from "../../../components/Input";
import { TextsWithLink } from "../../../components/texts";
import { Footer } from "../../../components/texts/Footer";
import { forgotPasswordSchema, loginSchema } from "../../../utils/config";
import { auth } from "../../../utils/firebase";
import { Container, Form, Inputs, Main, MainError, Middle } from "./styled";

const ForgotPassword = () => {
  const [mainError, setMainError] = useState();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(forgotPasswordSchema) });

  const handleEmailVerify = (formData) => {
    sendPasswordResetEmail(auth, formData.email)
      .then((d) => {
        console.log(d);
        navigate("/reset");
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found")
          setMainError("Email does not exist");
        else if (error.code === "auth/network-request-failed")
          setMainError("Please check your internet connection");
        else {
          setMainError(error.code);
        }
        setTimeout(() => {
          setMainError();
        }, 5000);
      });
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
          {mainError && <MainError>{mainError}</MainError>}

          <MainButton text="Continue" />
        </Middle>
      </Form>
      <Footer />
    </Container>
  );
};

export default ForgotPassword;
