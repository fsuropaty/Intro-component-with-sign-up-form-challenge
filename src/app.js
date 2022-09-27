const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const pswrd = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  formValidation();
});

function formValidation() {
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const pswrdValue = pswrd.value.trim();

  if (fnameValue === "") {
    isInvalid(fname, "First Name cannot be empty!");
  } else {
    isValid(fname);
  }
  if (lnameValue === "") {
    isInvalid(lname, "Last Name cannot be empty!");
  } else {
    isValid(lname);
  }
  if (emailValue === "") {
    isInvalid(email, "Email cannot be empty!");
  } else if (!isEmail(emailValue)) {
    isInvalid(email, "Looks like this is not an email");
  } else {
    isValid(email);
  }
  if (pswrdValue === "") {
    isInvalid(pswrd, "Password cannot be empty!");
  } else {
    isValid(pswrd);
  }
}

function isInvalid(input, message) {
  const formControl = input.parentElement;
  const error = formControl.querySelector("p");
  const icon = formControl.querySelector("img");

  input.placeholder = "";
  error.className = "error";
  icon.className = "error-icon";
  input.classList.add("error-field");
  error.innerText = message;
}

function isValid(input) {
  const formControl = input.parentElement;
  const error = formControl.querySelector("p");
  input.classList.remove("error-field");
  error.className = "hidden";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
