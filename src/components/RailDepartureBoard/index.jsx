import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import { rail } from '../../../config/config.json'

import RailDepartureBoardView from './component'

const { darwinApiProxy, darwinToken, interval } = rail

class RailDepartureBoard extends Component {
  constructor(props) {
    super(props)
    const { station, callingPoint } = props

    this.state = {
      departures: [],
      loading: false,
      station,
      callingPoint
    }

    this.loadDate = this.loadData.bind(this)
  }

  componentDidMount() {
    // Move this into constructor?
    this.loadData()

    const timer = setInterval(() => this.loadData(), interval || 120000)
    this.setState({ timer })
  }

  componentWillReceiveProps(newProps) {
    const { station, callingPoint } = newProps

    this.setState({
      station,
      callingPoint
    }, () => this.loadData())
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  loadData() {
    const { station, callingPoint } = this.state

    if (station) {
      this.setState({ loading: true })

      axios.post(`${darwinApiProxy}/getDepartureBoardWithDetails/${station.code}`, {
        token: darwinToken,
        options: {
          destination: callingPoint ? callingPoint.code : null
        }
      })
        .then(response => this.setState({
          departures: response.data.trainServices,
          loading: false
        }))
        .catch(() => {
          this.setState({
            loading: false
          })
        })
    }
  }

  render() {
    const { departures, station, callingPoint } = this.state

    return (
      <RailDepartureBoardView
        station={station}
        callingPoint={callingPoint}
        departures={departures}
      />
    )
  }
}

RailDepartureBoard.propTypes = {
  station: PropTypes.object.isRequired,
  callingPoint: PropTypes.object
}

export default RailDepartureBoard
