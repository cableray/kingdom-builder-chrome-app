import Reducer from './reducer'
import { actions, modelReducer } from 'react-redux-form'

export default class BuildingTypes extends Reducer {
  constructor (model) {
    super(...arguments)
    this.model = model
  }

  initialState = {}

  addBuildingType = (state = {}, {buildingType}) => {
    console.log('action', actions.merge(this.model, {[buildingType.name]: buildingType}))
    let newState = modelReducer(this.model, this.initialState)(state, actions.merge(this.model, {[buildingType.name]: buildingType}))
    debugger
    return newState
  }
}
