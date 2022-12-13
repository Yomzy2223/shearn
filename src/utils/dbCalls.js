import {
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "./firebase";

// User information from local storage
let userInfo = JSON.parse(localStorage.getItem("user"));

// Get all shares information from the database
export const getProductsFromDb = async () => {
  const products = await getDocs(collection(db, "products"));
  return products.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

// Save user info to the database
export const saveRegInfoToDb = (formData) => {
  let userInfoRef = doc(db, "users", formData.email, "userInfo", "basicInfo");
  setDoc(
    userInfoRef,
    { ...formData, timeStamp: Timestamp.fromDate(new Date()) },
    { merge: true }
  )
    .then(() => {
      console.log("Saved registration info to database");
    })
    .catch((error) => {
      console.log(error);
    });
};

// Save payment information to the database
export const savePaymentInfoToDb = (MessageData) => {
  let paymentRef = doc(
    db,
    "users",
    userInfo?.email,
    "userInfo",
    MessageData.event === "charge_confirmed"
      ? "successfulPayments"
      : "failedPayments"
  );

  setDoc(
    paymentRef,
    { ...MessageData, timeStamp: Timestamp.fromDate(new Date()) },
    { merge: true }
  )
    .then(() => {
      if (MessageData.event === "charge_confirmed") {
        setBalanceToDb(MessageData.amount, userInfo.email, "inc");
      }
      console.log(`Saved ${MessageData.event} information to database`);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Set balance information to database
export const setBalanceToDb = (amount, email, action) => {
  let accountRef = doc(db, "users", email, "userInfo", "accountInfo");
  if (action === "inc") {
    updateDoc(accountRef, { balance: increment(amount) }, { merge: true })
      .then(() => {
        console.log("Current balance incremented and set to database");
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    setDoc(accountRef, { balance: amount }, { merge: true })
      .then(() => {
        console.log("Current balance set to database");
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

// Get balance information from database
export const getBalanceFromDb = async () => {
  let accountRef = doc(db, "users", userInfo.email, "userInfo", "accountInfo");
  const accountInfo = await getDoc(accountRef);
  return accountInfo.data().balance;
};

// Submit wallet address to the database
export const saveWalletAddressToDb = async (walletAddress, action) => {
  let accountInfoRef = doc(
    db,
    "users",
    userInfo?.email,
    "userInfo",
    "accountInfo"
  );
  if (action === "update") {
    updateDoc(accountInfoRef, { walletAddress: walletAddress }, { merge: true })
      .then(() => console.log("Wallet address updated"))
      .catch((error) => console.log(error));
  } else {
    setDoc(accountInfoRef, { walletAddress: walletAddress }, { merge: true })
      .then(() => console.log("Wallet address set to the database"))
      .catch((error) => console.log(error));
  }
};

// Get wallet address information from the database
export const getWalletAddressFromDb = async () => {
  let accountRef = doc(db, "users", userInfo.email, "userInfo", "accountInfo");
  const accountInfo = await getDoc(accountRef);
  return accountInfo.data().walletAddress;
};
