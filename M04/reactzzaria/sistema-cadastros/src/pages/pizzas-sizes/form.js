import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import {
  Button,
  Grid,
  Typography
} from '@material-ui/core'
import { TextField } from '@material-ui/icons'

import { PIZZAS_SIZES } from 'routes'
import { useCollection } from 'hooks'

function FormRegisterSize() {
  const { add } = useCollection('pizzasSizes')
  const history = useHistory()

  const handleSubmit = useCallback( async (e) => {
    e.preventDefault()
    const { name, size, slices, flavours } = e.target.elements

    const normalizeData = {
      name: name.value,
      size: +size.value,
      slices: +slices.value,
      flavours: +flavous.value
    }

    await add(normalizeData)
    history.push(PIZZAS_SIZES)
  }, [add, history])

  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant='5'>
          Cadastrar novo tamanho
        </Typography>
      </Grid>

      <Form onSubmit={handleSubmit}>
        <TextField
          label='Nome do tamanho'
          name='name'
        />
        <TextField
          label='Diâmetro da pizza (cm)'
          name='size'
        />
        <TextField
          label='Quantidade de fatias'
          name='slices'
        />
        <TextField
          label='Quantidade de sabores'
          name='flavours'
        />
        <Grid item container justify='flex-end' spacing={2}>
          <Grid item>
            <Button
              variant='contained'
              component={Link}
              to={PIZZAS_SIZES}
            >
              Cancelar
            </Button>
          </Grid>

          <Grid item>
            <ButtonAdd variant='contained' type='submit'>
              Cadastrar
            </ButtonAdd>
          </Grid>
        </Grid>

      </Form>
    </Container>
  )
}

const Container = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  && {
    margin-bottom: 40px;
  }
`

const Form = styled(Grid).attrs({
  item: true,
  container: true,
  xs: 12,
  spacing: 2,
  component: 'form'
})``

const ButtonAdd = styled(Button)`
  && {
    background: #a9c2c9;
    color: #fff;
  }
`

export default FormRegisterSize
