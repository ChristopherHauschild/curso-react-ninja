import React, { PureComponent } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo-react-zzaria.svg'

var firebaseConfig = {
  apiKey: 'AIzaSyCbbbVJwxFpZ5-1v1n46N1r8ixmid--uMo',
  authDomain: 'reactzzaria-99784.firebaseapp.com',
  databaseURL: 'https://reactzzaria-99784.firebaseio.com',
  projectId: 'reactzzaria-99784',
  storageBucket: 'reactzzaria-99784.appspot.com',
  messagingSenderId: '196453751604',
  appId: '1:196453751604:web:f2727ca2dde1fd3e55e361'
}

firebase.initializeApp(firebaseConfig)
class Login extends PureComponent {
  state = {
    isUserLoggedIn: false,
    user: null
  }

  componentDidMount () {
    // tratar autenticação toda fez que user logar ou deslogar
    firebase.auth().onAuthStateChanged((user) => {
      console.log('Dados do usuário:', user)
      this.setState({
        isUserLoggedIn: !!user,
        user
      })
    })
  }

  login () {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  logout = () => {
    firebase.auth().signOut().then(() => {
      console.log('Deslogou...')
      this.setState({ isUserLoggedIn: false, user: null })
    })
  }

  render () {
    const { isUserLoggedIn, user } = this.state
    return (
      <Container>
        <Grid container justify='center' alignItems='center' spacing={40}>

          <Grid item xs={12}>
            <Logo />
          </Grid>

          <Grid item xs={12} container justify='center'>
            {isUserLoggedIn && (
              <>
                <pre>{user.displayName}</pre>
                <Button variant='contained' onClick={this.logout}>
                  Sair
                </Button>
              </>
            )}

            {!isUserLoggedIn && (
              <GitHubButton onClick={this.login}>
                Entrar com Github
              </GitHubButton>
            )}

          </Grid>

        </Grid>
      </Container>
    )
  }
}

// exclui barra de rolagem
const Container = styled.div`
  padding: 20px;
`

const Logo = styled(MainLogo)`
  width: 100%;
`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 25px;
    max-width: 480px;
    padding: 15px;
    text-transform: none;
  }
`

export default Login
