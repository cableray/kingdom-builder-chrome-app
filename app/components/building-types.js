import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/model'
import { map } from 'lodash'
import style from './building-types.css'
import BuildingType from './building-type'

export default connect(
  state => ({
    buildingTypes: state.buildingTypes
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(BuildingTypes)

export function BuildingTypes ({buildingTypes, actions: {unset}}) {
  return (
    <ul className={style.list}>
      {map(buildingTypes, buildingType => (
        <li key={buildingType.name}>
          <BuildingType 
            buildingType={buildingType} 
            actionsComponent={<ActionsPanel onRemove={() => unset('buildingTypes', buildingType.name)}/>}
          />
        </li>
      ))}
    </ul>
  )
}

export function ActionsPanel ({onRemove}) {
  return (
    <div className={style.actionsPanel}>
      <button className={style.removeButton} onClick={onRemove}>Remove</button>
    </div>
  )
}
