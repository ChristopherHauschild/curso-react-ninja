import React from 'react'
import styled from 'styled-components'
import {
  Button as MaterialButton,
  Typography,
  Paper,
  Container as MaterialContainer,
  Divider as MaterialDivider
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import { Content, H4, H6, OrderInfo } from 'ui'

import FooterCheckout from 'pages/checkout/footer-checkout'
import { useAuth, useOrder } from 'hooks'
import { HOME } from 'routes'

function CheckoutSuccess () {
  const { userInfo } = useAuth()
  const { order } = useOrder()

  return (
    <>
      <Content>
        <Header>
          <H4>Feito {userInfo.user.firstName}!</H4>
          <Typography>
            Seu pedido será entregue no endereço informado em até
          </Typography>
          <H6>
            45min a 60min
          </H6>
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

      <FooterCheckout justifyContent='flex-end'>
        <Button to={HOME}>
          Voltar para Home
          <div style={{ marginTop: 5, marginLeft: 8 }}>
            <HomeIcon />
          </div>
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
  margin-bottom: 25px;
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

export default CheckoutSuccess
