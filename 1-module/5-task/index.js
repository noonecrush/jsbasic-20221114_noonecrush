function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  } else { 
    return slicedStr = str.slice(0, maxlength - 1) + '…';
  }
};
