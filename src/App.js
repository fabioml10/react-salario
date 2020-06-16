import React, { Component } from 'react';
import Calc from './components/Calc/Calc'
import Bar from './components/Bar/Bar';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      calcs: []
    }
  }
  handleSalaryChange = (calcs) => {
    this.setState({
      calcs: calcs
    })
  }
  render() {
    return (
      <div className="container">
        <h1 className="center-align">React Salário</h1>
        <Calc onSalaryChange={this.handleSalaryChange} />
        <Bar calcs={this.state.calcs} />
      </div>
    )
  }
}
