import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import { Container } from '@material-ui/core'

const Content = ({ children, ...props }) => (
  <Main {...props}>
    <Container>
      {children}
    </Container>
  </Main>
)

Content.propTypes = {
  children: t.node.isRequired
}

const Main = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(3)}px;
  background: background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(230,229,229,1) 100%);
`
export default Content
