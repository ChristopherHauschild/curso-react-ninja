import React, { useState } from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import { Redirect, Link } from 'react-router-dom'
import {
  Input as MaterialInput,
  Button
} from '@material-ui/core'
import {
  Footer,
  Content,
  HeaderContent,
  H4
} from 'ui'
import { HOME, CHECKOUT } from 'routes'
import { useOrder } from 'hooks'

function ChoosePizzaQuantity ({ location }) {
  const [quantity, setQuantity] = useState(1)
  const { addPizzaToOrder } = useOrder()

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  function handleChange (e) {
    const { value } = e.target

    if (value >= 1) {
      setQuantity(value)
    }
  }

  function addPizza () {
    addPizzaToOrder({
      ...location.state,
      quantity
    })
  }

  return (
    <>
      <Content>
        <HeaderContent>
          <H4 style={{ marginTop: 20 }}>
            Quantas pizzas você gostaria<br />
            de pedir, com esses sabores?
          </H4>
        </HeaderContent>

        <MainContent>
          <Input value={quantity} onChange={handleChange} autoFocus />

          <ButtonAddPizza to={HOME} onClick={addPizza}>
            Adicionar e <br />
            montar outra
          </ButtonAddPizza>
        </MainContent>
      </Content>

      <Footer
        buttons={{
          back: {
            children: 'Alterar Sabores'
          },

          action: {
            to: CHECKOUT,
            onClick: addPizza,
            children: 'Finalizar Compra'
          }
        }}
      />
    </>
  )
}

ChoosePizzaQuantity.propTypes = {
  location: t.object.isRequired
}

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const Input = styled(MaterialInput).attrs({
  type: 'number'
})`
  && {
    margin-bottom: 30px;
  }

  & input {
    font-size: 90px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }
`

const ButtonAddPizza = styled(Button).attrs({
  component: Link,
  variant: 'contained'
})`
  && {
    padding: 10px 30px;
    text-align: center;
    box-shadow: 2px 2px 3px #61dafb;
  }
`

export default ChoosePizzaQuantity
