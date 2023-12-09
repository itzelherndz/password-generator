// Generates a random upper case character
function randomUpperCase(){
  // String of all upper case characters
  var alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Returns a random character based on index
  return alphabet[Math.floor(Math.random()*alphabet.length)];
}

// Generates a random lower case character
function randomLowerCase(){
  // String of all lower case characters
  var alphabet="abcdefghijklmnopqrstuvwxyz";
  // Returns a random character based on index
  return alphabet[Math.floor(Math.random()*alphabet.length)];
}

// Generates a random number based on a maximum length
function randomNumber(max){
  return Math.floor(Math.random()*max);
}

// Generates a random special character 
function randomSpecial(){
  // String of special characters
  var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  // Adds the " character to the special characters string
  special = special.concat('"');
  // Returns a random character based on index
  return special[Math.floor(Math.random()*special.length)];
}

// Generates a password given certain criteria
function generatePassword(){
  
  // Object for character properties
  var character = {
    length: 8,
    upperCase: true,
    lowerCase: true,
    numbers: true,
    special: true
  };
  
  // Object for character length properties
  var length ={
    total: 0,
    upperCase: 0,
    lowerCase: 0,
    numbers: 0,
    special: 0
  };
  
  // Object for password properties
  var password = {
    upperCase: [],
    lowerCase: [],
    numbers: [],
    special: [],
    array: [],
    string:''
  };

  // Confirms the length for passowrd that meets criteria
  character.length = prompt('Enter password length.\nPassword length must be between 8-128.');
  while (8 > character.length || 128 < character.length){
    character.length = prompt('Invalid entry.\n'+'Enter password length.\nPassword length must be between 8-128.');
  }

  // Confirms which character types to include in password meeting the criteria
  do{
    alert("Make sure to pick at least one character type for your password.");
    character.upperCase = confirm('Do you want upper case characters in your password?\nPress OK for yes or Cancel for no.');
    character.lowerCase = confirm('Do you want lower case characters in your password?\nPress OK for yes or Cancel for no.');
    character.numbers = confirm('Do you want numbers in your password?\nPress OK for yes or Cancel for no.');
    character.special = confirm('Do you want special characters in your password?\nPress OK for yes or Cancel for no.');
  } while (character.upperCase == false && character.lowerCase == false && character.numbers == false && character.special == false);

  // Generates a random length for each passowrd array if the character type is selected and the total length matches the given length by user
  do{
    if(character.upperCase){
      length.upperCase = randomNumber(character.length*0.5) + 1;
    }
    if(character.lowerCase){
      length.lowerCase = randomNumber(character.length*0.5) + 1;
    }
    if (character.numbers){
      length.numbers = randomNumber(character.length*0.5) + 1;
    }
    if (character.special){
      length.special = randomNumber(character.length*0.5) + 1;
    }

    length.total=length.upperCase+length.lowerCase+length.numbers+length.special;

  } while (length.total<character.length || length.total>character.length);


  // Generates random upper case characters and stores them in the password array
  for (var w=0; w<length.upperCase; w++){
    password.upperCase[w] = randomUpperCase();
    password.array = password.array.concat(password.upperCase[w]);
  }

  // Generates random lower case characters and stores them in the passowrd array
  for (var x=0; x<length.lowerCase; x++){
    password.lowerCase[x] = randomLowerCase();
    password.array = password.array.concat(password.lowerCase[x]);
  }

  // Generates random numbers and stores them in the password array
  for (var y=0; y<length.numbers; y++){
    password.numbers[y] = randomNumber(10);
    password.array = password.array.concat(password.numbers[y]);
  }

  // Generates random special characters and stores them in the password array
  for (var z=0; z<length.special; z++){
    password.special[z] = randomSpecial();
    password.array = password.array.concat(password.special[z]);
  }

  // Sorts password array randomly
  password.array.sort(function(){
    return 0.5 - Math.random();
  });  

  // Joins array elements in a string
  password.string = password.array.join('');

  // Returns password string
  return password.string;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


