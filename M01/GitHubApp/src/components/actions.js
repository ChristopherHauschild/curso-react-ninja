import React, { PropTypes } from 'react'

const Actions = ({ getRepos, getStarred }) => (
    <div className='actions'>
        <button className='btn1' onClick={getRepos}> Repositórios </button>
        <button className='btn2' onClick={getStarred}> Favoritos </button>
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Actions