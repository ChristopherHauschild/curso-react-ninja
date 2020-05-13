import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Repos from './index'

storiesOf('Repos', module)
  .add('with title prop', () => (
    <Repos title='Favoritos' />
  ))
  
  .add('with repos', () => (
    <Repos 
      title='Favoritos' 
      repos={[{
        link: 'https://www.google.com.br/',
        name: 'Google'
      }]} />
  ))
