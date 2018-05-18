import React, { Component } from 'react'
import PropTypes from 'prop-types'

import RailServiceInfo from '../RailServiceInfo'

import './styles.css'

class RailDepartureBoard extends Component {
  render() {
    const {
      station,
      callingPoint,
      loading,
      departures
    } = this.props

    return (
      <div className='list-group' id='accordion'>
        <div className='list-group-item departure-board-header'>
          <div className='m-0 p-2 pb-0'>
            <h3>{station.name}</h3>
            <p className='departure-board-header-subtitle m-0'>
              {`Next trains from this station${callingPoint ? ` calling at ${callingPoint.name}` : '.'}`}
            </p>
          </div>
        </div>
        {
          loading
            ? <div className='list-group-item p-0 loader' />
            : <div className='list-group-item p-0 loader-padding' />
        }
        {departures.map(service =>
          <RailServiceInfo key={service.serviceId} service={service} />)
        }
      </div>
    )
  }
}

RailDepartureBoard.propTypes = {
  station: PropTypes.object.isRequired,
  callingPoint: PropTypes.object,
  loading: PropTypes.bool,
  departures: PropTypes.array.isRequired
}

export default RailDepartureBoard
