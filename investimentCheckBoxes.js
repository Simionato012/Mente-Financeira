const checks = document.querySelectorAll('.checkbox')

function carregarCalculadora() {
  checks.forEach(check => {
    const calculadora = document.querySelector(`.${check.value}`)
    if (!calculadora) return

    if (check.checked) {
      calculadora.classList.remove('hidden')
      return
    }

    calculadora.classList.add('hidden')
  })
}

checks.forEach(check => {
  check.onchange = carregarCalculadora
})

carregarCalculadora()