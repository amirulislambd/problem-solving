function checkPassword(password) {
  let hasUpperCase = false;
  let hasNumber = false;
  let hasSpace = password.includes(" ");
  let reasons = [];
  let length = password.length;
  for (let i = 0; i < length; i++) {
    let character = password[i];
    if (character >= "0" && character <= "9") {
      hasNumber = true;
    }
    if (character >= "A" && character <= "Z") {
      hasUpperCase = true;
    }
  }

  if (!hasNumber) {
    reasons.push("Missing Number");
  }
  if (!hasUpperCase) {
    reasons.push("Missing UpperCase");
  }
  if (hasSpace) {
    reasons.push("space found!!!");
  }
   
  let isValid = reasons.length==0


  return {
    valid: isValid,
    reasons,
  };
}
const password = checkPassword("helloWorld ");
console.log(password);
