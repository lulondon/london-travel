import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RailServiceSubsequentCallingPoint extends Component {
  render() {
    const { callingPoint } = this.props
    return (
      <div className='d-flex justify-content-start'>
        {
          callingPoint.et === 'On time'
            ? <p className='text-secondary'>{callingPoint.st}</p>
            : <p className='text-danger'>{callingPoint.et}</p>
        }
        <p className='ml-2'>{callingPoint.locationName}</p>
      </div>
    )
  }
}

RailServiceSubsequentCallingPoint.propTypes = {
  callingPoint: PropTypes.object.isRequired
}

export default RailServiceSubsequentCallingPoint
