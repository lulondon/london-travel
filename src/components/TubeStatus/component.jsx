import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TubeLineStatus from '../TubeLineStatus'

class TubeStatus extends Component {
  render() {
    const {
      data,
      loading
    } = this.props

    return (
      <div>
        {
          loading
            ? <div className='loader' />
            : <div className='null-loader' />
        }
        <div className='list-group'>
          {data.map(line => <TubeLineStatus key={line.id} line={line} />)}
          <div className='list-group-item attribution px-3'>Powered by TfL Open Data</div>
        </div>
      </div>
    )
  }
}

TubeStatus.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool
}

export default TubeStatus
