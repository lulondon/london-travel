import React, { Component } from 'react'
import axios from 'axios'

import TubeStatusView from './component'

import { tube } from '../../../config/config.json'

const { modes, refresh } = tube

class TubeStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      error: false,
      loading: true
    }
  }

  componentDidMount() {
    this.loadData()
    this.timer = setInterval(() => {
      this.loadData()
    }, refresh)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  loadData() {
    this.setState({ loading: true })

    const component = this
    axios.get(`https://api.tfl.gov.uk/line/mode/${modes.join(',')}/status`, {
      params: {
        app_id: process.env.TFL_APP_ID,
        app_key: process.env.TFL_APP_KEY
      }
    })
      .then((response) => {
        component.setState({
          data: response.data,
          loading: false
        })
      })
      .catch(() => {
        this.setState({
          error: true,
          loading: false
        })
      })
  }

  render() {
    const {
      data,
      error,
      loading
    } = this.state

    return (
      <TubeStatusView
        data={data}
        error={error} // Not currently used. Will be fixed in future.
        loading={loading}
      />
    )
  }
}

export default TubeStatus
