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
import {
  formatAMPM,
  getDaysToBeCredited,
  handleError,
} from "./globalFunctions";
//
//
//
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

// Get basic information from the database
export const getBasicInfo = async (email) => {
  let userInfoRef = doc(db, "users", email, "userInfo", "basicInfo");
  let userInfo = await getDoc(userInfoRef);
  return userInfo.data();
};

// Get account information from the database
export const getAccountInfo = async (email) => {
  let userInfoRef = doc(db, "users", email, "userInfo", "accountInfo");
  let userInfo = await getDoc(userInfoRef);
  return userInfo.data();
};

// Get account information from the database
export const getRefInfo = async (code) => {
  let referralsRef = doc(db, "globalInfo", "referralCodes");
  let refCodes = await getDoc(referralsRef);
  let refCodesData = refCodes.data();
  let refEntries = refCodes.exists() ? Object.entries(refCodesData) : [];
  let referralInfo = refEntries.filter((refCode) => refCode[1] === code);
  let refInfo = referralInfo[0];
  return refInfo ? refInfo[0] : false;
};

// Create and save referral code to the database
export const setReferralCodeToDb = (email) => {
  let accountInfoRef = doc(db, "users", email, "userInfo", "accountInfo");
  let referralsGlobalRef = doc(db, "globalInfo", "referralCodes");
  const referralId = uuid();
  setDoc(
    accountInfoRef,
    { referralId: referralId, referrals: [] },
    { merge: true }
  )
    .then(() => console.log("Referral code set to the database"))
    .catch((e) => console.log(e));
  setDoc(referralsGlobalRef, { [email]: referralId }, { merge: true });
};

// Create and save referral code to the database
export const setReferredByCodeToDb = async (info, email) => {
  let referralAccountRef = doc(
    db,
    "users",
    info?.email,
    "userInfo",
    "accountInfo"
  );
  let accountInfoRef = doc(db, "users", email, "userInfo", "accountInfo");
  setDoc(
    accountInfoRef,
    { referredByInfo: info, referralIncome: 0 },
    { merge: true }
  )
    .then(() => console.log("Referred by code set to the database"))
    .catch((e) => {
      console.log(e);
      handleError(e);
    });
  let basicInfo = await getBasicInfo(email);
  let refInfo = {
    email: email,
    name: basicInfo.full_name,
    share: 0,
    commission: 0,
  };
  updateDoc(referralAccountRef, { referrals: arrayUnion(refInfo) }).then(() =>
    console.log("Added email to referral's list")
  );
};

// export const updateReferrals = async (info, email) => {
//   let accountInfoRef = doc(db, "users", email, "userInfo", "accountInfo");
//   let accountInfo = await getAccountInfo(email)
//   let refInfo = {
//     email: email,
//     name: basicInfo.full_name,
//     share: increment(info.share),
//     commission: increment((info.share)/10),
//   };
// }

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
  let count = 0;

  for (let i = 0; i < info.days; i++) {
    let notification = {
      title: info.title,
      time: Timestamp.fromDate(new Date(time + i * day)),
      amount: info.amount,
    };
    let incomeNotifications = await getDoc(notificationsRef);
    if (!incomeNotifications?.data()?.income?.length > 0 && count === 0) {
      setDoc(notificationsRef, { income: [notification] }, { merge: true })
        .then(() =>
          console.log("Income notification info sent to the database")
        )
        .catch((error) => console.log(error));
      count++;
    } else {
      updateDoc(notificationsRef, {
        income: arrayUnion(notification),
      })
        .then(() =>
          console.log("Income notification info sent to the database")
        )
        .catch((error) => console.log(error));
    }
  }
};

// Get income notification document from the database
export const getIncomeNotificationFromDb = async (email) => {
  let notificationsRef = doc(db, "users", email, "userInfo", "notifications");
  let notifications = await getDoc(notificationsRef);
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
    share.incomeLastCreditedTime = new Date(daysToBeCredited.creditedTime);
    return share;
  });

  setDoc(boughtSharesRef, { runningShares: updatedShares })
    .then(() =>
      console.log("Updated shares credited time info to the database")
    )
    .catch((error) => console.log(error));
};
