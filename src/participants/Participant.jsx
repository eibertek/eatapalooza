import React, { Component } from 'react';

export class Participant extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      event: '',
      league: '',
      date: '',
    }
  }

  render() {
    return this.props.Weight > 0 ? <tr>
      <td>{this.props.Name}</td>
      <td>{this.props.Weight} ({this.props.WeightPerc} %)</td>
    </tr> : null;
  }
}
