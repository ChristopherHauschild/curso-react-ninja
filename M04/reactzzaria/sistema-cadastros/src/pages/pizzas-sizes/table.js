import React from 'react'
import styled from 'styled-components'
import { Link, useRouteMatch } from 'react-router-dom'
import {
  Button as MaterialButton,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@material-ui/core'
import { Add, Edit, Delete } from '@material-ui/icons'
import { THead, Th, TableContainer, TableTitle } from 'ui'
import { useCollection } from 'hooks'

import { singularOrPlural } from 'utils'
import { PIZZAS_SIZES, NEW } from 'routes'

function TablePizzasSizes () {
  const { data: pizzasSizes } = useCollection('pizzasSizes')
  const newSizePath = useRouteMatch(`${PIZZAS_SIZES}${NEW}`)

  return (
    <TableContainer>
      <TitleContainer>
        <Grid item>
          <TableTitle>
            Tamanhos cadastrados
          </TableTitle>
        </Grid>

        <Grid item>
          <ButtonAdd
            startIcon={<Add />}
            component={Link}
            to={`${PIZZAS_SIZES}${NEW}`}
            disabled={!!newSizePath}
          >
            Adicionar novo tamanho
          </ButtonAdd>
        </Grid>
      </TitleContainer>

      <Table>
        <THead>
          <TableRow>
            <Th>Nome</Th>
            <Th>Diâmetros</Th>
            <Th>Quant. Fatias</Th>
            <Th>Quant. Sabores</Th>
            <Th />
          </TableRow>
        </THead>

        <TableBody>
          {pizzasSizes?.map(pizza => {
            <TableRow key={pizza.id}>
              <TableCell>{pizza.name}</TableCell>
              <TableCell>{pizza.size} cm</TableCell>
              <TableCell>{pizza.slices} fatias</TableCell>
              <TableCell>
                {pizza.flavours} {' '}
                {singularOrPlural(pizza, 'sabor', 'sabores')}
              </TableCell>

              <TableCell align='right'>
                <Button startIcon={<Edit />}>
                  Editar
                </Button>
                <ButtonRemove startIcon={<Delete />}>
                  Remover
                </ButtonRemove>
              </TableCell>
            </TableRow>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const TitleContainer = styled(Grid).attrs({
  container: true,
  justify: 'space-between',
  alignItems: 'center'
})`
  && {
    padding: ${({ theme }) => theme.spacing(3)}px;

    ${TableTitle} {
      padding: 0;
    }
  }
`

const Button = styled(MaterialButton).attrs({
  variant: 'container'
})`
  && {
    margin-left: ${({ theme }) => theme.spacing(2)}px;
  }
`

const ButtonRemove = styled(MaterialButton).attrs({
  variant: 'container'
})`
  && {
    background: darkred;
    color: #fff;
    margin-left: ${({ theme }) => theme.spacing(2)}px;
  }
`

const ButtonAdd = styled(MaterialButton)`
  && {
    background: #a9c2c9,
    color: #fff
  }
`

export default TablePizzasSizes
