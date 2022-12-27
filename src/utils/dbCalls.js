// import {
//   addDoc,
//   arrayUnion,
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   increment,
//   setDoc,
//   Timestamp,
//   updateDoc,
// } from "firebase/firestore";
// import { toast } from "react-hot-toast";
// import { useSelector } from "react-redux";
// import uuid from "react-uuid";
// import { auth, db } from "./firebase";
// import { formatAMPM, getDaysToBeCredited } from "./globalFunctions";
// import { useGetEmail } from "./hooks";

// // User information from local storage
// // let userInfo = JSON.parse(localStorage.getItem("user"));

// // let boughtSharesRef = doc(
// //   db,
// //   "users",
// //   userInfo.email,
// //   "userInfo",
// //   "boughtShares"
// // );

// // let accountInfoRef = doc(
// //   db,
// //   "users",
// //   userInfo.email,
// //   "userInfo",
// //   "accountInfo"
// // );

// // let notificationsRef = doc(
// //   db,
// //   "users",
// //   userInfo.email,
// //   "userInfo",
// //   "notifications"
// // );

// const boughtSharesRef = (email) => {
//   return doc(db, "users", email, "userInfo", "boughtShares");
// };

// const accountInfoRef = (email) => {
//   return doc(db, "users", email, "userInfo", "accountInfo");
// };

// const notificationsRef = (email) => {
//   return doc(db, "users", email, "userInfo", "notifications");
// };

// // Get all shares information from the database
// export const getProductsFromDb = async () => {
//   const products = await getDocs(collection(db, "products"));
//   return products.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
// };

// // Save user info to the database
// export const saveRegInfoToDb = (formData) => {
//   let userInfoRef = doc(db, "users", formData.email, "userInfo", "basicInfo");
//   setDoc(
//     userInfoRef,
//     { ...formData, timeStamp: Timestamp.fromDate(new Date()) },
//     { merge: true }
//   )
//     .then(() => {
//       console.log("Saved registration info to database");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// // Create and save referral code to the database
// export const setReferralCodeToDb = (email) => {
//   let accountInfoRef = doc(db, "users", email, "userInfo", "accountInfo");
//   const referralId = uuid();
//   setDoc(accountInfoRef, { referralId: referralId }, { merge: true }).then(() =>
//     console
//       .log("Referral code set to the database")
//       .catch((e) => console.log(e))
//   );
// };

// // Create and save referral code to the database
// export const getReferralCodeFromDb = async (email) => {
//   const accountInfo = await getDoc(accountInfoRef);
//   console.log(accountInfo?.data());
//   return accountInfo?.data().referralId;
// };

// // Save payment information to the database
// export const fundAccount = (MessageData) => {
//   if (MessageData.event === "charge_confirmed") {
//     setBalanceToDb(MessageData.amount, userInfo.email, "inc");
//     toast.success("Payment confirmed");
//   } else {
//     toast.error("Payment failed");
//   }
// };

// // Set balance information to database
// export const setBalanceToDb = async (amount, email, action) => {
//   let accountInfoRef = doc(db, "users", email, "userInfo", "accountInfo");
//   if (action === "inc") {
//     updateDoc(accountInfoRef, { balance: increment(amount) }, { merge: true })
//       .then(() => {
//         console.log("Current balance incremented and set to database");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } else if (action === "dec") {
//     updateDoc(accountInfoRef, { balance: increment(-amount) }, { merge: true });
//   } else {
//     setDoc(accountInfoRef, { balance: amount }, { merge: true })
//       .then(() => {
//         console.log("Current balance set to database");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// };

// // Get balance information from database
// export const getBalanceFromDb = async () => {
//   const accountInfo = await getDoc(accountInfoRef);
//   return accountInfo.data().balance;
// };

// // Submit wallet address to the database
// export const saveWalletAddressToDb = async (walletAddress, action) => {
//   if (action === "update") {
//     updateDoc(accountInfoRef, { walletAddress: walletAddress }, { merge: true })
//       .then(() => console.log("Wallet address updated"))
//       .catch((error) => console.log(error));
//   } else {
//     setDoc(accountInfoRef, { walletAddress: walletAddress }, { merge: true })
//       .then(() => console.log("Wallet address set to the database"))
//       .catch((error) => console.log(error));
//   }
// };

// // Set income information to database
// export const setIncomeToDb = async (total, daily, email) => {
//   let accountInfoRef = doc(db, "users", email, "userInfo", "accountInfo");

//   setDoc(accountInfoRef, { totalIncome: total }, { merge: true })
//     .then(() => {
//       console.log("Total income set to database");
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   setDoc(accountInfoRef, { dailyIncome: daily }, { merge: true })
//     .then(() => {
//       console.log("Daily income set to database");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// // Get income information from database
// export const getIncomeFromDb = async () => {
//   const accountInfo = await getDoc(accountInfoRef);
//   let income = {
//     total: accountInfo.data().totalIncome,
//     daily: accountInfo.data().dailyIncome,
//   };
//   return income;
// };

