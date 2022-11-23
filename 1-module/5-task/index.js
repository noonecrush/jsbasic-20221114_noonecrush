function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  } else { 
    const slicedStr = str.slice(0, maxlength - 1);
    return slicedStr + '…';
  }
};
