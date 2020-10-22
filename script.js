// Assignment Code
var generateBtn = document.querySelector("#generate");
const upperCase = $("#upperCase");
const numbers = $("#numbers");
const specialChar = $("#specialChar");
const characterSubmit = $("#characterChoice");
const refreshButton = document.querySelector(".refreshBtn");

var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "'",
  "^ ",
  "|",
  "}",
  "~",
];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var finalPassword = [];

var passwordOutput = [];
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  finalPassword = lowerCaseLetters;
  if (upperCase.prop("checked")) {
    finalPassword = finalPassword.concat(upperCaseLetters);
  }
  if (numbers.prop("checked")) {
    finalPassword = finalPassword.concat(numbersArray);
  }
  if (specialChar.prop("checked")) {
    finalPassword = finalPassword.concat(specialCharacters);
  }
  for (let i = 0; i < characterSubmit.val(); i++) {
    passwordOutput.push(
      finalPassword[Math.floor(Math.random() * finalPassword.length)]
    );
  }
  var passwordText = $("#password");
  passwordText.text(passwordOutput.join(""));
  generateBtn.classList.add("hide");
}

refreshButton.addEventListener("click", pageRefresh);

function pageRefresh() {
  location.reload();
}
