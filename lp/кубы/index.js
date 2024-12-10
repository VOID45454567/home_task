const windowEl = document.querySelector(".output");
const historyOutputEl = document.querySelector(".history");
const btnEl = document.getElementById("btn");
let srcArr = [
  "./assets/1.jpg",
  "./assets/2.jpg",
  "./assets/3.jpg",
  "./assets/4.jpg",
  "./assets/5.jpg",
  "./assets/6.jpg"
];
function getRandomNumbers() {
  let hand = {
    numberOne: Math.floor(Math.random() * (6 - 1) + 1),
    numberTwo: Math.floor(Math.random() * (6 - 1) + 1)
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
  return ` <div class="numberOne">
  <Img src='${srcArr[object.numberOne - 1]}'>
  </div>
        <div class="numberTwo">
        <Img src='${srcArr[object.numberTwo - 1]}'>
        </div>
        <div class="summ">Сумма равна ${object.numberOne +
          object.numberTwo}</div>`;
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
  return `<p>Рука ${index +
    1}: Числа <span>${element.numberOne}</span> и <span>${element.numberTwo}</span> Сумма равна <span>${element.numberOne +
    element.numberTwo}</span></p>`;
}
