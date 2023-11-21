"use strict";

const orderPrice = document.querySelectorAll(".price");
const totalMoney = document.querySelector(".totalMoney");
const seeResults = document.querySelector(".results");
const promt = document.querySelector(".promt");
const h2 = document.querySelectorAll("h2");
const h3 = document.querySelectorAll("h3");
const totalOrders = document.querySelector(".TOord");
const tbody = document.querySelector("tbody");
const tr = document.querySelectorAll("tr");
const td = document.querySelectorAll("td");
const id = document.querySelectorAll(".id");
const SEor = document.querySelector(".SEor");
const totalMoneyS = document.querySelector(".totalMoneyS");

let options = ["Id", "Pic", "Location", "OrderDate", "Status", "Amount"];
let totalPrice, cnt, selectedCnt, selectedSum, infos;

let init = function () {
  totalPrice = 0;
  cnt = 0;
  selectedCnt = 0;
  selectedSum = 0;
  infos = {
    [options[0]]: "",
    [options[1]]: "",
    [options[2]]: "",
    [options[3]]: "",
    [options[4]]: "",
    [options[5]]: "",
  };
};
init();

seeResults.addEventListener("click", function () {
  promt.style.height = promt.style.height === "20em" ? "0" : "20em";
  h2[0].style.display = h2[0].style.display === "block" ? "none" : "block";
  h2[1].style.display = h2[1].style.display === "block" ? "none" : "block";
  h3[0].style.display = h3[0].style.display === "block" ? "none" : "block";
  h3[1].style.display = h3[1].style.display === "block" ? "none" : "block";

  for (let i = 0; i < orderPrice.length; i++) {
    totalPrice += Number(parseFloat(orderPrice[i].textContent).toFixed(2));
  }
  totalOrders.textContent = orderPrice.length;
  totalMoney.textContent = totalPrice.toFixed(2);
  totalPrice = 0;
});

for (let i = 1; i <= tr.length; i++) {
  tr[i].addEventListener("click", function () {
    if (id[i - 1].classList.toggle("color")) {
      selectedCnt++;
      selectedSum += Number(
        parseFloat(orderPrice[i - 1].textContent).toFixed(2)
      );
    } else {
      selectedCnt--;
      selectedSum -= parseFloat(orderPrice[i - 1].textContent).toFixed(2);
    }
    totalMoneyS.textContent = selectedSum.toFixed(2);
    SEor.textContent = selectedCnt;
  });
}
