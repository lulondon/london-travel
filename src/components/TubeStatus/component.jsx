import React from 'react'
import PropTypes from 'prop-types'

import TubeLineStatus from '../TubeLineStatus'

const TubeStatus = ({ tubeStatusData, loading }) => (
  <div>
    {
      loading
        ? <div className="loader" />
        : <div className="null-loader" />
    }
    <div className="list-group">
      {tubeStatusData.map(line => <TubeLineStatus key={line.id} line={line} />)}
      <div className="list-group-item attribution px-3">Powered by TfL Open Data</div>
    </div>
  </div>
)

TubeStatus.defaultProps = {
  loading: false,
}

TubeStatus.propTypes = {
  tubeStatusData: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
}

export default TubeStatus
