import React, { PropTypes } from 'react'

const Search = ({ isDisabled, handleSearch }) => (
    <div className='search'>
        <input 
            type='search'
            placeholder='Digite o nome do usuário'
            disabled={isDisabled}
            onKeyUp={handleSearch}
        />
    </div>
)

Search.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired
}

export default Search