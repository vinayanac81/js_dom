let first_name_inp = document.getElementById("f_name");
let last_name_inp = document.getElementById("l_name");
let alertSentence = document.getElementById("alert");
let emailAddress = document.getElementById("email");
let mobileNumber = document.getElementById("mobile");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let btn = document.getElementById("btn");
// onfocus
function pressed() {
  alertSentence.innerHTML = "";
  alertSentence.style.backgroundColor = "";
}
function submit() {
  if (first_name_inp.value === "") {
    alertSentence.innerHTML = "First name is required";
    alertSentence.style.backgroundColor = "red";
    return;
  } else if (last_name_inp.value === "") {
    alertSentence.innerHTML = "Last name is required";
    alertSentence.style.backgroundColor = "red";
    return;
  } else if (emailAddress.value === "") {
    alertSentence.innerHTML = "Email address is required";
    alertSentence.style.backgroundColor = "red";
    return;
  } else if (mobileNumber.value === "") {
    alertSentence.innerHTML = "Mobile number is required";
    alertSentence.style.backgroundColor = "red";
    return;
  } else if (password.value === "") {
    alertSentence.innerHTML = "Password is required";
    alertSentence.style.backgroundColor = "red";
    return;
  } else if (confirmPassword.value === "") {
    alertSentence.innerHTML = "Confirm Password is required";
    alertSentence.style.backgroundColor = "red";
    return;
  } else {
    if (password.value != confirmPassword.value) {
      alertSentence.innerHTML = "Password does't match";
      alertSentence.style.backgroundColor = "red";
      return;
    } else {
      alertSentence.innerHTML = "";
      alertSentence.style.backgroundColor = "";
      alert("Signup sucssfully");
      return;
    }
  }
}