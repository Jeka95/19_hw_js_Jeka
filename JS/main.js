let submit = document.querySelector(".submit");
submit.addEventListener("click", ValidMail,);
submit.addEventListener("click", ValidFirstName);
submit.addEventListener("click", ValidLastName);
submit.addEventListener("click", ValidPassword);
submit.addEventListener("click", ValidTel);
document.addEventListener("input", checkInput)
let input = document.querySelectorAll(".inputText");
let myMail = document.querySelector(".email");
let emailerror = document.querySelector(".emailerror");
let nameerror = document.querySelector(".nameeror");
let lastnameeror = document.querySelector(".lastnameeror");
let placehold = document.querySelectorAll(".placehold");
let firstName = document.querySelector(".firsname");
let lastName = document.querySelector(".lastname");
let password = document.querySelector(".password");
let passwerror = document.querySelector(".passwerror");
let phone = document.querySelector(".phone");
let phoneeror = document.querySelector(".phoneeror")
function checkInput() {
  for (let i = 0; i < input.length; i++) {
    if (input[i].value == "") {
      placehold[i].classList.remove("active");
    } else {
      placehold[i].classList.add("active");
    }
  }
}
function ValidMail() {
  let regmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  let valid = regmail.test(myMail.value);
  if (valid) {
    myMail.classList.add("greenok");
    emailerror.style.opacity = 0;
    myMail.classList.remove("redno");
  }
  else {
    emailerror.style.opacity = 1;
    myMail.classList.add("redno");
    myMail.classList.remove("greenok");
    checkInput();
  }
  return valid;
}
function ValidFirstName() {
  let regName = /^[a-zA-Z]{2,20}$/i;
  let valid = regName.test(firstName.value);
  if (valid) {
    firstName.classList.add("greenok");
    nameerror.style.opacity = 0;
    firstName.classList.remove("redno");
  }
  else {
    nameerror.style.opacity = 1;
    firstName.classList.add("redno");
    firstName.classList.remove("greenok");
    checkInput();
  }
}
function ValidLastName() {
  let regName = /^[a-zA-Z]{2,20}$/i;
  let valid = regName.test(lastName.value);
  if (valid) {
    lastName.classList.add("greenok");
    lastnameeror.style.opacity = 0;
    lastName.classList.remove("redno");
  }
  else {
    lastnameeror.style.opacity = 1;
    lastName.classList.add("redno");
    lastName.classList.remove("greenok");
    checkInput();
  }
}

function ValidPassword() {
  let regName = /^[a-zA-Z0-9]{8,15}$/i;
  let valid = regName.test(password.value);
  if (valid) {
    password.classList.add("greenok");
    passwerror.style.opacity = 0;
    password.classList.remove("redno");
  }
  else {
    passwerror.style.opacity = 1;
    password.classList.add("redno");
    password.classList.remove("greenok");
    checkInput();
  }
}
function ValidTel() {
  if (phone.value.length == 18) {
    phone.classList.add("greenok");
    phoneeror.style.opacity = 0;
    phone.classList.remove("redno");
  }
  else {
    phoneeror.style.opacity = 1;
    phone.classList.add("redno");
    phone.classList.remove("greenok");
    checkInput();
  }
}
console.log(phone.value.length);



window.addEventListener("DOMContentLoaded", function () {

  function mask(event) {
    let matrix = "+38(0__)-__-__-___",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    console.log("def: " + def);
    console.log("val: " + val);
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
  };
  let input = document.querySelector(".phone");
  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);

});