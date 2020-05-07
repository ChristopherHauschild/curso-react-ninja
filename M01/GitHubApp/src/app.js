import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'


class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  getGitHubApiUrl (userName, type) {
    const internalUser = userName ? `/${userName}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({
        isFetching: true
      })

      ajax().get(this.getGitHubApiUrl(value))
        .then((result) => {
          this.setState({
            userInfo: {
              userName: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        })
        .always(() => {
          this.setState({
            isFetching: false
          })
        })
    }
    console.log(keyCode)
  }

  getRepos (type) {
    return (e) => {
      const userName = this.state.userInfo.login
      ajax().get(this.getGitHubApiUrl(userName, type))
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => ({
                name: repo.name,
                link: repo.html_url
            }))
          })
        })
    }
  }


  render() {
    return <AppContent
      {...this.state}
      // userInfo={this.state.userInfo}
      // repos={this.state.repos}
      // starred={this.state.starred}
      // isFetching={this.state.isFetching}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}

export default App

