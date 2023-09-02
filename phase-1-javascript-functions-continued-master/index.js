// code your solution here
const mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}
const wrapAdjective = function(character = '*') {
  return function(adjective) {
    return `You are ${character}${adjective}${character}!`;
  }
}
console.log(mondayWork()); // Output: "This Monday, I will go to the office."
console.log(mondayWork('work from home')); // Output: "This Monday, I will work from home."

const highlight = wrapAdjective('~');
console.log(highlight('awesome')); // Output: "You are ~awesome~!"