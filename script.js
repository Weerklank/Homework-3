// Arrays
var special = ["!","@","#","$","%","^","&","*","(",")","-","+","_","=","{","}","[","]",";",":","~","`","'","?","/"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var lcLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ucLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var amount = prompt("How long do you want your password to be?")

    if (isNaN(amount) === true) {

      alert("You must input a number here.")
      return

    }
    else if (amount < 8){

      alert("8 or more characters is required to generate a paswword.")
      return

    }
    else if (amount > 128) {

      alert("I'm sorry, but you have exceeded the cap amount of 128.")
      return

    }

  var hasSpecial = confirm("Would you like special characters in your password?")

  var hasNumbers = confirm("Would you like numbers in your password?")

  var hasLcLetters = confirm("Would you like lowercase letters in your password?")

  var hasUcLetters = confirm("Would you like uppercase letters in your password?")

  if (hasLcLetters === false && hasNumbers === false && hasUcLetters === false && hasSpecial === false) {

    alert("You must have something in your password, try again.")
    return

  }

  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
