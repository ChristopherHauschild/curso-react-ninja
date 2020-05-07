import React from 'react'

const Button = ({ children, handleClick }) => (
    <button onClick={handleClick}>{children}</button>
)

Button.propTypes = {
    handleClick: React.PropTypes.func.isRequired
}

// <Button handleClick={() => console.log('clicou')}>
// Clique em mim
// </Button>

export default Button