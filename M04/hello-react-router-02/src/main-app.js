'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter, Route, Switch, NavLink, Prompt, withRouter } from 'react-router-dom'

import './css/style.css'

const Link = (props) => (
  <NavLink activeStyle={{ color: 'red' }} {...props} />
)

const ButtonBack_ = ({ history }) => (
  <button onClick={(e) => history.goBack()}>{'<-'} Voltar</button>
)

const ButtonBack = withRouter(ButtonBack_)

const ButtonForward_ = ({ history }) => (
  <button onClick={(e) => history.goForward()}>Próxima página {'->'}</button>
)

const ButtonForward = withRouter(ButtonForward_)

class MainApp extends PureComponent {
  render () {
    return (
      <BrowserRouter>

        <div>
          <ul>
            <li><ButtonBack /></li>
            <li><ButtonForward /></li>
          </ul>

          <ul>
            <li><Link to='/' exact>Home</Link></li>
            <li><Link to='/sobre'>Sobre</Link></li>
            <li><Link to='/contato'>Contato</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><a href='#informacoes-do-site'>Informações do site</a></li>
            <li><Link to='/cadastro'>Cadastro</Link></li>
          </ul>

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/(sobre|contato)' component={Page} />
            <Route path='/blog' component={Blog} />
            <Route path='/cadastro' component={Register} />
            <Route component={Error404} />
          </Switch>

          <div id='informacoes-do-site' style={{ margin: '1000px 0' }}>
            <h2>Informações do site</h2>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const Register = () => (
  <Prompt when message='Navegação bloqueada' />
)

const Error404 = () => (
  <h1>Página não encontrada</h1>
)

const Home = ({ match, location, history }) => (
  <div>
    {console.log('Home location:', location)}
    {console.log('Home history:', history)}
    <h1>Home</h1>
  </div>
)

const Page = ({ match, location, history }) => (
  <div>
    {console.log('Page location:', location)}
    {console.log('Page history:', history)}
    <h1>{match.url}</h1>
  </div>
)

const Blog = ({ match, location, history }) => (
  <div>
    {console.log('Blog location:', location)}
    {console.log('Blog history:', history)}
    <h1>Blog</h1>

    <ul>
      <li><Link to='/blog/post-1'>Post 01</Link></li>
      <li><Link to='/blog/post-2'>Post 02</Link></li>
    </ul>

    <Switch>
      <Route exact path='/blog' render={() => <NoPost numberOfPosts={2} />} />} />
      <Route path='/blog/:post(post-[12])' component={Post} />
      <Route component={Post404} />
    </Switch>
  </div>
)

const Post = ({ match, location, history }) => (
  <div>
    {console.log('Post location:', location)}
    {console.log('Post history:', history)}
    {/** .post === /:post */}
    <h2>Post: {match.params.post}</h2>
  </div>
)

const Post404 = ({ match, location, history }) => (
  <div>
    {console.log('Post404 location:', location)}
    {console.log('Post404 history:', history)}
    <h1>Post não existe</h1>
  </div>
)

const NoPost = ({ numberOfPosts }) => (
  <p>Selecione um dos {numberOfPosts} post</p>
)

export default MainApp
