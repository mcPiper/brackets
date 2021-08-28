function check(str, bracketsConfig) {
  console.log(str, bracketsConfig)
  let stack = []
  let bracketsDict = { }
  let andBrackets = []
  for (let i in bracketsConfig){
    bracketsDict[bracketsConfig[i][0]] = bracketsConfig[i][1];
    andBrackets.push(bracketsConfig[i][1])
  }

  for (let i=0; i<str.length; i++){
    if (stack[stack.length-1] === str[i]){
      stack.pop();
    }
    else if (bracketsDict[str[i]] ) {
      stack.push(bracketsDict[str[i]]);
    }
    else if (andBrackets.indexOf(str[i]) > -1 ) {
      return false;
    }

  }
  return !stack[stack.length-1]
}
console.log(check("([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()", [ [ '(', ')' ], [ '[', ']' ], [ '{', '}' ], [ '|', '|' ] ]))

module.exports = (check)module.exports = function check(str, bracketsConfig) {
  // your solution
}
