import React, { useState } from 'react'
import {
  IconButton,
  Typography,
  Menu,
  MenuItem
} from '@material-ui/core'

import { AccountCircle as MaterialAccountCircle } from '@material-ui/icons'
import Logo from './logo'

import styled from 'styled-components'
import { useAuth } from 'hooks'
import { Link } from 'react-router-dom'
import { HOME } from 'routes'

function HeaderCommon () {
  const [anchorElement, setAnchorElement] = useState(null)
  const { userInfo, logout } = useAuth()

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  return (
    <>
      <LogoContainer>
        <LinkLogo to={HOME}>
          <Logo />
        </LinkLogo>
      </LogoContainer>

      <TypographyHeader color='inherit' >Olá {userInfo.user.firstName} =)</TypographyHeader>
      <IconButton color='inherit' onClick={handleOpenMenu}>
        <AccountCircle />
      </IconButton>

      <Menu open={!!anchorElement} onClose={handleClose} anchorEl={anchorElement}>
        <MenuItem onClick={logout}>Sair</MenuItem>
      </Menu>
    </>
  )
}

const LogoContainer = styled.div`
  flex-grow: 1;
`

const LinkLogo = styled(Link)`
  display: inline-block;
`

const TypographyHeader = styled(Typography)`
  font-size: 1rem;
`

const AccountCircle = styled(MaterialAccountCircle)`
  font-size: 2rem;
`

export default HeaderCommon
