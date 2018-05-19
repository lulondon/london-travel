import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Typeahead } from 'react-bootstrap-typeahead'

import RailDepartureBoard from '../RailDepartureBoard'

import railStations from '../../lib/railStations'

import './styles.css'

class RailDeparturesView extends Component {
  render() {
    const {
      callingPoint,
      handleClearCallingPoint,
      handleUpdateCallingPoint,
      handleUpdateStation,
      station
    } = this.props

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 col-lg-6 offset-lg-3'>
            <div className='jumbotron jumbotron-fluid'>
              <div className='container'>
                <h1 className='display-4'>Train Times</h1>
                <h3>National Rail Services</h3>
                <p>This page lists the next trains to leave a National Rail
                train station within the next two hours.</p>
                <p>You can filter trains by stations they stop at. Tap the
                  <i className='fa fa-ellipsis-h px-2' aria-hidden='true' />
                icon to see all calling points.</p>
                <form>
                  <div className='form-row'>
                    <div className='form-group col-lg col-xs-12'>
                      <label htmlFor='stationSelector'>Station Name</label>
                      <Typeahead
                        labelKey='name'
                        maxResults={5}
                        multiple={false}
                        onChange={handleUpdateStation}
                        onFocus={handleClearCallingPoint}
                        options={railStations}
                        ref='station'
                      />
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='form-group col-lg col-xs-12'>
                      <label htmlFor='stationSelector'>Filter (trains calling at...)</label>
                      <Typeahead
                        disabled={!station}
                        labelKey='name'
                        maxResults={5}
                        multiple={false}
                        onChange={handleUpdateCallingPoint}
                        options={railStations}
                        ref='callingPoint'
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-lg-6 offset-lg-3'>
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

RailDeparturesView.propTypes = {
  callingPoint: PropTypes.object,
  handleClearCallingPoint: PropTypes.func.isRequired,
  handleUpdateCallingPoint: PropTypes.func.isRequired,
  handleUpdateStation: PropTypes.func.isRequired,
  station: PropTypes.object
}

export default RailDeparturesView
