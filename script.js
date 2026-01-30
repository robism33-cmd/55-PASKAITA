const variable = document.getElementById("userInput");
const submitBtn = document.getElementById("SubmitBtn");
const contentP = document.getElementById("contentP");
const subtitle = document.getElementById("subtitle");
let randomDec = Math.floor(Math.random() * 100 + 1);
let count = 0;
submitBtn.addEventListener("click", function () {
  const userValue = Number(variable.value);
  if (!Number.isFinite(userValue)) {
    contentP.textContent = "Įveskite skaičių!";
    subtitle.textContent = "";
    return;
  }
  count++;
  if (userValue > randomDec) {
    contentP.textContent = `Deja, Neatspėjote!`;
    subtitle.textContent = `Skaičius yra didesnis spėkite dar kartą`;
  } else if (userValue < randomDec) {
    contentP.textContent = `Deja, Neatspėjote!`;
    subtitle.textContent = `Skaičius yra mažesnis spėkite dar kartą`;
  } else contentP.textContent = `Sveikinu jus atspėjote`;
  subtitle.textContent = `Jums pavyko iš ${count} karto`;
});
