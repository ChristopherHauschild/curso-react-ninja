import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  Button as MaterialButton,
  Typography,
  Paper,
  Container as MaterialContainer,
  Divider as MaterialDivider
} from '@material-ui/core'
import { Content, H4, H6, OrderInfo } from 'ui'

import FooterCheckout from 'pages/checkout/footer-checkout'
import { useAuth, useOrder } from 'hooks'
import { CHECKOUT_SUCCESS } from 'routes'

function CheckoutConfirmation () {
  const { userInfo } = useAuth()
  const { sendOrder, order } = useOrder()

  return (
    <>
      <Content>
        <Header>
          <H4>Falaa {userInfo.user.firstName}!</H4>
          <Typography>
            Confira, por favor, se está tudo certo com o seu pedido antes de confirmar
          </Typography>
        </Header>

        <Container>
          <PaperContainer>
            <H6>Seu pedido:</H6>

            <OrderInfo />
            <Divider />
            <H6>Endereço para entrega:</H6>
            <Typography>
              {order.address.address},
              {' n.'} {order.address.number},
              {' '} {order.address.complement}<br />
              Bairro: {order.address.district},<br />
              CEP: {order.address.code}{' - '}
              {order.address.city}/{order.address.state}}
            </Typography>

            <Divider />

            <H6>Telefone para contato:</H6>
            <Typography>
              {order.phone}
            </Typography>

          </PaperContainer>
        </Container>
      </Content>

      <FooterCheckout justifyContent='center'>
        <Button to={CHECKOUT_SUCCESS} onClick={sendOrder}>
          Tudo beleza!
        </Button>
      </FooterCheckout>
    </>
  )
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
  text-align: center;
`
const Container = styled(MaterialContainer).attrs({
  maxWidth: 'sm'
})`
  margin-bottom: 30px;
`

const PaperContainer = styled(Paper)`
  && {
    padding: 25px;
  }
`

const Divider = styled(MaterialDivider)`
  && {
    margin: 14px 0px;
  }
`

const Button = styled(MaterialButton).attrs({
  variant: 'contained',
  size: 'large',
  component: Link
})`
  && {
    color: #fff;
    background: #20232a;
    box-shadow: 2px 2px 3px #61dafb;
  }
`

export default CheckoutConfirmation
