function getMinMax(str) {
  let arr = str.split(' ');
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    const parsedNumber = Number(arr[i]);
    if (!isNaN(parsedNumber)) {
      resultArr.push(parsedNumber);
    };
  };
  return {
    min: Math.min(...resultArr),
    max: Math.max(...resultArr),
  };
};
