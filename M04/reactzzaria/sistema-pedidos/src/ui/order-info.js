import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import {
  IconButton as MaterialIconButton,
  List,
  ListItem as MaterialListItem,
  Typography
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { useOrder } from 'hooks'
import { singularOrPlural } from 'utils'

function OrderInfo ({ showOptions }) {
  const { order, removePizzaFromOrder } = useOrder()
  return (
    <List>
      {order.pizzas.map((pizza) => {
        const { pizzaFlavours, pizzaSize, quantity } = pizza
        const { name, slices, flavours } = pizzaSize
        return (
          <ListItem key={pizza.id}>
            <Typography>
              <b>{quantity}</b> {' '}
              {singularOrPlural(quantity, 'pizza', 'pizzas')} {' '}
              <b>{name.toUpperCase()}</b> {'- '}
              {slices} {singularOrPlural(slices, 'fatia', 'fatias')}, {' '}
              {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')}

              <br />

              {singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores')}{' '}
              <b>{pizzaFlavours.map(({ name }) => name).join(', ')}</b>
            </Typography>

            {showOptions && (
              <IconButton
                title='Remover'
                onClick={() => removePizzaFromOrder(pizza.id)}
              >
                <Delete />
              </IconButton>
            )}
          </ListItem>
        )
      })}
    </List>
  )
}

const IconButton = styled(MaterialIconButton)`
  && {
    color: darkred;
  }
`

const ListItem = styled(MaterialListItem)`
  && {
    display: flex;
    justify-content: space-between;
  }
`

OrderInfo.propTypes = {
  showOptions: t.bool
}

export default OrderInfo
