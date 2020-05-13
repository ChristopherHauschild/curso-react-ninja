'use strict'

// === (props) \/ props.total, props.activePage
const centerRule = ({ total, activePage }) => (
  activePage - 1 <= 0
    ? 1 : activePage === total
      ? activePage - 2 : activePage - 1

  // if(activePage <= 0) {
  //   return activePage = 1
  // }

  // else if(activePage === total) {
  //   return activePage -= 2
  // }

  // return activePage -= 1
)

const isNumber = (value) => typeof value === 'number'

const pagination = ({ total = 1, activePage = 1 } = {}) => {
  if (!isNumber(total)) {
    throw new TypeError('total should be a number')
  }

  if (!isNumber(activePage)) {
    throw new TypeError('activePage should be a number')
  }

  if (total <= 5) {
    // return Array.apply(null, { length: total }).map((_, i) => i + 1)
    // 2° param de Array.from === map()
    return Array.from({ length: total }, (_, i) => i + 1) // index + 1
  }

  const visiblePages = 3
  let pages = [
    1,
    // mostra 3 páginas ativas, baseado na aP | quebra valores dentro do array
    // === [1, *2, 3, 4*, 5, 6]
    // itera 3 vezes sobre aP - 1 | se aP 6, inicia em 5 somando 3 vezes
    ...Array.from({ length: visiblePages }, (_, i) => i + centerRule({ total, activePage })),
    total
  ]
  // verifica se página iterada está com indíce correto | !duplicação
  pages = pages.filter((page, index, array) => array.indexOf(page) === index)

  let firstPage = pages[0]
  let secondPage = pages[1]

  if (secondPage === (firstPage + 2)) {
    // [1, 3, 4, 5, 6] add 2 entre 1 e 3
    pages = [
      firstPage,
      firstPage + 1,
      ...pages.slice(1)
    ]
  }

  let penultimatePage = pages[pages.length - 2]
  let lastPage = pages[pages.length - 1]

  if (penultimatePage === (lastPage - 2)) {
    // [1, 2, 3, 4, 6] -> add 5 entre 4 e 6
    pages = [
      ...pages.slice(0, -1),
      lastPage - 1,
      lastPage
    ]
  }

  firstPage = pages[0]
  secondPage = pages[1]

  if (secondPage > (firstPage + 2)) {
    // [1, 4, 5, 6] add '...' entre 1 e 4
    pages = [
      firstPage,
      '...',
      ...pages.slice(1)
    ]
  }

  penultimatePage = pages[pages.length - 2]
  lastPage = pages[pages.length - 1]

  if (penultimatePage < (lastPage - 2)) {
    // [1, 2, 3, 4, 7] -> add ... entre 4 e 7
    pages = [
      ...pages.slice(0, -1),
      '...',
      lastPage
    ]
  }

  return pages
}

export default pagination
