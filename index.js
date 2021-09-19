// Когда ты видел его
const sentence = document.querySelector('.sentence')
const btn = document.querySelector('.btn-next')
const allert = document.querySelector('.allert')
const content = [
  'Когда ты видел его?',
  'Мне нравится кодить на javascript',
  'Я буду работать в большой компании',
  'Я раньше пробегал 5км',
  'Где ты учился?',
  // 'У вас есть менторинг?',
  // 'Я справлюсь с этим',
  // 'Ты был в Эгипте?',
  // 'Я планирую полететь на Мальдивы',
  // 'Я видел коралы в море',
  'Я хочу добиться успеха',
  'Я найду харошую работу',
]

if (!localStorage.getItem('currentContent')) {
  localStorage.setItem('currentContent', JSON.stringify(content))
}

sentence.textContent = localStorage.getItem('currentSentence') || content[0]

function changeSentence() {
  const currentContent = JSON.parse(localStorage.getItem('currentContent'))
  const randomIdx = Math.floor(Math.random() * (currentContent.length - 1))
  localStorage.setItem('currentSentence', currentContent[randomIdx])

  sentence.textContent = currentContent[randomIdx]

  if (currentContent.length === 1) {
    allert.style.display = 'block'

    localStorage.setItem('currentContent', JSON.stringify(content))
  } else {
    allert.style.display = 'none'
    localStorage.setItem(
      'currentContent',
      JSON.stringify(currentContent.filter((_, idx) => idx !== randomIdx)),
    )
  }
}

btn.addEventListener('click', changeSentence)
