import * as types from '../constants/ActionTypes'
import { actions } from 'react-redux-form'


export function addBuildingType(buildingType) {
  return actions.merge('buildingTypes', {[buildingType.name]: buildingType});
}
