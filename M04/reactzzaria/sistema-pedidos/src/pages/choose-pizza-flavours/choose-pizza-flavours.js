import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import t from 'prop-types'
import {
  CircularProgress,
  Grid,
  Card as MaterialCard,
  Typography
} from '@material-ui/core'
import { H4, HeaderContent, PizzasGrid, Divider, CardLink, Content, Footer } from 'ui'

import { singularOrPlural, toMoney } from 'utils'
import { HOME, CHOOSE_PIZZA_QUANTITY } from 'routes'

import { useCollection } from 'hooks'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}))
  const pizzasFlavours = useCollection('pizzasFlavours')

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  if (!pizzasFlavours) {
    return <Typography style={{ margin: 10, padding: 5 }}>Carregando tamanhos... <div><CircularProgress size={20} /></div></Typography>
  }

  if (pizzasFlavours.length === 0) {
    return 'Não há dados'
  }

  const { flavours, id } = location.state.pizzaSize

  // pizzaId -> checkbox alterado no momento
  const handleChangeCheckbox = (pizzaId) => (e) => {
    if (
      checkboxesChecked(checkboxes).length === flavours &&
      e.target.checked === true
    ) {
      return
    }
    setCheckboxes((checkboxes) => {
      return {
        ...checkboxes,
        [pizzaId]: e.target.checked
      }
    })
  }
  return (
    <>
      <Content>
        <HeaderContent>
          <H4 style={{ marginTop: 20 }}>
            Escolha até {flavours} {' '}
            {singularOrPlural(flavours, 'sabor:', 'sabores:')}
          </H4>
        </HeaderContent>

        <PizzasGrid>
          {pizzasFlavours.map((pizza) => (
            <Grid item key={pizza.id} xs>
              <Card checked={!!checkboxes[pizza.id]}>
                <Label>
                  <Checkbox
                    checked={!!checkboxes[pizza.id]} // cria objeto com chave id da pizza e true / false
                    onChange={handleChangeCheckbox(pizza.id)}
                  />
                  <Img src={pizza.image} alt={pizza.name} />

                  <Divider />

                  <Typography>{pizza.name}</Typography>
                  <Typography variant='h5'>
                    {toMoney(pizza.value[id])}
                  </Typography>
                </Label>
              </Card>
            </Grid>
          ))}
        </PizzasGrid>
      </Content>

      <Footer
        buttons={{
          back: {
            children: 'Alterar Tamanho'
          },
          action: {
            to: {
              pathname: CHOOSE_PIZZA_QUANTITY,
              state: {
                ...location.state,
                pizzaFlavours: getFlavoursNameAndId({ checkboxes, pizzasFlavours })
              }
            },
            children: 'Quantidade',
            disabled: checkboxesChecked(checkboxes).length === 0
          }
        }}
      />
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

function checkboxesChecked (checkboxes) {
  return Object.values(checkboxes).filter(Boolean)
}

function getFlavoursNameAndId ({ checkboxes, pizzasFlavours }) {
  return Object.entries(checkboxes)
    .filter(([, value]) => !!value)
    .map(([id]) => ({
      id,
      name: pizzasFlavours.find((flavour) => flavour.id === id).name
    }))
}

const Card = styled(MaterialCard)`
  && {
    border: 1.5px solid transparent;
    border-color: ${({ checked }) => checked ? '#0004' : ''};
  }
`

const Img = styled.img`
  width: 200px;
`

const Label = styled(CardLink).attrs({
  component: 'label'
})``

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`

export default ChoosePizzaFlavours
