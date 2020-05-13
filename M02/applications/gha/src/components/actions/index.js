'use strict'

import React, { PropTypes } from 'react'
import './actions.css'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos} className='btn1'>Ver repositórios</button>
    <button onClick={getStarred} className='btn2'>Ver favoritos</button>
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Actions
