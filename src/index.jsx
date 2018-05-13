import React from 'react'
import { render } from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './styles/main.scss'

import MainView from './components/MainView'

render(
  <MainView />,
  document.getElementById('root')
)
