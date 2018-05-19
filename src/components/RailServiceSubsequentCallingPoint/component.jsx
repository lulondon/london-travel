import React from 'react'
import PropTypes from 'prop-types'

import { railStationShape } from '../../lib/dataShapes'

const RailServiceSubsequentCallingPoint = ({ callingPoint }) => (
  <div className="d-flex justify-content-start">
    {
      callingPoint.et === 'On time'
        ? <p className="text-secondary">{callingPoint.st}</p>
        : <p className="text-danger">{callingPoint.et}</p>
    }
    <p className="ml-2">{callingPoint.locationName}</p>
  </div>
)

RailServiceSubsequentCallingPoint.propTypes = {
  callingPoint: PropTypes.shape(railStationShape).isRequired,
}

export default RailServiceSubsequentCallingPoint
