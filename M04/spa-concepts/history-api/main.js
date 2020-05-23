'use strict'

var links = document.querySelectorAll('a')
var h1 = document.querySelector('h1')

links.forEach(function (link) {
  link.addEventListener('click', handleClick)
})

function handleClick (e) {
  e.preventDefault()
  var state= {}
  var title = ''
  var url = e.target.getAttribute('href')
  history.pushState(state, title, url) // previne ação padrão de navegar para outra página
  h1.textContent = url
}