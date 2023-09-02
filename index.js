const mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}
const wrapAdjective = function(character = '*') {
  return function(adjective) {
    return `You are ${character}${adjective}${character}!`;