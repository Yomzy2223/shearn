import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-hot-toast";
import uuid from "react-uuid";
import { auth, db } from "./firebase";
import { formatAMPM, getDaysToBeCredited } from "./globalFunctions";

// User information from local storage
let userInfo = JSON.parse(localStorage.getItem("user"));

let boughtSharesRef = doc(
  db,
  "users",
  userInfo.email,
  "userInfo",
  "boughtShares"
);

let accountInfoRef = doc(
  db,
  "users",
  userInfo.email,
  "userInfo",
  "accountInfo"
);

let incomeNotificationsRef = doc(
  db,
  "users",
  userInfo.email,
  "userInfo",
  "incomeNotifications"
);

let fundNotificationsRef = doc(
  db,
  "users",
  userInfo.email,
  "userInfo",
  "incomeNotifications"
);

let withdrawalNotificationsRef = doc(
  db,
  "users",
  userInfo.email,
  "userInfo",
  "incomeNotifications"
);

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
        toast.success("Payment confirmed");
      } else {
        toast.error("Payment failed");
      }
      console.log(`Saved ${MessageData.event} information to database`);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Set balance information to database
export const setBalanceToDb = async (amount, email, action) => {
  let accountInfoRef = doc(db, "users", email, "userInfo", "accountInfo");
  if (action === "inc") {
    updateDoc(accountInfoRef, { balance: increment(amount) }, { merge: true })
      .then(() => {
        console.log("Current balance incremented and set to database");
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (action === "dec") {
    updateDoc(accountInfoRef, { balance: increment(-amount) }, { merge: true });
  } else {
    setDoc(accountInfoRef, { balance: amount }, { merge: true })
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
  const accountInfo = await getDoc(accountInfoRef);
  return accountInfo.data().balance;
};

// Submit wallet address to the database
export const saveWalletAddressToDb = async (walletAddress, action) => {
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

// Set income information to database
export const setIncomeToDb = async (total, daily, email) => {
  let accountInfoRef = doc(db, "users", email, "userInfo", "accountInfo");

  setDoc(accountInfoRef, { totalIncome: total }, { merge: true })
    .then(() => {
      console.log("Total income set to database");
    })
    .catch((error) => {
      console.log(error);
    });

  setDoc(accountInfoRef, { dailyIncome: daily }, { merge: true })
    .then(() => {
      console.log("Daily income set to database");
    })
    .catch((error) => {
      console.log(error);
    });
};

// Get income information from database
export const getIncomeFromDb = async () => {
  const accountInfo = await getDoc(accountInfoRef);
  let income = {
    total: accountInfo.data().totalIncome,
    daily: accountInfo.data().dailyIncome,
  };
  return income;
};

// Get wallet address information from the database
export const getWalletAddressFromDb = async () => {
  const accountInfo = await getDoc(accountInfoRef);
  return accountInfo.data().walletAddress;
};

// Buy shares and save its information to the database
export const buyShares = async (info) => {
  let balance = await getBalanceFromDb();
  console.log(info);
  if (balance >= info.price) {
    setBalanceToDb(info.price, userInfo.email, "dec")
      .then(() => {
        saveBoughtShareInfoToDb(info);
        console.log("Database balance decremented");
      })
      .catch((error) => console.log(error));
    return {
      data: "success",
    };
  } else {
    toast.error("Insufficient balance");
    return {
      error: "failed",
    };
  }
};

// // Save bought shares information to the database
// export const saveBoughtShareInfoToDb = async (info) => {
//   let d = new Date();
//   let boughtSharesRef = collection(db, "users", userInfo.email, "boughtShares");
//   addDoc(boughtSharesRef, {
//     ...info,
//     time: formatAMPM(d),
//     date: Timestamp.fromDate(new Date()),
//   })
//     .then(() => console.log("Added Shares info to the database"))
//     .catch((error) => console.log(error));
// };

// Save bought shares information to the database
export const saveBoughtShareInfoToDb = async (info) => {
  let shares = await getBoughtSharesInfo();
  console.log(shares);
  let d = new Date();
  let updatedShares = [
    ...shares,
    {
      id: uuid(),
      ...info,
      time: formatAMPM(d),
      date: Timestamp.fromDate(new Date()),
      incomeLastCreditedTime: Timestamp.fromDate(new Date()),
    },
  ];

  setDoc(boughtSharesRef, { runningShares: updatedShares })
    .then(() => console.log("Added Shares info to the database"))
    .catch((error) => console.log(error));
};

// // Get bought shares information from the database
// export const getBoughtSharesInfo = async () => {
//   let boughtSharesRef = collection(db, "users", userInfo.email, "boughtShares");
//   let shares = await getDocs(boughtSharesRef);
//   let sharesData = shares.docs.map((share) => share.data());
//   let sortedData = sharesData.sort((a, b) => a.date.seconds - b.date.seconds);
//   return sortedData ? sortedData : [];
// };

// Get bought shares information from the database
export const getBoughtSharesInfo = async () => {
  let shares = await getDoc(boughtSharesRef);
  let sharesData = shares?.data()?.runningShares;
  let sortedData = sharesData
    ? sharesData.sort((a, b) => a.date.seconds - b.date.seconds)
    : [];
  return sortedData;
};

export const creditIncomeToDb = async () => {
  let allBoughtShares = await getBoughtSharesInfo();
  let dayInSecs = 60 * 60 * 24;
  let currentDay = Date.now();
  // console.log(currentDay);
  allBoughtShares.forEach((share) => {});
};

export const setIncomeCreditTimeToDb = async (share, time) => {
  let shareInfo = {
    ...share,
    incomeLastCreditedTime: time,
  };
  setDoc(boughtSharesRef, shareInfo, { merge: true });
  return;
};

export const updateIncome = async () => {
  let allBoughtShares = await getBoughtSharesInfo();
  let day = 1000 * 60 * 60 * 24;
  let incomeArray = allBoughtShares.map((share) => {
    let timeDiff = Date.now() - share.date.seconds * 1000;
    let timeDiffInDays = Math.trunc(timeDiff / day);
    let dailyIncome = timeDiffInDays ? share.hourProfit * 24 : 0;
    let daysToBeCredited = getDaysToBeCredited(share);
    let totalIncome = timeDiffInDays.days * dailyIncome;
    updateNotification({ ...daysToBeCredited, title: share.title });
    console.log(new Date(daysToBeCredited.days));
    updateSharesCreditedTime();
    return { total: totalIncome, daily: dailyIncome };
  });
  let totalIncome = incomeArray.reduce((acc, curr) => acc + curr.total, 0);
  let dailyIncome = incomeArray.reduce((acc, curr) => acc + curr.daily, 0);
  setIncomeToDb(totalIncome, dailyIncome, userInfo.email);
  console.log(totalIncome);
  console.log(dailyIncome);
};

export const updateNotification = (info) => {
  let day = 1000 * 60 * 60 * 24;
  let time = info.incomeLastCreditedTime;
  let notification = {
    ...info,
    time: time,
  };
  for (let i = 0; i <= info.days; i++) {
    setDoc(incomeNotificationsRef, notification, { merge: true })
      .then(() => console.log("Notification info sent to the database"))
      .catch((error) => console.log(error));
    time += day;
  }
};

export const updateSharesCreditedTime = async () => {
  let allBoughtShares = await getBoughtSharesInfo();
  let updatedShares = allBoughtShares.map((share) => {
    let daysToBeCredited = getDaysToBeCredited(share);
    share.incomeLastCreditedTime = new Date(daysToBeCredited.creditedTime);
    return share;
  });
  console.log(updatedShares);
  setDoc(boughtSharesRef, { runningShares: updatedShares })
    .then(() =>
      console.log("Updated shares credited time info to the database")
    )
    .catch((error) => console.log(error));
};
