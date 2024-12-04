const windowEl = document.querySelector(".output");
const historyOutputEl = document.querySelector(".history");
const btnEl = document.getElementById("btn");
function getRandomNumbers() {
  let hand = {
    numberOne: Math.floor(Math.random() * (6 - 1) + 1),
    numberTwo: Math.floor(Math.random() * (6 - 1) + 1),
  };
  return hand;
}
let counterOfHands = 0;
let historyArr = [];
btnEl.addEventListener("click", () => {
  historyArr.push(getRandomNumbers());
  // console.log(historyArr);
  renderResults();
  renderHistory(historyArr);
});
function renderResults() {
  windowEl.innerHTML = "";
  windowEl.insertAdjacentHTML(
    "beforeend",
    getResultWindowTemplate(historyArr[counterOfHands])
  );
  counterOfHands++;
}
function getResultWindowTemplate(object) {
  return ` <div class="numberOne">Число 1 = <span>${
    object.numberOne
  }</span></div>
        <div class="numberTwo">Число 2 = <span>${object.numberTwo}</span></div>
        <div class="summ">Сумма равна ${
          object.numberOne + object.numberTwo
        }</div>`;
}
function renderHistory(arrData) {
  historyOutputEl.innerHTML = "";
  for (let i = 0; i < arrData.length; i++) {
    historyOutputEl.insertAdjacentHTML(
      "beforeend",
      getHistoryElTemplate(arrData[i], i)
    );
  }
}
function getHistoryElTemplate(element, index) {
  return `<p>Рука ${index + 1}: Числа <span>${
    element.numberOne
  }</span> и <span>${element.numberTwo}</span> Сумма равна <span>${
    element.numberOne + element.numberTwo
  }</span></p>`;
}
