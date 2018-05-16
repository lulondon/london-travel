import React from 'react'
import { render } from 'react-dom'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './styles/main.scss'

import ViewMain from './components/ViewMain'

render(
  <ViewMain />,
  document.getElementById('root')
)
