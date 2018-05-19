import React from 'react'
import { render } from 'react-dom'

import 'bootstrap'

import 'font-awesome/scss/font-awesome.scss'

import './styles/main.scss'

import ViewMain from './components/ViewMain'

render(
  <ViewMain />,
  document.getElementById('root')
)
