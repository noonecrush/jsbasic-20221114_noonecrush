function camelize(str) {
  const camelizedArr = str.split('').map((char, index) => {
    if (str[index-1] === '-') {
      return char.toUpperCase(); 
    } else {
      return char;
    };
  });
  const newArr = camelizedArr.filter(item => {
    return item !== '-'
  });
  return newArr.join('');
};
