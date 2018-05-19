import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Typeahead } from 'react-bootstrap-typeahead'

import RailDepartureBoard from '../RailDepartureBoard'

import { railStationShape } from '../../lib/dataShapes'
import railStations from '../../lib/railStations'

import './styles.css'

class RailDeparturesView extends Component {
  constructor() {
    super()

    this.stationTypeaheadRef = React.createRef()
    this.callingPointTypeaheadRef = React.createRef()
  }

  render() {
    const {
      callingPoint,
      handleClearCallingPoint,
      handleUpdateCallingPoint,
      handleUpdateStation,
      station,
    } = this.props

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-lg-6 offset-lg-3">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4">Train Times</h1>
                <h3>National Rail Services</h3>
                <p>
                  This page lists the next trains to leave a National Rail train station within
                  the next two hours.
                </p>
                <p>
                  You can filter trains by stations they stop at. Tap the
                  <i className="fa fa-ellipsis-h px-2" aria-hidden="true" />
                  icon to see all calling points.
                </p>
                <form>
                  <div className="form-row">
                    <div className="form-group col-lg col-xs-12">
                      <label htmlFor="#stationSelector" className="w-100">
                        Station Name
                        <Typeahead
                          labelKey="name"
                          maxResults={5}
                          multiple={false}
                          onChange={handleUpdateStation}
                          onFocus={handleClearCallingPoint}
                          options={railStations}
                          ref={this.stationTypeaheadRef}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg col-xs-12">
                      <label htmlFor="#callingPointSelector" className="w-100">
                        Filter (trains calling at...)
                        <Typeahead
                          disabled={!station}
                          id="callingPointSelector"
                          labelKey="name"
                          maxResults={5}
                          multiple={false}
                          onChange={handleUpdateCallingPoint}
                          options={railStations}
                          ref={this.callingPointTypeaheadRef}
                        />
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-6 offset-lg-3">
            {
              station
                ? <RailDepartureBoard
                  station={station}
                  callingPoint={callingPoint}
                />
                : null
            }
          </div>
        </div>
      </div>
    )
  }
}

RailDeparturesView.defaultProps = {
  station: {
    name: null,
    crs: null,
  },
  callingPoint: {
    name: null,
    crs: null,
  },
}

RailDeparturesView.propTypes = {
  callingPoint: PropTypes.shape(railStationShape),
  handleClearCallingPoint: PropTypes.func.isRequired,
  handleUpdateCallingPoint: PropTypes.func.isRequired,
  handleUpdateStation: PropTypes.func.isRequired,
  station: PropTypes.shape(railStationShape),
}

export default RailDeparturesView
