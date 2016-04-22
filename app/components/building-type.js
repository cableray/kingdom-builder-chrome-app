import React, { Component } from 'react'
import { map, startCase } from 'lodash'
import style from './building-type.css'

export default class BuildingType extends Component {
  constructor () {
    super(...arguments)
    this.state = { open: false }
  }

  render () {
    const { buildingType, actionsComponent } = this.props
    const { open } = this.state
    return (
      <section className={style.container}>
        <header onClick={() => this.setState(!open)}>
          <span className={style.name}>{buildingType.name}</span>
          <span className={style.secondary}>
            <span className={style.buildPoints}>{buildingType.buildPoints} BP</span>
            <span className={style.requiredLots}>{buildingType.requiredLots} lots</span>
          </span>
        </header>
        <details open={open}>
          <dl>
            {map(buildingType, (value, property) => (
              [<dt key={`${property}:key`}>{startCase(property)}</dt>,
              <dd key={`${property}:value`}>{value}</dd>]
            ))}
          </dl>
        </details>
        <footer>{actionsComponent}</footer>
      </section>
    )
  }
}
