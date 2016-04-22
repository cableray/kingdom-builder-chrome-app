import React, { Component, PropTypes } from 'react';
import style from './App.css';
import BuildingTypes from '../components/building-types'
import CreateBuilding from '../components/create-building'

export default class App extends Component {

  static propTypes = {
  }

  render() {
    return (
      <div className={style.normal}>
        <h2>building types</h2>
        <BuildingTypes />
        <CreateBuilding />
      </div>
    )
  }
}
