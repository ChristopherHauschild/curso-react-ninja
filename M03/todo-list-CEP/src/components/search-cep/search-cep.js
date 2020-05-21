'use strict'

import React from 'react'

import './search-cep.css'

const SearchCep = ({
  address, city, code,
  district, state, status,
  isFetching, handleSubmit
}) => (
  <div>
    <form className='form-table' onSubmit={handleSubmit}>
      <input className='input-table' type='text' name='cep' />
      <button className='btn-table' type='submit' disabled={isFetching}>
        {isFetching ? 'Buscando...' : 'Buscar'}
      </button>
    </form>

    {status === 400 && <div className='cep-not-found'>Cep não encontrado...</div>}

    {status === 200 && ( // se status OK exibe tabela
      <table>
        <thead>
          <tr>
            <td>CEP</td>
            <td>Endereço</td>
            <td>Bairro</td>
            <td>Cidade</td>
            <td>Estado</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{code}</td>
            <td>{address}</td>
            <td>{district}</td>
            <td>{city}</td>
            <td>{state}</td>
          </tr>
        </tbody>
      </table>
    )}
  </div>
)

export default SearchCep
