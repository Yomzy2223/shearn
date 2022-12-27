// import { toast } from "react-hot-toast";

import { doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";

// const { useEffect } = require("react");

// export const useEffectOnce = (func) => {
//   let effectCalled = 0;

//   useEffect(() => {
//     if (effectCalled) return;
//     getNotifications();
//     effectCalled++;
//   }, []);

//   const getNotifications = async () => {
//     try {
//       toast.error("Please check your internet  connection");
//       func();
//     } catch (e) {
//       toast.error("Please check your internet  connection");
//       console.log(e);
//     }
//   };
// };

// Bought shares document ref in the database
export const useBoughtSharesRef = () => {
  const [email, setEmail] = useState("");

  // Get user information from local storage
  let userInfo = JSON.parse(localStorage.getItem("user"));

  let boughtSharesRef = doc(
    db,
    "users",
    userInfo.email,
    "userInfo",
    "boughtShares"
  );

  useEffect(() => {
    setEmail(userInfo.email);
  }, [userInfo.email]);

  return boughtSharesRef;
};

// Account info document ref in the database
export const useAccountInfoRef = () => {
  const [email, setEmail] = useState("");

  // Get user information from local storage
  let userInfo = JSON.parse(localStorage.getItem("user"));

  let accountInfoRef = doc(
    db,
    "users",
    userInfo.email,
    "userInfo",
    "accountInfo"
  );

  useEffect(() => {
    setEmail(userInfo.email);
  }, [userInfo.email]);

  return accountInfoRef;
};

// Notifications document ref in the database
export const useNotificationsRef = () => {
  const [email, setEmail] = useState("");

  // Get user information from local storage
  let userInfo = JSON.parse(localStorage.getItem("user"));

  let notificationsRef = doc(
    db,
    "users",
    userInfo.email,
    "userInfo",
    "notifications"
  );

  useEffect(() => {
    setEmail(userInfo.email);
  }, [userInfo.email]);

  return notificationsRef;
};
