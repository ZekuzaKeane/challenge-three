// Assignment code here

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numberCase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCase = ["!", "@", "#", "$", "%", "^", "&", "*"]
var length = 0;
var chars = 0;
var genPass = [];
var password = "";

// Generate password

function Options() {
  if (window.confirm("Uppercase Letters?")) {
    var upperToggle = true;
    genPass = genPass.concat(upperCase);
    chars++;
  }
  if (window.confirm("Lowercase Letters?")) {
    var lowerToggle = true;
    genPass = genPass.concat(lowerCase);
    chars++;
  }
  if (window.confirm("Numbers?")) {
    var numberToggle = true;
    genPass = genPass.concat(numberCase);
    chars++;
  }
  if (window.confirm("Special Characters?")) {
    var specialToggle = true;
    genPass = genPass.concat(specialCase);
    chars++;
  }
  length = prompt("Password Length? (8-128)");

  if (length < 8 || length > 128) {
    alert("Invalid paramters, please try again.");
  }
  else if (chars === 0) {
    alert("Invalid paramters, please try again.");
  }
}

function generatePassword() {
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * genPass.length)
    password += genPass[random];
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  Options();
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
