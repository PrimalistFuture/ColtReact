import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    let scored;
    if (this.props.score >= 0) {
      scored = "RuleRow RuleRow-disabled";
    } else {
      scored = "RuleRow RuleRow-active";
    }

    return (
      <tr className={scored} onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;