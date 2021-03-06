'use strict'

const { spawn } = require('child_process')
const pkg = require('../package.json')

const dependencies = Object.keys(pkg.dependencies)
const devDependencies = Object.keys(pkg.devDependencies)

const add = (args) => {
  // spawm -> (comando, array com restante dos params, saída dos params)
  return spawn('yarn', ['add'].concat(args), { stdio: 'inherit' })
  // retorna uma string
}

const addDev = (args) => {
  return add(['--dev'].concat(args))
}

add(dependencies).on('close', () => {
  addDev(devDependencies.concat(
    'react-hot-loader@3.0.0-beta.6',
    'extract-text-webpack-plugin@beta'
  ))
  // code -> retorna 0 ou 1
  .on('close', (code) => process.exit(code))
})
