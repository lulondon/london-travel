import React, { Component } from 'react'

import ViewRailDeparturesView from './component'

class ViewRailDepartures extends Component {
  constructor() {
    super()
    this.state = {
      callingPoint: null,
      station: null,
      errors: [],
    }

    this.handleAddError = this.handleAddError.bind(this)
    this.handleClearCallingPoint = this.handleClearCallingPoint.bind(this)
    this.handleClearErrors = this.handleClearErrors.bind(this)
    this.handleUpdateCallingPoint = this.handleUpdateCallingPoint.bind(this)
    this.handleUpdateStation = this.handleUpdateStation.bind(this)
  }

  handleClearCallingPoint() {
    this.setState({ callingPoint: null })
  }

  handleAddError(error) {
    this.setState({ errors: this.state.errors.concat(String(error)) })
  }

  handleClearErrors() {
    this.setState({ errors: [] })
  }

  handleUpdateCallingPoint(callingPoint) {
    this.setState({ callingPoint: callingPoint[0] })
  }

  handleUpdateStation(station) {
    this.setState({ station: station[0] })
  }

  render() {
    return (
      <ViewRailDeparturesView
        callingPoint={this.state.callingPoint}
        errors={this.state.errors}
        handleClearCallingPoint={this.handleClearCallingPoint}
        handleUpdateCallingPoint={this.handleUpdateCallingPoint}
        handleUpdateStation={this.handleUpdateStation}
        station={this.state.station}
      />
    )
  }
}

export default ViewRailDepartures
