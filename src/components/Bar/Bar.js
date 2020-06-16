import React, { Component } from 'react'
import css from './bar.module.css'
import percent from '../../helper/percent'

export default class Bar extends Component {
  render() {
    const { calcs } = this.props
    const discountINSS = Math.round(percent(calcs.fullSalary, calcs.discountINSS))
    const discountIRPF = Math.round(percent(calcs.fullSalary, calcs.discountIRPF))
    const netSalary = Math.floor(percent(calcs.fullSalary, calcs.netSalary))
    return (
      <div className={css.barContainer}>
        <div className={`${css.discountINSS} ${css.bar}`} style={{ width: `${discountINSS}%` }}></div>
        <div className={`${css.discountIRPF} ${css.bar}`} style={{ width: `${discountIRPF}%` }}></div>
        <div className={`${css.netSalary} ${css.bar}`} style={{ width: `${netSalary}%` }}></div>
      </div>
    )
  }
}
