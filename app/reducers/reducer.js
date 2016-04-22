import { camelCase } from 'lodash'

export default class Reducer {
  reducer = (state = this.initialState, {...action, type}) => {
    const reducerMethod = this._reducerMethodTransform(type)
    if (this[reducerMethod]) {
      return this[reducerMethod](state, action)
    }
    return state
  }

  _reducerMethodTransform (type) {
    return camelCase(type, true)
  }
}
