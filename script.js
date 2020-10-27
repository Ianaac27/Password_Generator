// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array lists
var passwordLength = "";
var incorrectPrompt = true;

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var num = "1234567890".split("");
var special = "!@#$%&*()/<>?~".split("");

function generatePassword() {

//Password Length
 while (incorrectPrompt){
 passwordLength = parseInt(prompt("How many characters would you like your password to contain? Pick a number between 8 and 128."));

 if (8 <= passwordLength && passwordLength <= 128) {
 alert("Okay thanks! Your password will be " + (passwordLength) + " characters long.");
 incorrectPrompt = false;
 }
 }

//Chosen list of characters
var chosenArray = [];

//Confirmations
var uppercase = confirm("Click OK to confirm including uppercase letters.")
var lowercase = confirm("Click OK to confirm including lowercase letters.")
var numbers = confirm("Click OK to confirm including numbers.")
var specChar = confirm("Click OK to confirm including special characters.")

if (uppercase) {
  chosenArray.push(upper);
     alert("We will include uppercase letters.");     
   }
   else {
     alert("We will not include uppercase letters.");
}
console.log(chosenArray);

if (lowercase) {
  chosenArray.push(lower);
     alert("We will include lowercase letters."); 
   }
   else {
     alert("We will not include lowercase letters." );
}
console.log(chosenArray);

if (numbers) {
  chosenArray.push(num);
     alert("We will include numbers."); 
   }
  else {
     alert("We will not include numbers." );
}
console.log(chosenArray);

if (specChar) {
  chosenArray.push(special);
    alert("We will include special characters."); 
  }
  else {
    alert("We will not include special characters." );
 } 
console.log(chosenArray);

//Check for guarenteed characters
var charCheck= [];

//Loop to generate a random password
var randomNum = "";
var randomPassword = [];

for (var i = 0; i < passwordLength; i++) {

  charCheck = chosenArray[i % chosenArray.length];
  randomNum = Math.floor(Math.random() * charCheck.length);
  randomPassword[i] = charCheck[randomNum];

  console.log(randomPassword);
}

  return randomPassword.join(""); 

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);