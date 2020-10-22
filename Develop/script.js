//*CRITERIA*
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
//*CRITERIA*
//----------------------------------------------------------------------------------------------

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array lists
var passwordLength = "";

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var lower = "abcdefghijklmnopqrstuvwxyz".split("");

var num = "1234567890".split("");

var special = "!@#$%&*()/<>?~".split("");

var incorrectPrompt = true;

function generatePassword() {

//Password Length
 while (incorrectPrompt){
 passwordLength = parseInt(prompt("How many characters would you like your password to contain? Pick a number between 8 and 128."));

 if (8 <= passwordLength && passwordLength <= 128) {
 alert("Okay thanks! Your password will be " + (passwordLength) + " characters long.");
 incorrectPrompt = false;
 }
 }

//Random list of characters
var randomArray = [];

//Confirmations
var uppercase = confirm("Click OK to confirm including uppercase letters.")
var lowercase = confirm("Click OK to confirm including lowercase letters.")
var numbers = confirm("Click OK to confirm including numbers.")
var specChar = confirm("Click OK to confirm including special characters.")

if (uppercase) {
  randomArray = randomArray.concat(upper);
     alert("We will include uppercase letters.");
   }
   else {
     alert("We will not include uppercase letters.");
}

if (lowercase) {
  randomArray = randomArray.concat(lower);
     alert("We will include lowercase letters."); 
   }
   else {
     alert("We will not include lowercase letters." );
}

if (numbers) {
  randomArray = randomArray.concat(num);
     alert("We will include numbers."); 
   }
  else {
     alert("We will not include numbers." );
}

if (specChar) {
  randomArray = randomArray.concat(special);
    alert("We will include special characters."); 
  }
  else {
   alert("We will not include special characters." );
 } 

//Loop to generate a random password
var randomPassword = "";

for (var i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + [Math.floor(Math.random() * randomArray.length)];
   }

  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);