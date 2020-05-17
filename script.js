// Arrays
var special = ["!","@","#","$","%","^","&","*","(",")","-","+","_","=","{","}","[","]",";",":","~","`","'","?","/"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var lcLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ucLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var arrays = []




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var amount = prompt("How long do you want your password to be?")

    if (isNaN(amount) === true) {

      alert("You must input a number here.")
      return

    }
    else if (amount < 8) {

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

// Special characters into array?
  if (hasSpecial === true) {
    arrays.push(special)
  }
// Numbers into array?
  if (hasNumbers === true) {
    arrays.push(numbers)
  }
// lowercase letters into array?
  if (hasLcLetters === true) {
    arrays.push(lcLetters)
  }
// uppercase letters into array?
  if (hasUcLetters === true) {
    arrays.push(ucLetters)
  }

  function getRandomValue (arr) {
    //Math.random => 0.001 - 0.999
    return arr[Math.floor(Math.random() * arr.length)]
  }
  
  function generatePassword() {
    var i = ""
    while (i.length < +amount) {
      var chars = getRandomValue(arrays)
      console.log(chars)
      i += getRandomValue(chars);
      console.log(i)
    }
    arrays = []
    return i
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Copy Text Function
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





