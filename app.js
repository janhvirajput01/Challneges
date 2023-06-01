const dayIp = document.getElementById("day");
const monthIp = document.getElementById("month");
const yearIp = document.getElementById("year");
const submit = document.getElementById("submit_btn");
const dayOp = document.getElementById("dd");
const monthOp = document.getElementById("mm");
const yearOp = document.getElementById("yy");
const form = document.querySelector("form");
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function valid() {
  const inputs = document.querySelectorAll("input");
  let validate = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    console.log(parent);
    if (i.value === "") {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "This fiels is required";
      validate = false;
    } else if (monthIp.value > 12) {
      monthIp.style.borderColor = "red";
      monthIp.parentElement.querySelector("small").innerText =
        "must be a valid month";
      validate = false;
    } else {
      i.style.borderColor = "black";

      validate = true;
    }
  });
  return validate;
}
function calculate(e) {
  e.preventDefault();
  if (valid()) {
    if (dayIp.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthIp.value > month) {
      month = month + 12;
      year = year - 1;
    }
    const d = day - dayIp.value;
    const m = month - monthIp.value;
    const y = year - yearIp.value;

    dayOp.innerHTML = d;
    monthOp.innerHTML = m;
    yearOp.innerHTML = y;
  }
}
form.addEventListener("submit", calculate);
