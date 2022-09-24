
str = [1, 2, 3, 4, 5, 4, 3, 2, 1]
function isPlr(str) {


  if (str.length <= 1) return true;

  return (str[0] == str.slice(-1) && isPlr(str.slice(1, -1)))
}


console.log(isPlr(str))

