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