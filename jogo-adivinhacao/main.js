const front = {
  screen: {
    attempt: document.querySelector('#view-attempt'),
    reset: document.querySelector('#view-reset'),
    msgAttempt: document.querySelector('#msg-attempt #attempts'),
  },
  btn: {
    try: document.querySelector('#btn-try'),
    reset: document.querySelector('#btn-reset')
  },
  input: {
    number: document.querySelector('#number-input')
  },
}

let back = {
  xAttempts: 1,
  randomNumber: Math.round(Math.random() * 10)
}

function toggleFrontScreen(){
  front.screen.attempt.classList.toggle('hide')
  front.screen.reset.classList.toggle('hide')
}

function handleBtnTryClick(e){
  e.preventDefault()

  if(Number(front.input.number.value) === back.randomNumber){
    
    toggleFrontScreen()

    front.screen.msgAttempt.innerText = back.xAttempts
  }

  back.xAttempts += 1
}

function handleBtnResetClick(e){
  e.preventDefault()

  toggleFrontScreen()

  front.input.number.value = ''
  back.xAttempts = 1
  back.randomNumber = Math.round(Math.random() * 10)
}

front.btn.try.addEventListener('click', handleBtnTryClick)
front.btn.reset.addEventListener('click', handleBtnResetClick)
document.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' && front.screen.attempt.classList.contains('hide')){
    handleBtnResetClick(e)
  }
})