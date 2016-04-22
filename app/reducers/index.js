import { combineReducers } from 'redux'
import { modelReducer, formReducer } from 'react-redux-form'
import BuildingTypes from './building-types'


export default combineReducers({
  newBuildingType: modelReducer('newBuildingType', {}),
  newBuildingTypeForm: formReducer('newBuildingType'), // must be at the same level as the model key
  buildingTypes: new modelReducer('buildingTypes')
})
