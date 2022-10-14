import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ShearnLogo } from "../../../assets/images";
import { MainButton } from "../../../components/botton";
import { PlainInput } from "../../../components/Input";
import { Footer } from "../../../components/texts/Footer";
import { loginSchema, newPasswordSchema } from "../../../utils/config";
import { Container, Form, Inputs, Main, Middle } from "./styled";

const NewPassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(newPasswordSchema) });

  const handlePasswordChange = () => {
    navigate("/dashboard");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handlePasswordChange)}>
        <Main>
          <img src={ShearnLogo} alt="Shares earn logo" />
          <Inputs>
            <PlainInput
              name="password"
              type="password"
              placeholder="Enter new Password"
              register={register}
              error={errors.password?.message}
            />
            <PlainInput
              name="confirm_password"
              type="password"
              placeholder="Enter new Password"
              register={register}
              error={errors.confirm_password?.message}
            />
          </Inputs>
        </Main>
        <Middle>
          <MainButton text="Login" />
        </Middle>
      </Form>
      <Footer />
    </Container>
  );
};

export default NewPassword;
