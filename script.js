const variable = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const contentP = document.getElementById("contentP");
const subtitle = document.getElementById("subtitle");
let randomDec = Math.floor(Math.random() * 100 + 1);

let count = 0;
submitBtn.addEventListener("click", function () {
  // alert(`atsitiktinis skaičius yra ${randomDec}`);
  const userValue = Number(variable.value);
  if (!Number.isFinite(userValue) || userValue > 100 || userValue < 0) {
    contentP.textContent = `Jusų skaičius yra: ${userValue}. Įveskite skaičių didesni už nuli bet mažesnį už 100!`;
    subtitle.textContent = "";
    return;
  }
  count++;
  // alert(`paspaudimu skaicius ${count}`);
  // alert(
  //   `vartotojo reiksme ${userValue} atsitiktinis skaicius ${randomDec} paspaudimu skaicius ${count}`
  // );
  if (userValue > randomDec) {
    contentP.textContent = `Deja, Neatspėjote!`;
    subtitle.textContent = `Atsitiktinis skaicius yra mažesnis už ${userValue} spėkite dar kartą`;
  } else if (userValue < randomDec) {
    contentP.textContent = `Deja, Neatspėjote!`;
    subtitle.textContent = `Atsitiktinis skaičius yra didesnis už ${userValue} spėkite dar kartą`;
  } else {
    contentP.textContent = `Sveikinu jus atspėjote`;
    subtitle.textContent = `Jums pavyko iš ${count} karto`;
  }
});
