import React from 'react'
import styled from 'styled-components'
import { useAuth } from 'hooks'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from 'images/logo-react-zzaria.svg'

function Login () {
  const { login } = useAuth()

  return (
    <Container>
      <Grid container justify='center' alignItems='center' spacing={5}>

        <Grid item xs={12}>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify='center'>
          <GitHubButton onClick={login}>
            Entrar com Github
          </GitHubButton>
        </Grid>

      </Grid>
    </Container>
  )
}

// exclui barra de rolagem
const Container = styled.div`
  height: 100vh;
  background: #20232a;
  padding: ${({ theme }) => theme.spacing(3)}px;
`

const Logo = styled(MainLogo)`
  && {
    width: 100%;
  }

  & path {
    fill: #61dafb;
  }

  & line {
    stroke: #61dafb;
  }
`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
    max-width: 480px;
    padding: ${({ theme }) => theme.spacing(2)}px;
    text-transform: none;
    box-shadow: 1px 1px 1px 0px #61dafb;
  }
`

export default Login
