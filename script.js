const container = document.getElementById("container");
const sideBar = document.getElementById("sidebar");
const bigBox = document.getElementById("bigBox");
const variable = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const contentP = document.getElementById("contentP");
const subtitle = document.getElementById("subtitle");
const content = document.getElementById("content");
const midlImg = document.getElementById("midlImg");
const card = document.getElementById("card");
const hiding = document.getElementById("hiding");
let randomDec = Math.floor(Math.random() * 100 + 1);

let count = 0;

const winSound = new Audio("win.mp3");
winSound.preload = "auto";

submitBtn.addEventListener("click", function () {
  // alert(`atsitiktinis skaičius yra ${randomDec}`);
  //Bandziau atlikti veidu salinima su: title.removeChild(luserFace) nepavyko;

  if (submitBtn.classList.contains("resetBtn")) {
    randomDec = Math.floor(Math.random() * 100 + 1);

    count = 0;
    variable.value = "";
    contentP.textContent = "";
    subtitle.textContent = "";
    card.style.backgroundColor = "";
    if (hiding) hiding.style.display = "";

    winSound.pause();
    winSound.currentTime = 0;

    document
      .querySelectorAll(".luserFace, .winingFace")
      .forEach((el) => el.remove());
    container.style.justifyContent = "";
    container.style.alignItems = "center";

    sideBar.style.display = "inline-block";

    submitBtn.textContent = "Spėti";
    submitBtn.classList.remove("resetBtn");

    bigBox.style.flexDirection = "column";
    bigBox.style.justifyContent = "flex-start";
    bigBox.style.alignItems = "flex-start";

    card.style.display = "";
    card.style.flexDirection = "";
    card.style.justifyContent = "";
    card.style.alignItems = "";
    card.style.textAlign = "";
    card.style.marginTop = "";

    content.style.display = "";
    content.style.flexDirection = "";
    content.style.justifyContent = "";
    content.style.alignItems = "";
    content.style.textAlign = "";

    midlImg.style.display = "";
    midlImg.style.flexDirection = "";
    midlImg.style.alignItems = "";
    midlImg.style.marginLeft = "";
    midlImg.style.justifyContent = "";
    midlImg.style.textAlign = "";
    submitBtn.style.marginLeft = "0";

    const lottie = document.getElementById("winLottie");
    if (lottie) lottie.remove();

    return;
  }
  document
    .querySelectorAll(".luserFace, .winingFace")
    .forEach((el) => el.remove());

  const lottie = document.getElementById("winLottie");
  if (lottie) lottie.remove();

  const userValue = Number(variable.value);
  if (!Number.isFinite(userValue) || userValue > 100 || userValue < 1) {
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
    const luserFace = document.createElement("div");
    luserFace.className = "luserFace";
    luserFace.innerHTML = `<img id="luserFace" src= "luserface.png" alt = "luser face."/>`;
    midlImg.appendChild(luserFace);
    card.style.backgroundColor = "#aa020254";
    contentP.textContent = `Deja, Neatspėjote!`;
    // subtitle.textContent = `Atsitiktinis skaicius yra mažesnis už ${userValue} spėkite dar kartą`;
    subtitle.innerHTML = `Atsitiktinis skaičius yra <span id="mark1">mažesnis</span> už ${userValue} — spėkite dar kartą`;
  } else if (userValue < randomDec) {
    card.style.backgroundColor = "#aa020254";
    const luserFace = document.createElement("div");
    luserFace.className = "luserFace";
    luserFace.innerHTML = `<img id="luserFace" src= "luserface.png" alt = "luser face."/>`;
    midlImg.appendChild(luserFace);
    contentP.textContent = `Deja, Neatspėjote!`;
    // subtitle.textContent = `Atsitiktinis skaičius yra didesnis už ${userValue} spėkite dar kartą`;
    subtitle.innerHTML = `Atsitiktinis skaičius yra <span id="mark2">DIDESNIS</span> už ${userValue} — spėkite dar kartą`;
  } else {
    const winingFace = document.createElement("div");
    winingFace.className = "winingFace";
    winingFace.innerHTML = `<img id="winingFace" src= "winingFace.png" alt = "wining face."/>`;
    midlImg.appendChild(winingFace);

    winSound.currentTime = 0;
    winSound.play().catch((err) => {
      // jei naršyklė blokuoja autoplay – pamatysi console
      console.log("Audio play blocked:", err);
    });
    bigBox.style.justifyContent = "flex-start";
    bigBox.style.alignItems = "flex-start";

    card.style.backgroundColor = "";
    //  Mano bandymai sužaisti su stiliumi nevyke-pavyke:
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.justifyContent = "center";
    card.style.alignItems = "center";

    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.justifyContent = "center";
    content.style.alignItems = "center";
    content.style.textAlign = "center";
    // contentP.style.display = "inline-block";
    // subtitle.style.display = "inline-block";
    // content.style.justifyContent = "center";
    // content.style.alignItems = "center";
    // // content.style.paddingRight = "15%";
    // // contentP.style.alignItems = "flex-start";
    midlImg.style.display = "flex";
    midlImg.style.flexDirection = "column";
    midlImg.style.justifyContent = "center";
    midlImg.style.alignItems = "center";
    midlImg.style.textAlign = "center";
    // midlImg.style.width = "150%";
    if (hiding) hiding.style.display = "none";
    // Geras variantas sukuriant nauja atvaizdavimui dėžute panaikintas:
    container.style.justifyContent = "center";
    container.style.alignItems = "center";

    card.style.justifyContent = "center";
    card.style.alignItems = "center";
    card.style.marginTop = "10%";

    sideBar.style.display = "none";

    bigBox.style.flexDirection = "column";
    bigBox.style.justifyContent = "center";
    bigBox.style.alignItems = "center";

    contentP.textContent = `Atspėjote !`;
    // subtitle.textContent = `Jums pavyko iš  ${count} karto`;
    subtitle.innerHTML = `Jums pavyko <span id="mark3"> iš ${count} karto</span>`;
    const lottieWrap = document.createElement("div");
    lottieWrap.id = "winLottie";
    lottieWrap.innerHTML = `
      <dotlottie-player
        src="https://lottie.host/ff307f67-1d21-4ba6-be16-450839467d5a/FQA1EEsLHp.json"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px"
        loop
        autoplay
      ></dotlottie-player>
    `;
    // įdedam po subtitle (virš mygtuko)
    subtitle.insertAdjacentElement("afterend", lottieWrap);

    submitBtn.textContent = `Žaisti iš naujo?`;
    // submitBtn.style.alignItems = "center";
    // submitBtn.style.justifyContent = "center";
    // submitBtn.style.display = "block";
    submitBtn.classList.add("resetBtn");
  }
});
