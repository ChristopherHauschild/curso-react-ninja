'use strict'
window.addEventListener('load', start)

function start() {

  var links = document.querySelectorAll('a')
  var h1 = document.querySelector('h1')

  links.forEach(function (link) {
    link.addEventListener('click', handleClick)
  })

  // eventos do browser <- retornar e avançar ->
  window.onpopstate = function (e) {
    // continua modificando ao retornar e avançar
    navigation({ url: e.state.url })
  }

  function navigation (state) {
    var titles = {
      '/': 'Home',
      '/sobre': 'Sobre'
    }

    h1.textContent = titles[state.url]
  }

  function handleClick(e) {
    e.preventDefault()
    var state = {}
    var title = ''
    var url = e.target.getAttribute('href')
    var state = {
      url: url
    }
    history.pushState(state, title, url) // previne ação padrão de navegar para outra página
    navigation({ url: url })
  }
}
