const inputEl = document.getElementById("input");
const outputEl = document.querySelector(".outputEl");
const btnEl = document.getElementById("btn");
btnEl.addEventListener("click", () => {
  stroke = inputEl.value;
  let parsed = stroke.replace(/[\s{2,}]+/g, " ").split(" ");
  let filtred = parsed.filter((el) => el[0] === "#");
  outputResult(filtred);
});
function generaterandomColor() {
  const chars = "1234567890ABCDEF";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars[Math.floor(Math.random() * (chars.length - 0) + 0)];
  }
  return `#${result}`;
}
function outputResult(array) {
  outputEl.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    outputEl.insertAdjacentHTML(
      "beforeend",
      `<span style="color:${generaterandomColor()}">${array[i]}</span>`
    );
  }
}
