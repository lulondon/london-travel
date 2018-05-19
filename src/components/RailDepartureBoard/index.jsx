import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import { railStationShape } from '../../lib/dataShapes'

import { rail } from '../../../config/config.json'

import RailDepartureBoardView from './component'

const { interval } = rail

class RailDepartureBoard extends Component {
  constructor(props) {
    super(props)
    const { station, callingPoint } = props

    this.state = {
      departures: [],
      loading: false,
      station,
      callingPoint,
      ready: false,
    }

    this.loadDate = this.loadData.bind(this)
  }

  componentWillMount() {
    // Move this into constructor?
    this.loadData()

    const timer = setInterval(() => this.loadData(), interval || 120000)
    this.setState({ timer })
  }

  componentWillReceiveProps(newProps) {
    const { station, callingPoint } = newProps

    this.setState({
      station,
      callingPoint,
    }, () => this.loadData())
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  loadData() {
    const { station, callingPoint } = this.state

    if (station) {
      this.setState({ loading: true })

      axios.post(`${process.env.DARWIN_PROXY}/getDepartureBoardWithDetails/${station.crs}`, {
        token: process.env.DARWIN_TOKEN,
        options: {
          destination: callingPoint ? callingPoint.crs : null,
        },
      })
        .then((response) => {
          this.setState({
            departures: response.data.trainServices,
            loading: false,
            ready: false,
          }, () => setTimeout(() => this.setState({ ready: true }), 100))
        })
        .catch(() => {
          this.setState({
            loading: false,
          })
        })
    }
  }

  render() {
    const {
      departures,
      station,
      callingPoint,
      loading,
      ready,
    } = this.state

    return (
      <RailDepartureBoardView
        station={station}
        callingPoint={callingPoint}
        departures={departures}
        loading={loading}
        ready={ready}
      />
    )
  }
}

RailDepartureBoard.defaultProps = {
  callingPoint: {
    name: null,
    crs: null,
  },
}

RailDepartureBoard.propTypes = {
  station: PropTypes.shape(railStationShape).isRequired,
  callingPoint: PropTypes.shape(railStationShape),
}

export default RailDepartureBoard
