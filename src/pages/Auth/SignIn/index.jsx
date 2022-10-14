import React, { useState } from "react";
import { Container, Main, Form, Inputs, Middle, MainError } from "./styled";
import { PhoneNumberInput, PlainInput } from "../../../components/Input";
import { MainButton } from "../../../components/botton";
import { TextsWithLink } from "../../../components/texts";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../../components/texts/Footer";
import { ShearnLogo } from "../../../assets/images";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../utils/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { store } from "../../../redux/Store";
import { setAuthInfo } from "../../../redux/Slices";

export const SignIn = () => {
  const [mainError, setMainError] = useState();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(loginSchema) });

  // Logs a user in
  const handleLogin = (formData) => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify(user));
        store.dispatch(setAuthInfo(user));
        console.log(user);
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/wrong-password")
          setMainError("You entered a wrong password");
        else if (errorCode === "auth/user-not-found")
          setMainError("Email is not registered");
        else {
          setMainError(errorCode);
        }
        setTimeout(() => {
          setMainError();
        }, 5000);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <Main>
          <img src={ShearnLogo} alt="Shares earn logo" />
          <Inputs>
            <PlainInput
              name="email"
              type="email"
              placeholder="Enter your email"
              register={register}
              error={errors.email?.message}
            />
            <PlainInput
              name="password"
              type="password"
              placeholder="Enter Password"
              register={register}
              error={errors.password?.message}
            />
            <TextsWithLink
              text={[
                {
                  text: "Forgot your password? ",
                  link: { to: "/forgot-password", text: "Click here" },
                },
              ]}
              style={{ alignSelf: "flex-end" }}
            />
          </Inputs>
        </Main>
        <Middle>
          {mainError && <MainError>{mainError}</MainError>}

          <MainButton text="Login" />
          <TextsWithLink
            text={[
              {
                text: "Don't have an account? ",
                link: { to: "/register", text: "Sign Up" },
              },
            ]}
          />
        </Middle>
      </Form>
      <Footer />
    </Container>
  );
};

//Zillow
