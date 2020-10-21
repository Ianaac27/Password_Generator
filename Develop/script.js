//*PSEUDOCODE*
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
//*PSEUDOCODE
//----------------------------------------------------------------------------------------------

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Array lists
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperLetters = upper.split("");

var lower = "abcdefghijklmnopqrstuvwxyz";
var lowerLetters = lower.split("");

var num = "1234567890";
var numCharacters = num.split("");

var special = "!@#$%&*()/\+-=_<>?~";
var specialCharacters = special.split("");

console.log(upperLetters)
console.log(lowerLetters)
console.log(numCharacters)
console.log(specialCharacters)

function generatePassword() {

//Password Length
const passwordLength = prompt("How many characters would you like your password to contain?");


//Confirm use uppercase

const uppercase = confirm("Click OK to confirm including uppercase letters.")

//Confirm use lowercase

const lowercase = confirm("Click OK to confirm including lowercase letters.")

//Confirm use numerical

const numbers = confirm("Click OK to confirm including numbers.")

//Confirm use special

const specChar = confirm("Click OK to confirm including special characters.")

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// var num1 = 10;
// var length = 
// var str = 
// var n = str.length;
// console.log(n);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);