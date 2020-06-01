import React from 'react'
import Logo from './logo'

import styled from 'styled-components'

function HeaderCheckout () {
  return (
    <LogoContainer>
      <Logo />
    </LogoContainer>
  )
}

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`

export default HeaderCheckout
