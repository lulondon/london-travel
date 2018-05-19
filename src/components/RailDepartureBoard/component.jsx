import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import base64Url from 'base64-url'
import posed from 'react-pose'

import { railStationShape } from '../../lib/dataShapes'

import RailServiceInfo from '../RailServiceInfo'

import './styles.css'

const departuresListOptions = {
  open: {
    delayChildren: 100,
    staggerChildren: 30,
  },
  closed: {
    staggerChildren: 20,
  },
}

const departureOptions = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 10 },
}

const DeparturesList = posed.div(departuresListOptions)
const Departure = posed.div(departureOptions)

class RailDepartureBoard extends PureComponent {
  render() {
    const {
      station,
      callingPoint,
      loading,
      departures,
      ready,
    } = this.props

    return (
      <div className="list-group" id="accordion">
        <div className="list-group-item departure-board-header">
          <div className="m-0 p-2 pb-0">
            <h3>{station.name}</h3>
            <p className="departure-board-header-subtitle m-0">
              {`Next trains from this station${callingPoint ? ` calling at ${callingPoint.name}` : '.'}`}
            </p>
          </div>
        </div>
        {
          loading
            ? <div className="list-group-item p-0 loader" />
            : <div className="list-group-item p-0 loader-padding" />
        }
        <DeparturesList pose={ready ? 'open' : 'closed'}>
          {
            departures.map(service => (
              <Departure key={base64Url.escape(service.serviceId)}>
                <RailServiceInfo service={service} />
              </Departure>))
          }
        </DeparturesList>
      </div>
    )
  }
}

RailDepartureBoard.defaultProps = {
  loading: false,
  ready: false,
  callingPoint: {
    name: null,
    crs: null,
  },
}

RailDepartureBoard.propTypes = {
  callingPoint: PropTypes.shape(railStationShape),
  departures: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
  ready: PropTypes.bool,
  station: PropTypes.shape(railStationShape).isRequired,
}

export default RailDepartureBoard
