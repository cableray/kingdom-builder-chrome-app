import React, { Component } from 'react'
import { Field as FormField, Form, actions } from 'react-redux-form'
import { connect } from 'react-redux'
import { camelCase } from 'lodash'
import { addBuildingType } from '../actions/building-types'

export default connect()(BuildingTypes)

export function BuildingTypes ({buildings, dispatch}) {
  return (
    <Form model='newBuildingType' onSubmit={buildingType => handleSubmit(dispatch, buildingType)}>
      <Field name="Name"/>
      <Field name="Build Points"/>
      <Field name="Required Lots"/>
      <fieldset><legend>Kingdom</legend>
        <Field name="Loyalty"/>
        <Field name="Stability"/>
        <Field name="Economy"/>
        <Field name="Fame"/>
        <Field name="Unrest"/>
      </fieldset>
      <fieldset><legend>Settlement</legend>
        <Field name="Defense"/>
        <Field name="Productivity"/>
        <Field name="Law"/>
        <Field name="Crime"/>
        <Field name="Corruption"/>
        <Field name="Society"/>
        <Field name="Lore"/>
      </fieldset>
      <Field name="Upgrade From"/>
      <Field name="Upgrade To"/>
      <button type='submit'>Add</button>
    </Form>
  )
}

function Field ({name}) {
  return (
    <FormField model={`newBuildingType.${camelCase(name, true)}`}>
      <label>{name}</label>
      <input />
    </FormField>
  )
}

function handleSubmit (dispatch, buildingType) {
  dispatch(addBuildingType(buildingType))
  dispatch(actions.reset('newBuildingType'))
}
