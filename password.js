let welcome = "Welcome to the password validator tool!";
console.log(welcome);

let validatePrompt = "Please enter a password to be validated:";
console.log(validatePrompt);

//////////////
/////
//const passwordLength = 'Learningrules';

//console.log(`${passwordLength} ${passwordLength.length}`);

// if (passwordLength => 10)
//console.log("This password is valid!")
//else (passwordLength < 10)
//console.log("This password is not valid!")

////////////////

function checkPassword(inputtxt) {
  let passw = [];

  passw = /^[A-Za-z]\w{=>10}$/;
  if (inputtxt.value.match(passw)) {
    alert("The password is accepted");
    return true;
  } else {
    alert("This password is not long enough");
    return false;
  }
}

console.log(passw([Good, Characters]));




console.log(' _____  _____ ____  _____\  n'+
console.log('/__ __\/  __// ___\/__ __\\ n');
console.log('  / \  |  \  |    \  / \  \ n'+
console.log('  | |  |  /_ \___ |  | | \  n');
console.log('  \_/  \____\\____/  \_/ \' n'); 
