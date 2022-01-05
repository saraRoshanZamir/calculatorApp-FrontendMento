const resultbox = document.querySelector(".resultbox");
const all = document.querySelector(".all");
const buttonBox = document.querySelector(".buttonBox");
const del = document.querySelector(".del");
const bluebtn = document.querySelector(".bluebtn");
const redbtn = document.querySelector(".redbtn");
var checkbox = document.querySelector(".che");
const opers = document.querySelectorAll(".oper");
const attributions = document.querySelectorAll(".attributionco");
const attributionas = document.querySelectorAll(".attributionco a");

// changing  theme
function darkmode() {
  resultbox.classList.toggle("resultboxLight");
  resultbox.classList.toggle("resultboxDark");
  document.body.classList.toggle("allLight");
  document.body.classList.toggle("allDark");
  buttonBox.classList.toggle("buttonBoxLight");
  buttonBox.classList.toggle("buttonBoxDark");
  bluebtn.classList.toggle("bluebtnLight");
  bluebtn.classList.toggle("bluebtnDark");
  redbtn.classList.toggle("redbtnLight");
  redbtn.classList.toggle("redbtnDark");
  del.classList.toggle("bluebtnLight");
  del.classList.toggle("bluebtnDark");
  attributions.forEach(function (attribution) {
    attribution.classList.toggle("attributionLight");
  });
  attributionas.forEach(function (attributiona) {
    attributiona.classList.toggle("attributionLight");
  });
}
let num1 = "";
let calc = "";
btn1.addEventListener("click", function () {
  resultbox.value += 1;
});
btn2.addEventListener("click", function () {
  resultbox.value += 2;
});
btn3.addEventListener("click", function () {
  resultbox.value += 3;
});
btn4.addEventListener("click", function () {
  resultbox.value += 4;
});
btn5.addEventListener("click", function () {
  resultbox.value += 5;
});
btn6.addEventListener("click", function () {
  resultbox.value += 6;
});
btn7.addEventListener("click", function () {
  resultbox.value += 7;
});
btn8.addEventListener("click", function () {
  resultbox.value += 8;
});
btn9.addEventListener("click", function () {
  resultbox.value += 9;
});
btn0.addEventListener("click", function () {
  resultbox.value += 0;
});

btndot.addEventListener("click", function () {
  resultbox.value += ".";
});

btnplus.addEventListener("click", function () {
  calc = "+";
});
btnmult.addEventListener("click", function () {
  calc = "*";
});
btndiv.addEventListener("click", function () {
  calc = "/";
});
btnsub.addEventListener("click", function () {
  calc = "-";
});
del.addEventListener("click", function () {
  resultbox.value = Number(resultbox.value.slice(0, -1));
});

opers.forEach(function (oper) {
  oper.addEventListener("click", (e) => {
    num1 = Number(resultbox.value);
    resultbox.value = "";
  });
});
btnsqu.addEventListener("click", function () {
  if (calc == "+") {
    console.log("+");
    resultbox.value = Number(num1) + Number(resultbox.value);
  } else if (calc == "-") {
    console.log("-");
    resultbox.value = Number(num1) - Number(resultbox.value);
  } else if (calc == "*") {
    console.log("*");
    resultbox.value = Number(num1) * Number(resultbox.value);
  } else if (calc == "/") {
    console.log("/");
    resultbox.value = Number(num1) / Number(resultbox.value);
  }
});

btnreset.addEventListener("click", function () {
  resultbox.value = "";
});
