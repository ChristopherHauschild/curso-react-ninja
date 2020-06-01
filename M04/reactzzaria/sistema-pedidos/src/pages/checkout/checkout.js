import React from 'react'
import styled from 'styled-components'
import {
  Button as MaterialButton,
  Grid,
  Paper
} from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom'
import { Content, OrderInfo, Title as UiTitle } from 'ui'

import FooterCheckout from './footer-checkout'
import FormAddress from './form-address'
import PhoneField from './phone-field'

import { CHECKOUT_CONFIRMATION, HOME } from 'routes'
import { useOrder } from 'hooks'

function Checkout () {
  const { order, addPhone, addAddress } = useOrder()

  if (!order.pizzas.length) {
    return <Redirect to={HOME} />
  }

  return (
    <>
      <Content>
        <Grid container spacing={4}>

          <Grid item md={6} xs={12}>
            <Title> Qual o endereço para entrega?</Title>
            <PaperContainer>
              <FormAddress onUpdate={addAddress} />
            </PaperContainer>

            <Title> Qual o seu telefone?</Title>
            <PaperContainer>
              <PhoneField onUpdate={addPhone} />
            </PaperContainer>
          </Grid>

          <Grid container item md={6} xs={12} direction='column'>
            <Title>Informações do seu pedido</Title>
            <PaperContainer>
              <OrderInfo showOptions />
            </PaperContainer>
          </Grid>
        </Grid>
      </Content>

      <FooterCheckout>
        <Button
          variant='contained'
          component={Link}
          to={CHECKOUT_CONFIRMATION}
        >
          Confirmar Pedido
        </Button>
      </FooterCheckout>
    </>
  )
}

const Title = styled(UiTitle).attrs({
  variant: 'h6'
})`
  && {
    text-align: left;
  }
`

const PaperContainer = styled(Paper)`
  && {
    flex-grow: 1;
    margin-bottom: 10px;
    padding: 10px;
  }
`

const Button = styled(MaterialButton)`
  && {
    color: #fff;
    background: #20232a;
    box-shadow: 2px 2px 3px #61dafb;
  }
`

export default Checkout
