'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import './save-message.css'

const SaveMessage = ({ isSaving }) => (
  isSaving !== null && (
    <p className='save-message'>
      {isSaving ? 'Salvando...' : 'Salvo!'}
    </p>
  )
)

SaveMessage.propTypes = {
  isSaving: PropTypes.bool
}

export default SaveMessage
