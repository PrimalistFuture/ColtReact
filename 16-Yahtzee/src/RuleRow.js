import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    let scored;
    if (this.props.score >= 0) {
      scored = "disabled";
    } else {
      scored = "active";
    }

    return (
      <tr className={`RuleRow RuleRow-${scored}`} onClick={this.props.score >= 0 ? null : this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score >= 0 ? this.props.score : this.props.desc}</td>
      </tr>
    )
  }
}

export default RuleRow;