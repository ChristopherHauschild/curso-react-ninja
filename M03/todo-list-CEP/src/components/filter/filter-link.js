'use strict'

import React from 'react'
import './filter-link.css'

const FilterLink = ({ action, activeFilter, children, onClick }) => {
  const span = { tag: 'span' }
  const a = { tag: 'a', href: '#', onClick }

  const component = action === activeFilter ? span : a

  return (
    <component.tag
      href={component.href} // span não pega href
      onClick={component.onClick} // span não pega onClick
      style={{ marginRight: 10 }}
    >
      {children}
    </component.tag>
  )
}

export default FilterLink
