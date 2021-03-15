module.exports = function check(str, bracketsConfig) {
  
  let bracketsOpen = [];
  let bracketsClose = [];
  let stack = [];

  for (let j = 0; j < bracketsConfig.length; j++){
    bracketsOpen [j] = bracketsConfig[j][0];
    bracketsClose [j] = bracketsConfig[j][1];
  }

  for(let i = 0; i < str.length; i++){
    if (bracketsOpen.includes(str[i]) && !bracketsClose.includes(str[i]) || bracketsOpen.includes(str[i]) && bracketsClose.includes(str[i]) && stack[stack.length-1] !== str[i])  {
      stack.push(str[i])
    } else {
        if (bracketsOpen.indexOf(stack[stack.length-1]) === bracketsClose.indexOf(str[i])) {
          stack.pop();
        } else {return false}
    }
  }
  
  return stack.length === 0;
}

