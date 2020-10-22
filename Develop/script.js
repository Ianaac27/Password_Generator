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

//Generate Pasword Function

var incorrectPrompt = true;

function generatePassword() {

//Password Length
while (incorrectPrompt){
const passwordLength = parseInt(prompt("How many characters would you like your password to contain? Pick a number between 8 and 120."));

if ((passwordLength >= 8) && (passwordLength <= 128)) {
alert("Okay thanks! Your password will be " + (passwordLength) + " characters long.");
incorrectPrompt = false;
}
}

//New list of characters
var randomArray = [];

//New password string
var password = "";

//Confirm use uppercase

var uppercase = confirm("Click OK to confirm including uppercase letters.")

if (uppercase) {
  alert("We will include uppercase letters.") && randomArray.push(upperLetters);
}
else {
  alert("We will not include uppercase letters.");
}

//Confirm use lowercase

var lowercase = confirm("Click OK to confirm including lowercase letters.")

if (lowercase) {
  alert("We will include lowercase letters.") && randomArray.push(lowerLetters);
}
else {
  alert("We will not include lowercase letters." );
}

//Confirm use numerical

var numbers = confirm("Click OK to confirm including numbers.")

if (numbers) {
  alert("We will include numbers.") && randomArray.push(numCharacters);
}
else {
  alert("We will not include numbers." );
}

//Confirm use special

var specChar = confirm("Click OK to confirm including special characters.")

if (specChar) {
  alert("We will include special characters.") && randomArray.push(specialCharacters);
}
else {
  alert("We will not include special characters." );
}

//Loop to create random password

// while( password.length < passwordLength) {

// }

for (var i = 0; i < passwordLength.length; i++) {
   var rchar = Math.floor(Math.random() * randomArray.length);
   password += randomArray.substring(rchar,rchar + 1);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);