// // Update user's income in the database
// export const updateIncome = async () => {
//   let allBoughtShares = await getBoughtSharesInfo();
//   let day = 1000 * 60 * 60 * 24;
//   let incomeArray = allBoughtShares.map((share) => {
//     let timeDiff = Date.now() - share.date.seconds * 1000;
//     let timeDiffInDays = Math.trunc(timeDiff / day);
//     let dailyIncome = timeDiffInDays
//       ? parseFloat((share.hourProfit * 24).toFixed(2))
//       : 0;
//     let totalIncome = timeDiffInDays * dailyIncome;
//     let daysToBeCredited = getDaysToBeCredited(share);
//     updateIncomeNotification({
//       days: daysToBeCredited.days,
//       incomeLastCreditedTime: share.incomeLastCreditedTime,
//       title: share.title,
//       amount: dailyIncome,
//     });
//     updateSharesCreditedTime();
//     return { total: totalIncome, daily: dailyIncome };
//   });
//   let totalIncome = incomeArray.reduce((acc, curr) => acc + curr.total, 0);
//   let dailyIncome = incomeArray.reduce((acc, curr) => acc + curr.daily, 0);
//   setIncomeToDb(totalIncome, dailyIncome, userInfo.email);
// };

// // Get wallet address information from the database
// export const getWalletAddressFromDb = async () => {
//   const accountInfo = await getDoc(accountInfoRef);
//   return accountInfo.data().walletAddress;
// };

// // Buy shares and save its information to the database
// export const buyShares = async (info) => {
//   let balance = await getBalanceFromDb();
//   console.log(info);
//   if (balance >= info.price) {
//     setBalanceToDb(info.price, userInfo.email, "dec")
//       .then(() => {
//         saveBoughtShareInfoToDb(info);
//         console.log("Database balance decremented");
//       })
//       .catch((error) => console.log(error));
//     return {
//       data: "success",
//     };
//   } else {
//     toast.error("Insufficient balance");
//     return {
//       error: "failed",
//     };
//   }
// };

// // Save bought shares information to the database
// export const saveBoughtShareInfoToDb = async (info) => {
//   let shares = await getBoughtSharesInfo();
//   console.log(shares);
//   let d = new Date();
//   let updatedShares = [
//     ...shares,
//     {
//       id: uuid(),
//       ...info,
//       time: formatAMPM(d),
//       date: Timestamp.fromDate(new Date()),
//       incomeLastCreditedTime: Timestamp.fromDate(new Date()),
//     },
//   ];

//   setDoc(()=>boughtSharesRef(email), { runningShares: updatedShares })
//     .then(() => console.log("Added Shares info to the database"))
//     .catch((error) => console.log(error));
// };

// // Get bought shares information from the database
// export const getBoughtSharesInfo = async () => {
//   let shares = await getDoc(boughtSharesRef);
//   let sharesData = shares?.data()?.runningShares;
//   let sortedData = sharesData
//     ? sharesData.sort((a, b) => a.date.seconds - b.date.seconds)
//     : [];
//   return sortedData;
// };

// // Update income notification document in the database
// export const updateIncomeNotification = async (info) => {
//   let day = 1000 * 60 * 60 * 24;
//   let time = info.incomeLastCreditedTime.seconds * 1000;
//   let notification = {
//     title: info.title,
//     time: time,
//     amount: info.amount,
//   };
//   let count = 0;
//   for (let i = 0; i < info.days; i++) {
//     let incomeNotifications = await getDoc(notificationsRef);
//     if (!incomeNotifications?.data()?.income?.length > 0 && count === 0) {
//       setDoc(notificationsRef, { income: [notification] }, { merge: true })
//         .then(() =>
//           console.log("Income notification info sent to the database")
//         )
//         .catch((error) => console.log(error));
//       time += day;
//       count++;
//     } else {
//       updateDoc(notificationsRef, { income: arrayUnion(notification) })
//         .then(() =>
//           console.log("Income notification info sent to the database")
//         )
//         .catch((error) => console.log(error));
//       time += day;
//     }
//   }
// };

// // Get income notification document from the database
// export const getIncomeNotificationFromDb = async () => {
//   let notifications = await getDoc(notificationsRef);
//   console.log(notifications.data());
//   return notifications.data().income.sort((a, b) => b.time - a.time);
// };

// // Update fund notification document in the database
// export const updateFundNotification = async (MessageData) => {
//   let info = {
//     ...MessageData,
//     status: MessageData.event === "charge_confirmed" ? "Success" : "Failed",
//     timeStamp: Timestamp.fromDate(new Date()),
//   };

