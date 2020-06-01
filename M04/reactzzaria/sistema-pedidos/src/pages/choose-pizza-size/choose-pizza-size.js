import React from 'react'
import { useAuth, useCollection } from 'hooks'
import styled from 'styled-components'
import {
  CircularProgress,
  Card,
  Typography,
  Grid
} from '@material-ui/core'

import { CHOOSE_PIZZA_FLAVOURS } from 'routes'
import { H4, HeaderContent, PizzasGrid, Divider, CardLink, Content } from 'ui'
import { singularOrPlural } from 'utils'

const ChoosePizzaSize = () => {
  const { userInfo } = useAuth()
  const pizzasSizes = useCollection('pizzasSizes')

  if (!pizzasSizes) {
    return <Typography style={{ margin: 10, padding: 5 }}>Carregando tamanhos... <div><CircularProgress size={20} /></div></Typography>
  }

  if (pizzasSizes.length === 0) {
    return 'Não há dados.'
  }

  return (
    <Content>
      <HeaderContent>
        <HomeTitle variant='h4'>
          O que vai ser hoje, {userInfo.user.firstName}?
        </HomeTitle>

        <H4>
          Escolha o tamanho da pizza:
        </H4>
      </HeaderContent>

      <PizzasGrid>
        {pizzasSizes.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card>
              <CardLink to={{
                pathname: CHOOSE_PIZZA_FLAVOURS,
                state: {
                  pizzaSize: pizza
                }
              }}>
                <Pizza>
                  <PizzaText>{pizza.size}cm</PizzaText>
                </Pizza>

                <Divider />

                <Typography variant='h5'>{pizza.name}</Typography>
                <Typography>
                  {pizza.slices} fatias, {' '}
                  {pizza.flavours} {' '}
                  {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
                </Typography>
              </CardLink>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </Content>
  )
}

const HomeTitle = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})`
  && {
    margin-top: 28px;
  }
`

const Pizza = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  height: 170px;
  width: 170px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.palette.grey.A100};
  background: ${({ theme }) => theme.palette.common.white};
  z-index: 1;

  &::before,
  &::after {
    content: '';
    position: absolute;

    transform: rotate(45deg);
    background: ${({ theme }) => theme.palette.grey.A100};
  }

  &::before {
    height: 1px;
    width: 145px;
  }

  &::after {
    height: 145px;
    width: 1px;
  }
`

const PizzaText = styled(Typography).attrs({
  variant: 'h5'
})`
  && {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: ${({ theme }) => theme.palette.common.white};

    position: relative;
    z-index: 1;
  }
`

export default ChoosePizzaSize
