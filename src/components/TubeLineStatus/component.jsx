import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TubeLineStatusText from '../TubeLineStatusText'

import { icon, textColour, colours } from '../../lib/line'

class TubeLineStatus extends Component {
  render() {
    const { line } = this.props

    return (
      <div className='list-group-item p-1'
        style={{
          backgroundColor: colours[line.id],
          color: textColour(line)
        }}
      >
        <div className='d-flex justify-content-between p-0'>
          <span className='lead p-2 m-0'>{line.name}</span>
          <div className='p-2 m-0'>{icon(line)}</div>
        </div>
        <ul className='list-group'>
          {
            line.lineStatuses.map((status, i) => <TubeLineStatusText status={status} key={i} />)
          }
        </ul>
      </div>
    )
  }
}

TubeLineStatus.propTypes = {
  line: PropTypes.object.isRequired
}

export default TubeLineStatus
