
function initLanguage(){
  const lang = document.querySelectorAll(".header__language a")
  const textCardIntro = document.querySelector(".text-intro")
  const textCardIntroDonation = document.querySelector(".text-donation")
  const textCardIntroWallet = document.querySelector(".wallet")
  const textCardIntroContact = document.querySelector(".contact")
  const ptBR = document.querySelector(".header__language--pt-br")
  const en = document.querySelector(".header__language--en")


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

  let language = {
    eng: {
      textCardIntro: "Hello, gardeners of virtual plants! This website was made by a fan, with the objective of making you try your luck with sunbox and, maybe, start thinking if it's worth it to open 100 sunboxes instead of trading it for a seed.",
      textCardIntroDonation: "Also, to help with the project, leave a donation!",
      textCardIntroWallet: "Wallet: 0xec5d268C3F7E2A5205f14B32D22906e2d2FD03A6",
      textCardIntroContact:"Contact: Blade1YT#3298"
    },
    ptBR: { 
      textCardIntro: "Olá, criadores de plantas virtuais! Esse site foi feito por um fã, com o intuito de fazer vocês testarem a sorte de vocês na sunbox e, talvez, começar a pensar se vale a pena abrir 100 sunbox ao invés de trocar por uma seed.",
      textCardIntroDonation: "E para ajudar o projeto deixe uma doação!",
      textCardIntroWallet: "Carteira: 0xec5d268C3F7E2A5205f14B32D22906e2d2FD03A6",
      textCardIntroContact: "Contato: Blade1YT#3298",
    }

  }

  ptBR.classList.add("activeLang")

  function changeptBr() {
    textCardIntro.textContent = language.ptBR.textCardIntro;
    textCardIntroDonation.textContent = language.ptBR.textCardIntroDonation;
    textCardIntroWallet.textContent = language.ptBR.textCardIntroWallet;
    textCardIntroContact.textContent = language.ptBR.textCardIntroContact
  }

  function changeEN(){
    textCardIntro.textContent = language.eng.textCardIntro;
    textCardIntroDonation.textContent = language.eng.textCardIntroDonation;
    textCardIntroWallet.textContent = language.eng.textCardIntroWallet;
    textCardIntroContact.textContent = language.eng.textCardIntroContact
  }

  en.addEventListener("click", changeEN)
  ptBR.addEventListener("click", changeptBr)

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


