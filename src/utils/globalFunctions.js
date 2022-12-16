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
