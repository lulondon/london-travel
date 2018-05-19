import React from 'react'

import TubeStatus from '../TubeStatus'

const ViewTubeStatus = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12 col-lg-6 offset-lg-3">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Tube Status</h1>
            <p className="m-0">For more information about the London Underground and other TfL services, please visit <a href="https://tfl.gov.uk/">tfl.gov.uk</a>.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-lg-6 offset-lg-3">
        <TubeStatus />
      </div>
    </div>
  </div>
)

export default ViewTubeStatus
