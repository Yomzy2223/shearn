import React, { useState } from "react";
import { Container, Main, Form, Inputs, Middle, MainError } from "./styled";
import Logo from "../../../assets/images/ShearnLogo.png";
import { PhoneNumberInput, PlainInput } from "../../../components/Input";
import { MainButton } from "../../../components/botton";
import { TextsWithLink } from "../../../components/texts";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../../components/texts/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "../../../utils/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { store } from "../../../redux/Store";
import { setAuthInfo } from "../../../redux/Slices";

export const SignUp = () => {
  const [mainError, setMainError] = useState();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(registerSchema) });

  // Signs a user up
  const handleSignUp = (formData) => {
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify(user));
        store.dispatch(setAuthInfo(user));
        console.log(user);
        navigate("/dashboard");
        // ...
      })
      // run, if error returned
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          setMainError(
            "Email has already been used, please enter another email"
          );
        } else {
          setMainError(errorCode);
        }
        setTimeout(() => {
          setMainError();
        }, 5000);
        console.log(errorCode);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <Main>
          <img src={Logo} alt="Shares earn logo" />
          <Inputs>
            <PlainInput
              name="full_name"
              placeholder="Enter full name"
              register={register}
              error={errors.full_name?.message}
            />
            <PlainInput
              name="email"
              placeholder="Enter email"
              register={register}
              error={errors.email?.message}
            />
            <PlainInput
              name="password"
              type="password"
              placeholder="Password (at least 6 characters)"
              register={register}
              error={errors.password?.message}
            />
            <PlainInput
              name="confirm_password"
              placeholder="Confirm Password"
              register={register}
              error={errors.confirm_password?.message}
            />
          </Inputs>
        </Main>
        <Middle>
          {mainError && <MainError>{mainError}</MainError>}

          <MainButton text="Register" type="submit" />
          <TextsWithLink
            text={[
              {
                text: "Already have an account?",
                link: { to: "/login", text: "Sign In" },
              },
            ]}
          />
        </Middle>
      </Form>
      <Footer />
    </Container>
  );
};
