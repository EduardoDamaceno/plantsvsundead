/* Sun Box Openning */

function initCounter(){
  const buttonSunBox = document.querySelector(".card-sunbox__button")
  const counter = document.querySelector(".card-sunbox__counter")

  function counterSunBox(){
    counter.innerHTML = parseInt(counter.innerText) + 1
  }

  buttonSunBox.addEventListener('click', counterSunBox)
}
initCounter()

function initSweepstake(){
  const buttonSunBox = document.querySelector(".card-sunbox__button")
  const babyScore = document.querySelector(".card-baby__score")
  const crownWaterScore1 = document.querySelector(".card-crownwater__score1")
  const crownWaterScore2 = document.querySelector(".card-crownwater__score2")
  const potScore = document.querySelector(".card-pot__score")
  const mamaScore = document.querySelector(".card-mama__score")
  const seedScore = document.querySelector(".card-seed__score")

  function sweepstake(){
    const numberRandom = Math.floor((Math.random() * 100) + 1)

    if(numberRandom >= 0 && numberRandom <= 30){
      babyScore.innerHTML = parseInt(babyScore.innerText) + 1
    } else if (numberRandom >= 31 && numberRandom <= 60){
      crownWaterScore1.innerHTML = parseInt(crownWaterScore1.innerText) + 100
      crownWaterScore2.innerHTML = parseInt(crownWaterScore2.innerText) + 20
    } else if (numberRandom >= 61 && numberRandom <= 90){
      potScore.innerHTML = parseInt(potScore.innerText) + 2
    } else if (numberRandom >= 91 && numberRandom <= 99){
      mamaScore.innerHTML = parseInt(mamaScore.innerText) + 1
    } else {
      seedScore.innerHTML = parseInt(seedScore.innerText) + 1
    }
  }

  buttonSunBox.addEventListener('click', sweepstake)
}
initSweepstake()

/* Change Language */


function initLanguage() {
  let language = {
    eng: {
      cardSunBox: "A magical that harnesses energy from sun. Open it to find useful items inside and maybe a valuable surprise if you are lucky.",
      textWallet:"Wallet: 0xec5d268C3F7E2A5205f14B32D22906e2d2FD03A6"
    },
    ptBR: { 
      cardSunBox: "Uma caixa mágica com uma armadura de energia vinda do sol. Abra para achar itens úteis e talvez uma surpresa valiosa se você tiver sorte.",
      textWallet: "Carteira: 0xec5d268C3F7E2A5205f14B32D22906e2d2FD03A6"
    }
  }

  const textSunBox = document.querySelector(".card-sunbox__paragraph")
  const lang = document.querySelectorAll(".header__language a")
  const ptBR = document.querySelector(".header__language--pt-br")
  const en = document.querySelector(".header__language--en")
  const textWallet = document.querySelector(".wallet")
  

  ptBR.classList.add("activeLang")

  function changeptBr() {
    textSunBox.textContent = language.ptBR.cardSunBox;
    textWallet.textContent = language.ptBR.textWallet;
  }

  function changeEN(){
    textSunBox.textContent = language.eng.cardSunBox;
    textWallet.textContent = language.eng.textWallet;
  }

  en.addEventListener("click", changeEN)
  ptBR.addEventListener("click", changeptBr)

  /* Enable/Disable*/
  function activeLang(index){
    lang.forEach((e) => {
      e.classList.remove("activeLang")
    })
    lang[index].classList.add("activeLang")
  }

  lang.forEach((lang, index) => {
    lang.classList.remove("active")
    lang.addEventListener('click', () => {
      activeLang(index)
    })
  })
}

initLanguage()

