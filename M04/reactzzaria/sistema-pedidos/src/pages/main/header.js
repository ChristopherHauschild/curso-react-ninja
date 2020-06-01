import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  AppBar as MaterialAppBar,
  Toolbar as MaterialToolbar
} from '@material-ui/core'

import styled from 'styled-components'
import HeaderCommon from './header-common'
import HeaderCheckout from './header-checkout'
import { CHECKOUT } from 'routes'

const Header = () => (
  <AppBar>
    <Toolbar>
      <Switch>
        <Route path={CHECKOUT} component={HeaderCheckout} />
        <Route component={HeaderCommon} />
      </Switch>
    </Toolbar>
  </AppBar>
)

const AppBar = styled(MaterialAppBar)`
  && {
    background: #20232a;
  }
`

const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
`

export default Header
