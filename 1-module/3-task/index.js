function ucFirst(str) {
  if (str === '') {
    return str;
  };
  const firstChar = str[0].toUpperCase();
  const slicedString = str.slice(1);
  const res = firstChar + slicedString;
  return res;
};