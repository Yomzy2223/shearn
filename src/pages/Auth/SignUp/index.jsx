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
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../../../utils/firebase";
import { store } from "../../../redux/Store";
import { setAuthInfo } from "../../../redux/Slices";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import {
  saveRegInfoToDb,
  setBalanceToDb,
  setIncomeToDb,
  setReferralCodeToDb,
  updateBalanceToDb,
} from "../../../utils/dbCalls";

export const SignUp = () => {
  const [mainError, setMainError] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(registerSchema) });

  // Signs a user up
  const handleSignUp = (formData) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify(user));
        store.dispatch(setAuthInfo(user));
        sendEmailVerification(auth.currentUser).then(() => {
          // Email verification sent!
          console.log("Email verification sent");
        });
        saveRegInfoToDb(formData);
        setReferralCodeToDb(formData.email);
        setBalanceToDb(0, formData.email);
        setIncomeToDb(0, 0, formData.email);
        navigate("/dashboard");
        setLoading(false);
      })
      .then(() => updateDisplayName(formData.full_name))
      .catch((error) => {
        setLoading(false);
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
        console.log(error);
      });
  };

  // Set user's display name
  const updateDisplayName = (fullName) => {
    let firstName = fullName.split(" ")[1];
    updateProfile(auth.currentUser, {
      displayName: firstName,
    })
      .then(() => {
        // Profile updated!
        console.log("updated");
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
      });
  };

  // Save user info to the database
  // const saveInfoToDb = (formData) => {
  //   let userInfoRef = doc(
  //     db,
  //     "users",
  //     formData.email,
  //     "basicInfo",
  //     formData.email
  //   );
  //   setDoc(
  //     userInfoRef,
  //     { ...formData, timeStamp: Timestamp.fromDate(new Date()) },
  //     { merge: true }
  //   )
  //     .then((data) => {
  //       console.log("Saved to database", data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   // const usersRef = (db, "users", formData.email);
  //   // setDoc(usersRef, {
  //   //   fullName: formData.full_name,
  //   //   email: formData.email,
  //   // })
  // };

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

          <MainButton text="Register" type="submit" loading={loading} />
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
