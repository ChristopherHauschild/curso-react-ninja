'use strict'

// Promise -> recebe por padrão (resolve, reject) e uma funcão
const promise = new Promise((resolve, reject) => {
  reject('rejeitada')
})

promise
  .then((result) => console.log(result)) // .then() -> executa quando Promise for resolvida
  .catch((error) => console.log('ERROR:', error)) // .catch() -> executa quando Promise for rejeitada

// ======================================

const fs = require('fs') // fs -> leitura de arquivos
const path = require('path')

const readFile = (filePath, charset) => new Promise((resolve, reject) => {
  // fs.readFile(params) -> caminho absoluto | charset | callback
  fs.readFile(filePath, charset, (err, result) => {
    if (err) return reject(err)
    resolve(result)
  })
})

readFile(path.join(__dirname, '../..', 'package.json'), 'utf-8')
  .then((result) => JSON.parse(result).dependencies)
  .then((dependencies) => console.log(dependencies)) // .then recebe paramêtros do anterior
  .catch((error) => console.log('ERROR:', error))

// .then() encadeado
