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















function outer(greeting, msg = "It's a fine day to learn") {
  
  const innerFunction = function (name, lang = "Python") {
    
    return `${greeting}, ${name}! ${msg} ${lang}`; 
  };
  return innerFunction("student", "JavaScript"); 
}

console.log(outer("Hello"));


function wrapAdjective() {
    const innerFunctions = function (default = "special", end = "!!!") {
        return `You are ${wrapAdjective}`
        {
            return innerFunctions("a dedicated programmer", "!!!", )
        }
    }
    
  //Declaring a function means introducing it to the code (e.g., using function greet() {}).
//Defining a function means writing the actual code inside it.
//Function expressions (assigned to variables) are definitions but not declarations.
//A function expression is when a function is assigned to a variable. Unlike function declarations, these are not hoisted.
function myFavoriteColor() {
    return "Black and White"
}
console.log(myFavoriteColor())

/**
 * Passing an argument means providing actual values to a function’s parameters when calling the function.
 * Breakdown:
Parameter → A placeholder inside the function definition (lawyer = "Bily", target = "'em" in this case).
Argument → The actual value given when calling the function ("Methusellah", "T'challah" here).
So, passing an argument means supplying real data for the function to work with. 
 */

function razzle(lawyer = "Bily", target = "'em") {
    return `${lawyer} razzle-dazzle ${target}`
}
console.log(razzle())
console.log(razzle("Methusellah", "T'challah"))



function saturdayFun(saturdayDoActivity) {
    return `This Saturday, I want to ${saturdayDoActivity}`;
}
console.log(saturdayFun("roller-skate"))

/**
 * Define Hoisting
 * 
 * It is the ability of JS to call functions before they are declared
 * For hosting to happen, the functions must be defned using a function declaration/keyword
 */

//This is is an expression
console.log("Razzle" + " " + "dazzle!");

//This here is a function expression
//iIt returns error, since js assumes i forgot to include the function's name
function() {
  console.log("Yet more razzling");
}

//To tell Js that's not the case, itis an expression, we use grouping operator ()
(function () {
    return "Yet more razzling";
});

/**
 * Anonymous Function
 * An anonymous function is, quite simply, a function that doesn't have a name
 * We have no way of calling it out. It is only used as a callback function or assigning it to a varible as a value
 */
function() {
  console.log("Yet more razzling");
}


//Define a Function Using a Function Expression
const fn = function () {
    return "Yet more razzling"
};
console.log(fn()) 






//LABWORK
function saturdayFun(saturdayDoActivity = "roller-skate") {
  return `This Saturday, I want to ${saturdayDoActivity}!`;
}
console.log(saturdayFun("roller-skate"));

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}



/**
 * Define an IIFE: Immediately-Invoked Function Expression
 * Another way to invoke an anonymous function is by creating what's known as an immediately-invoked function expression (IIFE).
 */

//Define Function-Level Scope
/**
 *  if a function is defined inside another function, the inner function has access to all the parameters of, as well as any variables defined in, the outer function. 
 */
 function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}*/