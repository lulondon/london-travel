import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ServiceHeader from '../RailServiceHeader'
import SubsequentCallingPoint from '../RailServiceSubsequentCallingPoint'

import './styles.css'

class RailServiceInfo extends Component {
  render() {
    const { service } = this.props

    return (
      <div className="list-group-item">
        <ServiceHeader service={service} />

        <div id={service.serviceId} className="collapse hide" role="tabpanel" aria-labelledby={`#${service.destination.name}`} data-parent="#accordion">
          <div className="card-body pb-0">
            {service.subsequentCallingPoints.map(callingPoint =>
              <SubsequentCallingPoint key={callingPoint.crs} callingPoint={callingPoint} />)}
          </div>
        </div>
        <div className='d-flex'>
          {
            service.etd !== 'Cancelled'
              ? <a className='ml-auto' data-toggle="collapse" href={`#${service.serviceId}`} role="button" aria-expanded="true" aria-controls={`#${service.serviceId}`}>
                <i className="fa fa-ellipsis-h departure-more-information-button" aria-hidden="true" />
              </a>
              : null
          }
        </div>
      </div>
    )
  }
}

RailServiceInfo.propTypes = {
  service: PropTypes.object.isRequired
}

export default RailServiceInfo
