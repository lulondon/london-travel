import React from 'react'
import PropTypes from 'prop-types'

import TubeLineStatusText from '../TubeLineStatusText'

import { tubeLineShape } from '../../lib/dataShapes'
import { icon, textColour, colours } from '../../lib/line'

const TubeLineStatus = ({ line }) => (
  <div
    className="list-group-item p-1"
    style={{
      backgroundColor: colours[line.id],
      color: textColour(line),
    }}
  >
    <div className="d-flex justify-content-between p-0">
      <span className="lead p-2 m-0">{line.name}</span>
      <div className="p-2 m-0">{icon(line)}</div>
    </div>
    <ul className="list-group">
      {
        line.lineStatuses.map(status => <TubeLineStatusText status={status} key={line.id} />)
      }
    </ul>
  </div>
)

TubeLineStatus.propTypes = {
  line: PropTypes.shape(tubeLineShape).isRequired,
}

export default TubeLineStatus
