import React, { useState, useEffect, useReducer, useRef } from 'react'
import t from 'prop-types'
import TextField from './text-field'
import {
  Grid,
  CircularProgress
} from '@material-ui/core'

function FormAddress ({ onUpdate = () => {} }) {
  const [cep, setCep] = useState('')
  const [fetchingCep, setFetchingCep] = useState(false)

  const [addressState, dispatch] = useReducer(reducer, initialState)

  const numberField = useRef()
  const addressField = useRef()

  useEffect(() => {
    onUpdate(addressState)
  }, [addressState, onUpdate])

  useEffect(() => {
    async function fetchAddress () {
      if (cep.length < 9) {
        return
      }

      setFetchingCep(true)
      const data = await fetch(`https://ws.apicep.com/cep/${cep}.json`)
      setFetchingCep(false)

      if (!data.ok) {
        dispatch({ type: 'RESET' })
        addressField.current.focus()
        return
      }

      const result = await data.json()

      if (!result.ok) {
        dispatch({
          type: 'FAIL',
          payload: {
            error: result.message
          }
        })
        return
      }
      dispatch({
        type: 'UPDATE_FULL_ADDRESS',
        payload: result
      })

      numberField.current.focus()
    }

    fetchAddress()
  }, [cep])
  // sempre que valor de cep for alterado useEffect será executado

  function handleChangeCep (e) {
    setCep(cepMask(e.target.value))
  }

  function cepMask (value) {
    return value
      .replace(/\D+/g, '') // qualquer valor não númerico substituido por string vazia
      .replace(/(\d{5})(\d)/, '$1-$2') // valor captura '-' valor captura 2
      .replace(/(-\d{3})\d+?$/, '$1') // qualquer coisa além dos 3 digitos na captura 2 será ignorado
  }

  function handleChangeField (e) {
    const { name, value } = e.target

    dispatch({
      type: 'UPDATE_FIELD',
      payload: { name, value }
    })
  }

  return (
    <Grid container spacing={1} alignItems='center'>
      <TextField
        label='CEP'
        xs={4}
        autoFocus
        value={cep}
        onChange={handleChangeCep}
        error={!!addressState.error}
      />
      <Grid item xs={8}>
        {fetchingCep && <CircularProgress size={20} />}
      </Grid>

      {[
        {
          label: 'Rua',
          xs: 9,
          name: 'address',
          inputRef: addressField
        },
        {
          label: 'Número',
          xs: 3,
          name: 'number',
          inputRef: numberField
        },
        {
          label: 'Complemento',
          xs: 12,
          name: 'complement'
        },
        {
          label: 'Cidade',
          xs: 9,
          name: 'city'
        },
        {
          label: 'Estado',
          xs: 3,
          name: 'state'
        }
      ].map((field) => (
        <TextField
          {...field}
          key={field.name}
          value={addressState[field.name]}
          onChange={handleChangeField}
          disabled={fetchingCep}
        />
      ))}
    </Grid >
  )
}

function reducer (state, action) {
  if (action.type === 'UPDATE_FULL_ADDRESS') {
    return {
      ...state,
      ...action.payload,
      error: null
    }
  }

  if (action.type === 'UPDATE_FIELD') {
    return {
      ...state,
      [action.payload.name]: action.payload.value
    }
  }

  if (action.type === 'FAIL') {
    return {
      ...initialState,
      error: action.payload.error
    }
  }

  if (action.type === 'RESET') {
    return initialState
  }

  return state
}

const initialState = {
  code: '',
  address: '',
  number: '',
  district: '',
  complement: '',
  city: '',
  state: '',
  error: null
}

FormAddress.propTypes = {
  onUpdate: t.func
}

export default FormAddress
