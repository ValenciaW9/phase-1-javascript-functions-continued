const saturdayFun = function(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const wrapAdjective = function(character = '*') {
  return function(adjective) {
    return `You are ${character}${adjective}${character}!`;
  }
}

console.log(saturdayFun()); // Output: "This Saturday, I want to roller-skate."
console.log(saturdayFun('roller skate')); // Output: "This Saturday, I want to roller skate."

const highlight = wrapAdjective('~');
console.log(highlight('roller skate')); // Output: "You are ~roller skate~!"

const mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}