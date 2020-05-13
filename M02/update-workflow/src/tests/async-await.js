'use strict'

const fs = require('fs') 
const path = require('path')

const readFile = (filePath, charset) => new Promise((resolve, reject) => {
  fs.readFile(filePath, charset, (err, result) => {
    if (err) return reject(err)
    resolve(result)
  })
})

// readFile(path.join(__dirname, '../..', 'package.json'), 'utf-8')
//   .then((result) => JSON.parse(result).dependencies)
//   .then((dependencies) => console.log(dependencies))
//   .catch((error) => console.log('ERROR:', error))


// ================== with async / await

const read = async () => {
    try{
      // await -> enquanto Promise não é executada const result não recebe valores
      const result = await readFile(path.join(__dirname, '../..', 'package.json'), 'utf-8')
      const dependencies = JSON.parse(result).dependencies
      console.log(result)
      console.log(dependencies)
    } catch (error) {
      console.log('ERROR:', error)
    }
}

read()