// Global Variables
let passwordLength = 8;

//This is my database: Numbers, special characters, lowercase letters, uppercase letters
let number = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9']; //number array with numbers 0-9
//Add each array into password one at a time
let specialCharacter = ['@','%','+','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
let lowercaseLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
let uppercaseLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

// Assignment Code
let generateBtn = document.querySelector("#generate");

//This function generates password and return it to the correct password
function generatePassword() {
  let allChoices = [];

  // Ask user how long password needs to be
  let passwordLength = window.prompt('Please choose a number between 8-50');

  // Ask user if they want numbers
  let isNumbers = window.confirm(`Do you want to include numbers?`);

  // Ask user if they want Uppercase
  let isUppercase = window.confirm('Do you wnat to include uppercase letters?');

  // Ask user if they want lowercase
  let isLowercase = window.confirm(`Do you want to include lowercase letters?`);

  // Ask user if they want a special character
  let isSpecialCharacter = window.confirm(`Do you want to include special characters?`);

  password = [];
  if (isNumbers === true) {
    allChoices = allChoices.concat(number);
  }
  if (isUppercase === true) {
    allChoices = allChoices.concat(uppercaseLetter);
  }
  if (isLowercase === true) {
    allChoices = allChoices.concat(lowercaseLetter);
  }

  for (let i = 0; i < passwordLength; i++) {
    let maximum = allChoices.length - 1;
    let minimum = 0
    let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    password.push(allChoices[rnd]);
  }
}
  // Create a password using random numbers as long as the length 

// Write password to the #password input PART OF STARTER CODE!
function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