//   console.log("This function ran");
//   let incomeNotifications = await getFundNotificationFromDb();

//   if (incomeNotifications.length === 0) {
//     setDoc(notificationsRef, { fund: [info] }, { merge: true })
//       .then(() => console.log("Fund notification info sent to the database"))
//       .catch((error) => console.log(error));
//   } else {
//     updateDoc(notificationsRef, { fund: arrayUnion(info) })
//       .then(() => console.log("Fund notification info sent to the database"))
//       .catch((error) => console.log(error));
//   }
// };

// // Get fund notification document from the database
// export const getFundNotificationFromDb = async () => {
//   let notifications = await getDoc(notificationsRef);
//   let sorted = notifications
//     ?.data()
//     ?.fund?.sort((a, b) => b.timeStamp - a.timeStamp);
//   return sorted ? sorted : [];
// };

// // Update all bought shares income credited time in the database
// export const updateSharesCreditedTime = async () => {
//   let allBoughtShares = [...(await getBoughtSharesInfo())];
//   let updatedShares = allBoughtShares.map((share) => {
//     let daysToBeCredited = getDaysToBeCredited(share);
//     console.log(new Date(daysToBeCredited.creditedTime));
//     share.incomeLastCreditedTime = new Date(daysToBeCredited.creditedTime);
//     return share;
//   });

//   console.log(updatedShares);
//   setDoc(boughtSharesRef, { runningShares: updatedShares })
//     .then(() =>
//       console.log("Updated shares credited time info to the database")
//     )
//     .catch((error) => console.log(error));
// };

