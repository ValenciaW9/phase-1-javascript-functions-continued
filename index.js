const saturdayFunWork = function(activity = 'I want to roller skate') {
  return `This Saturday, I will ${activity}.`;
}

const wrapAdjective = function(character = '*') {
  return function(adjective) {
    return `You are ${character}${adjective}${character}!`;
  }
}
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun()); // Output: "I want to roller skate."
console.log(saturdayFunk('roller skate')); // Output: "This Saturday, I want to roller skate."

const highlight = wrapAdjective('~');
console.log(highlight('roller skate')); // Output: "I will ~roller skate~!"