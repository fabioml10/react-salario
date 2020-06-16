import React, { Component } from 'react'
import css from './calc.module.css'
import calculateSalaryFrom from '../../helper/salary'
import percent from '../../helper/percent'
import formatCurrency from '../../helper/formatter'

export default class Calc extends Component {
  constructor() {
    super()
    this.state = {
      fullSalary: 0,
      calcs: []
    }
  }

  componentDidMount() {
    const initialValue = 1000
    this.setState({
      fullSalary: initialValue,
      calcs: calculateSalaryFrom(initialValue)
    })
    const calcs = calculateSalaryFrom(initialValue)
    this.props.onSalaryChange(calcs)
  }

  handleCacls = (e) => {
    const fullSalary = e.target.value
    const calcs = calculateSalaryFrom(fullSalary)
    this.props.onSalaryChange(calcs)

    this.setState({
      fullSalary,
      calcs
    })
  }

  render() {
    const { fullSalary, calcs } = this.state
    return (
      <>
        <div className="row">
          <div className="input-field col s3">
            <input type="number" name="salary" id="salary" value={fullSalary} onChange={this.handleCacls} />
            <label className="active" htmlFor="salary">Salário Bruto:</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s3">
            <input type="text" name="inss-base" id="inss-base" className={css.bold} value={formatCurrency(calcs.baseINSS)} read-only="true" />
            <label className="active" htmlFor="inss-base">Base INSS:</label>
          </div>
          <div className="input-field col s3">
            <input type="text" name="inss-discount" id="inss-discount" className={css.inssDiscountText} value={`${formatCurrency(calcs.discountINSS)} (${percent(fullSalary, calcs.discountINSS)}%)`} read-only="true" />
            <label className="active" htmlFor="inss-discount">Desconto INSS:</label>
          </div>
          <div className="input-field col s3">
            <input type="text" name="irpf-base" id="irpf-base" className={css.bold} value={formatCurrency(calcs.baseIRPF)} read-only="true" />
            <label className="active" htmlFor="irpf-base">Base IRPF:</label>
          </div>
          <div className="input-field col s3">
            <input type="text" name="irpf-discount" id="irpf-discount" className={css.irpfDiscountText} value={`${formatCurrency(calcs.discountIRPF)} (${percent(fullSalary, calcs.discountIRPF)}%)`} read-only="true" />
            <label className="active" htmlFor="irpf-discount">Desconto IRPF:</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s3 offset-s9">
            <input type="text" name="net_salary" id="net_salary" className={css.netSalaryText} value={`${formatCurrency(calcs.netSalary)} (${percent(fullSalary, calcs.netSalary)}%)`} read-only="true" />
            <label className="active" htmlFor="net_salary">Salário Líquido:</label>
          </div>
        </div>
      </>
    )
  }
}
