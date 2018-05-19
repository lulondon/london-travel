import React from 'react'
import PropTypes from 'prop-types'

import { tubeLineStatusShape } from '../../lib/dataShapes'

const statuses = [
  'Special Service',
  'Closed',
  'Suspended',
  'Part Suspended',
  'Planned Closure',
  'Part Closure',
  'Severe Delays',
  'Reduced Service',
  'Bus Service',
  'Minor Delays',
  'Good Service',
  'Part Closed',
  'Exit Only',
  'No Step Free Access',
  'Change of frequency',
  'Diverted',
  'Not Running',
  'Issues Reported',
  'No Issues',
  'Information',
  'Service Closed',
]

const TubeLineStatusText = ({ status }) => (
  status.statusSeverity === 10
    ? null
    : (
      <li className="list-group-item line-status-text">
        <p className="mt-1">{statuses[status.statusSeverity]}</p>
        <p className="text-muted m-0">{status.reason}</p>
      </li>
    )
)

TubeLineStatusText.propTypes = {
  status: PropTypes.shape(tubeLineStatusShape).isRequired,
}

export default TubeLineStatusText
