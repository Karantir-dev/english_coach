const sentence = document.querySelector('.sentence')
const btn = document.querySelector('.btn-next')
const allert = document.querySelector('.allert')
const content = [
  'Когда ты видел его?',
  'Мне нравится кодить на javascript',
  'Я буду работать в большой компании',
  'Я раньше пробегал 5км',
  'Где ты учился?',
  'Я справлюсь с этим',
  'У вас есть менторинг?',
  'Я хочу добиться успеха',
  'Я найду хорошую работу',
  'Я умею плавать',
  'Я сделал домашнюю работу',
  'Я отредактирую моё резюме',
  'Я не куплю эту куртку',
  'Я не пойду на этот фильм',
  'Я не помогу тебе',
  'Мы с тобой знакомы?',
  'Мы не говорили об этом',
  'Они не ходили в спортзал',
  'Ей нравится он',
  'Она любит слушать музыку',
  'Мы решили нашу проблему',
  'Ты уверен в этом?',
  'Ты починил свой смартфон?',
  'Мы работали в магазине',
  'Он не пробежит больше 10км',
  'Я трудоустроился в ту компанию',
  'Вы были вчера на вечеринке?',
  'С какими проектами вы работаете?',
  'Я уверен в своих знаниях',
  'Я развиваюсь в этой сфере постоянно',
  'Ты знаешь как он относиться к ней?',
  'Я хочу чтобы мы попали в топ 10',
  'Такого нет больше нигде',
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
