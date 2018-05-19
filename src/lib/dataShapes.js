import PropTypes from 'prop-types'

export const railServiceShape = {
  std: PropTypes.string,
  etd: PropTypes.string,
  platform: PropTypes.string,
  operator: PropTypes.string,
  operatorCode: PropTypes.string,
  serviceId: PropTypes.string,
  rsid: PropTypes.string,
  origin: PropTypes.object,
  destination: PropTypes.object,
  subsequentCallingPoints: PropTypes.array,
}

export const railStationShape = {
  name: PropTypes.string,
  crs: PropTypes.string,
}

export const tubeLineShape = {
  $type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  modeName: PropTypes.string,
  disruptions: PropTypes.array,
  created: PropTypes.string,
  modified: PropTypes.string,
  lineStatuses: PropTypes.array,
  routeSections: PropTypes.array,
  serviceTypes: PropTypes.array,
  crowding: PropTypes.object,
}

export const tubeLineStatusShape = {
  $type: PropTypes.string,
  id: PropTypes.number,
  statusSeverity: PropTypes.number,
  statusSeverityDescription: PropTypes.string,
  created: PropTypes.string,
  validityPeriods: PropTypes.array,
}
