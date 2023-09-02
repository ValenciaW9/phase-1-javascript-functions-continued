// code your solution here
const mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}
const wrapAdjective = function(character = '*') {
  return function(adjective) {
    return `You are ${character}${adjective}${character}!`;
  }
}console.log(saturdayFun("go hiking"));
// Output: "This Saturday, I want to go hiking!"


const highlight = wrapAdjective('~');
console.log(highlight('awesome')); // Output: "You are ~awesome~!"