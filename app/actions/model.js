import icepick from 'icepick'
import { get } from 'lodash'
import { actionTypes } from 'react-redux-form'

export const unset = (model, key) => (dispatch, getState) => {
  const collection = get(getState(), model, {});

  dispatch({
    type: actionTypes.CHANGE,
    model,
    value: icepick.unset(collection, key),
  });
}
