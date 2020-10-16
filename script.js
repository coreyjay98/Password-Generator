var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
var includeUppercaseElement = document.getElementById("includeUppercase");
var includeNumbersElement = document.getElementById("includeNumbers");
var includeSymbolsElement = document.getElementById("includeSymbols");
var form = document.getElementById("passwordGeneratorForm");
var passwordDisplay = document.getElementById("#password");
var cardBody = document.getElementById("card-body");
var characterSubmit = document.getElementById("characterChoice");

var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var includeUppercase = includeUppercaseElement.checked;
  var includeNumbers = includeNumbersElement.checked;
  var includeSymbols = includeSymbolsElement.checked;
  var password = generatePassword(
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  var passwordDisplay = document.querySelector("#password");
  passwordDisplay.textContent = password;
});

function generatePassword(includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);

  var passwordCharacters = [];
  for (let i = 0; i < characterSubmit.value; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join("");
}

function arrayFromLowToHigh(low, high) {
  var array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

function writePassword() {
  var password = generatePassword(
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  var passwordDisplay = document.querySelector("#password");
  passwordDisplay.textContent = password;
}
