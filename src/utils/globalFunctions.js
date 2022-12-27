import { toast } from "react-hot-toast";

export const mergeProductsInfo = (primaryData, secondaryData) => {
  let merged = [];
  primaryData.forEach((data1, index) => {
    secondaryData.forEach((data2) => {
      if (data1.title === data2.title) merged[index] = { ...data1, ...data2 };
    });
  });
  return merged;
};

export const formatAMPM = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

export const formatDayMonthYear = (date) => {
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let merged = `${day}-${month + 1}-${year}`;
  return merged;
};

export const getDaysToBeCredited = (share) => {
  let day = 1000 * 60 * 60 * 24;
  let currTime = Date.now();
  let lastCreditedTime = share.incomeLastCreditedTime.seconds * 1000;
  let timeDiff = currTime - lastCreditedTime;
  let timeDiffInDays = Math.floor(timeDiff / day);
  let creditedTime = Date.now() - (timeDiff % day);
  return {
    days: timeDiffInDays,
    creditedTime: creditedTime,
  };
};

export const tryCatch = (fun) => {
  try {
    fun();
  } catch (e) {
    // if (
    //   e ===
    //   "FirebaseError: Failed to get document because the client is offline."
    // ) {
    toast.error("Please check your internet connection");
    // }
  }
};

export const handleError = (e) => {
  if (e.toString().includes("client is offline"))
    toast.error("Please check your internet  connection");
};
