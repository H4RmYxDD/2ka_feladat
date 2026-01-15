let count = 0;
const counterDisplay = document.getElementById("counter-value");

function updateDisplay() {
  counterDisplay.textContent = count;
}

document.getElementById("decrement").addEventListener("click", () => {
  count -= 1;
  updateDisplay();
});

document.getElementById("increment").addEventListener("click", () => {
  count += 1;
  updateDisplay();
});

document.getElementById("decrement10").addEventListener("click", () => {
  count -= 10;
  updateDisplay();
});

document.getElementById("increment10").addEventListener("click", () => {
  count += 10;
  updateDisplay();
});

updateDisplay();
