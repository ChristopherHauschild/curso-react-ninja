import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
import { Switch, Route, Link, useLocation } from 'react-router-dom'
import {
  Divider,
  Drawer as MaterialDrawer,
  LinearProgress,
  Typography,
  List,
  ListItem,
  ListItemText as MaterialListItemText
} from '@material-ui/core'

import * as routes from 'routes'

const Orders = lazy(() => import('pages/orders'))
const PizzasSizes = lazy(() => import('pages/pizzas-sizes'))
const PizzasFlavours = lazy(() => import('pages/pizzas-flavours'))

const Main = () => {
  const { pathname } = useLocation()

  return (
    <>
      <Drawer variant='permanent'>
        <DrawerContent>
          <TypographyLogo variant='h4'>
            React-zzaria
          </TypographyLogo>
          <Typography>
            Sistema de Cadastro
          </Typography>
        </DrawerContent>

        <Divider />

        <List>
          {menuItems.map(item => (
            <ListItem
              component={Link}
              to={item.link}
              key={item.label}
              button
              selected={pathname === item.link}
            >
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Content>
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            {menuItems.map(item => (
              <Route key={item.link} path={item.link} exact={item.exact}>
                <item.component />
              </Route>
            ))}
          </Switch>
        </Suspense>
      </Content>
    </>
  )
}

const menuItems = [
  {
    label: 'Pedidos',
    link: routes.HOME,
    component: Orders,
    exact: true
  },
  {
    label: 'Tamanhos de pizzas',
    link: routes.PIZZAS_SIZES,
    component: PizzasSizes
  },
  {
    label: 'Sabores de pizzas',
    link: routes.PIZZAS_FLAVOURS,
    component: PizzasFlavours
  }
]

const Content = styled.main`
  margin-left: ${({ theme }) => theme.extend.drawerWidth}px;
  padding: 25px;
`

const Drawer = styled(MaterialDrawer)`
  && {
    .MuiPaper-root {
      width: ${({ theme }) => theme.extend.drawerWidth}px;
      background: #20232a;
      color: #fff;
    }
  }
`

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
`

const TypographyLogo = styled(Typography)`
  && {
    color: #61dafb;
  }
`

const ListItemText = styled(MaterialListItemText)`
  && {
    color: #fff;
  }
  &&:active {
    color: #61dafb;
  }
  &&:hover {
    color: #61dafb;
  }
`
export default Main