import {
  addDoc,
  arrayUnion,
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
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import { auth, db } from "./firebase";
import { formatAMPM, getDaysToBeCredited } from "./globalFunctions";

//
//
//
//
//
// const boughtSharesRef = (email) => {
//   return doc(db, "users", email, "userInfo", "boughtShares");
// };

// const accountInfoRef = (email) => {
//   return doc(db, "users", email, "userInfo", "accountInfo");
// };

// const notificationsRef = (email) => {
//   return doc(db, "users", email, "userInfo", "notifications");
// };

//
//
//
//
//
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

// Create and save referral code to the database
export const setReferralCodeToDb = (email) => {
  let accountInfoRef = doc(db, "users", email, "userInfo", "accountInfo");
  const referralId = uuid();
  setDoc(accountInfoRef, { referralId: referralId }, { merge: true }).then(() =>
    console
      .log("Referral code set to the database")
      .catch((e) => console.log(e))
  );
};

// Create and save referral code to the database
export const getReferralCodeFromDb = async (email) => {
  let accountInfoRef = doc(db, "users", email, "userInfo", "accountInfo");
  const accountInfo = await getDoc(accountInfoRef);
  console.log(email);
  console.log(accountInfo?.data());
  return accountInfo?.data().referralId;
};

// Save payment information to the database
export const fundAccount = (MessageData, email) => {
  if (MessageData.event === "charge_confirmed") {
    setBalanceToDb(MessageData.amount, email, "inc");
    toast.success("Payment confirmed");
  } else {
    toast.error("Payment failed");
  }
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
export const getBalanceFromDb = async (email) => {
  let accountInfoRef = doc(db, "users", email, "userInfo", "accountInfo");
  const accountInfo = await getDoc(accountInfoRef);
  return accountInfo.data().balance;
};

// Submit wallet address to the database
export const saveWalletAddressToDb = async (walletAddress, action, email) => {
  let accountInfoRef = doc(db, "users", email, "userInfo", "accountInfo");
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
export const getIncomeFromDb = async (email) => {
  let accountInfoRef = doc(db, "users", email, "userInfo", "accountInfo");
  const accountInfo = await getDoc(accountInfoRef);
  let income = {
    total: accountInfo.data().totalIncome,
    daily: accountInfo.data().dailyIncome,
  };
  return income;
};

// Update user's income in the database
export const updateIncome = async (email) => {
  let allBoughtShares = await getBoughtSharesInfo(email);
  let day = 1000 * 60 * 60 * 24;
  let incomeArray = allBoughtShares.map((share) => {
    let timeDiff = Date.now() - share.date.seconds * 1000;
    let timeDiffInDays = Math.trunc(timeDiff / day);
    let dailyIncome = timeDiffInDays
      ? parseFloat((share.hourProfit * 24).toFixed(2))
      : 0;
    let totalIncome = timeDiffInDays * dailyIncome;
    let daysToBeCredited = getDaysToBeCredited(share);
    updateIncomeNotification(
      {
        days: daysToBeCredited.days,
        incomeLastCreditedTime: share.incomeLastCreditedTime,
        title: share.title,
        amount: dailyIncome,
      },
      email
    );
    updateSharesCreditedTime(email);
    return { total: totalIncome, daily: dailyIncome };
  });
  let totalIncome = incomeArray.reduce((acc, curr) => acc + curr.total, 0);
  let dailyIncome = incomeArray.reduce((acc, curr) => acc + curr.daily, 0);
  setIncomeToDb(totalIncome, dailyIncome, email);
};

// Get wallet address information from the database
export const getWalletAddressFromDb = async (email) => {
  let accountInfoRef = doc(db, "users", email, "userInfo", "accountInfo");
  const accountInfo = await getDoc(accountInfoRef);
  return accountInfo.data().walletAddress;
};

// Buy shares and save its information to the database
export const buyShares = async (info, email) => {
  let balance = await getBalanceFromDb(email);
  console.log(info);
  if (balance >= info.price) {
    setBalanceToDb(info.price, email, "dec")
      .then(() => {
        saveBoughtShareInfoToDb(info, email);
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

// Save bought shares information to the database
export const saveBoughtShareInfoToDb = async (info, email) => {
  let boughtSharesRef = doc(db, "users", email, "userInfo", "boughtShares");

  let shares = await getBoughtSharesInfo(email);
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

// Get bought shares information from the database
export const getBoughtSharesInfo = async (email) => {
  let boughtSharesRef = doc(db, "users", email, "userInfo", "boughtShares");

  let shares = await getDoc(boughtSharesRef);
  let sharesData = shares?.data()?.runningShares;
  let sortedData = sharesData
    ? sharesData.sort((a, b) => a.date.seconds - b.date.seconds)
    : [];
  return sortedData;
};

// Update income notification document in the database
export const updateIncomeNotification = async (info, email) => {
  let notificationsRef = doc(db, "users", email, "userInfo", "notifications");
  let day = 1000 * 60 * 60 * 24;
  let time = info.incomeLastCreditedTime.seconds * 1000;
  let notification = {
    title: info.title,
    time: time,
    amount: info.amount,
  };
  let count = 0;
  for (let i = 0; i < info.days; i++) {
    let incomeNotifications = await getDoc(notificationsRef);
    if (!incomeNotifications?.data()?.income?.length > 0 && count === 0) {
      setDoc(notificationsRef, { income: [notification] }, { merge: true })
        .then(() =>
          console.log("Income notification info sent to the database")
        )
        .catch((error) => console.log(error));
      time += day;
      count++;
    } else {
      updateDoc(notificationsRef, {
        income: arrayUnion(notification),
      })
        .then(() =>
          console.log("Income notification info sent to the database")
        )
        .catch((error) => console.log(error));
      time += day;
    }
  }
};

// Get income notification document from the database
export const getIncomeNotificationFromDb = async (email) => {
  let notificationsRef = doc(db, "users", email, "userInfo", "notifications");
  let notifications = await getDoc(notificationsRef);
  console.log(notifications.data());
  return notifications.data().income.sort((a, b) => b.time - a.time);
};

// Update fund notification document in the database
export const updateFundNotification = async (MessageData, email) => {
  let notificationsRef = doc(db, "users", email, "userInfo", "notifications");
  let info = {
    ...MessageData,
    status: MessageData.event === "charge_confirmed" ? "Success" : "Failed",
    timeStamp: Timestamp.fromDate(new Date()),
  };

  console.log("This function ran");
  let incomeNotifications = await getFundNotificationFromDb(email);

  if (incomeNotifications.length === 0) {
    setDoc(notificationsRef, { fund: [info] }, { merge: true })
      .then(() => console.log("Fund notification info sent to the database"))
      .catch((error) => console.log(error));
  } else {
    updateDoc(notificationsRef, { fund: arrayUnion(info) })
      .then(() => console.log("Fund notification info sent to the database"))
      .catch((error) => console.log(error));
  }
};

// Get fund notification document from the database
export const getFundNotificationFromDb = async (email) => {
  let notificationsRef = doc(db, "users", email, "userInfo", "notifications");
  let notifications = await getDoc(notificationsRef);
  let sorted = notifications
    ?.data()
    ?.fund?.sort((a, b) => b.timeStamp - a.timeStamp);
  return sorted ? sorted : [];
};

// Update all bought shares income credited time in the database
export const updateSharesCreditedTime = async (email) => {
  let boughtSharesRef = doc(db, "users", email, "userInfo", "boughtShares");

  let allBoughtShares = [...(await getBoughtSharesInfo(email))];
  let updatedShares = allBoughtShares.map((share) => {
    let daysToBeCredited = getDaysToBeCredited(share);
    console.log(new Date(daysToBeCredited.creditedTime));
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
