export const mergeProductsInfo = (primaryData, secondaryData) => {
  let merged = [];
  primaryData.forEach((data1, index) => {
    secondaryData.forEach((data2) => {
      if (data1.title === data2.title) merged[index] = { ...data1, ...data2 };
    });
  });
  return merged;
};
