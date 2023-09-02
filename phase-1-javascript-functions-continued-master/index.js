// code your solution here
function razzle() {
    console.log("You've been razzled!");
  }
  
  razzle(); //=> "You've been razzled!"
  
  function razzle(lawyer = "Billy", target = "'em") {
    console.log(`${lawyer} razzle-dazzles ${target}!`);
  }
  
  razzle(); //=> Billy razzle-dazzles 'em!
  razzle("Methuselah", "T'challah"); //=> Methuselah razzle-dazzles T'challah!
  
  function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }