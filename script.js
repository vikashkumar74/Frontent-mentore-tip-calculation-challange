"use scrict";
const Totalmember = document.querySelector("#PerMemberamount");
const PerMemberTip = document.querySelector("#PerMemberTip");
const Bill = document.querySelector(".bill-input");
const btns = document.querySelectorAll(".btn");
const members = document.querySelector(".members");
const resetBtn = document.querySelector(".reset-btn");
const custominput = document.querySelector("#custom");
const ErrorTest = document.querySelector(".message");
let person = 1;
let billValue = 0;
let TipAmount = 0;
// for percentage-btn
btns.forEach(function (e) {
  e.addEventListener("click", (event) => {
    btns.forEach((tipbtn) => {
      tipbtn.classList.remove("active");
    });

    event.target.classList.add("active");
    calc();
  });
});
// reset function
const reset = function () {
  Bill.value = billValue;
  members.value = person;
  custominput.value = "";
  Totalmember.textContent = "$0.00";
  PerMemberTip.textContent = "$0.00";
  document.querySelector(".message").style.display = "none";
  members.style.border = "none";
  btns.forEach((tipbtn) => {
    tipbtn.classList.remove("active");
  });
};
// error message function
const message = function () {
  if (members.value <= 0) {
    ErrorTest.style.display = "block";
    members.style.border = "2px solid red";
    return false;
  } else {
    ErrorTest.style.display = "none";
    members.style.border = "1px solid green";
  }
};
// tips calculation
const calc = () => {
  const BillValue = Number(Bill.value);
  console.log(BillValue);
  let person = Number(members.value);
  let t = document.querySelector(".btn.active");

  if (t) {
    tipsinput = parseFloat(t.dataset.persentage);
    TipAmount = parseFloat((tipsinput / 100) * BillValue);
  } else {
    tipsinput = Number(custominput.value);
    TipAmount = parseFloat(tipsinput);
  }

  const PerTipAmount = Number(TipAmount / person);

  const TotalAmount = (TipAmount + BillValue) / person;
  PerMemberTip.innerHTML = `$${PerTipAmount.toFixed(2)}`;
  Totalmember.innerHTML = `$${TotalAmount.toFixed(2)}`;
};

Bill.addEventListener("input", function (e) {
  let evalue = e.target.value;
  Totalmember.innerHTML = ` $${evalue}`;
  calc();
});

members.addEventListener("input", calc);

resetBtn.addEventListener("click", reset);

custominput.addEventListener("input", calc);
