import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Search from './index'

storiesOf('Search', module)
  .add('find bar', () => (
    <Search 
      handleSearch={action('Handle Search')}
      isDisabled={action('Is Disabled')} />
  ))
