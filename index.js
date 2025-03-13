//LABWORK
function saturdayFun(saturdayDoActivity = "roller-skate") {
  return `This Saturday, I want to ${saturdayDoActivity}!`;
}
console.log(saturdayFun("roller-skate"));

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}









