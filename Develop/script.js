//Password generator
// Global Variables

//This is my database: Numbers, special characters, lowercase letters, uppercase letters
let number = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9']; //number array with numbers 0-9
let specialCharacter = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
let lowercaseLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
let uppercaseLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
let passwordLength = 8;
let password = [];

// Assignment Code
let generateBtn = document.querySelector("#generate");

//This function generates password and return it to the correct password
function generatePassword() {
  password = [];
  for(let i=0;i < passwordLength + 1; i++) {
    let maximum = number.length -1;
    let minimum = 0
    let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    password.push(number[rnd]);
    console.log(rnd)
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
