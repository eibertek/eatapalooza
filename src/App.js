import React, { Component } from 'react';
import './App.css';
import ParticipantList from './participants/';
import Filters from './filters/Filters.jsx';
import * as data from './data/participant.json';
import * as weighins from './data/weighins.json';

const getUniqueValuesOfKey = (array, key) => {
  return array.reduce(function(carry, item){
    if(item[key] && !~carry.indexOf(item[key])) carry.push(item[key]);
    return carry;
  }, []);
}
const Events = ['---select Event ----', ...getUniqueValuesOfKey(data, 'Event')];
const Leagues = ['---select League ----', ...getUniqueValuesOfKey(data, 'League')];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Event: null,
      League: null,
    }
  }

  onChangeSelect = (evt) => {
    const { name, value } = evt.target;
    this.setState({[name]: value});
  };

  render() {
    let participants = this.state.Event ? data
      .filter( obj => obj['Event'] === this.state.Event)
      : data;
    participants = this.state.League ? participants
        .filter( obj => obj['League'] === this.state.League)
      : participants;
    participants =
    participants.map( part => {
      const weights = weighins.filter( p => part.Name === p.Name && part.Event === p.Event);
      part.Weight = weights[weights.length-1].Weight - weights[0].Weight;
      part.WeightPerc = part.Weight * weights[0].Weight / 100;
      return part;
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.Event}</h1>
          <h3>EATAPALOOZA</h3>
        </header>
        <div className="App-intro">
          <div>Leader Board</div>
          <Filters
            participants={data}
            Events={Events}
            Leagues={Leagues}
            filterEvent={this.onChangeSelect}
            filterLeague={this.onChangeSelect}
          />
          <ParticipantList participants={participants} />
        </div>
      </div>
    );
  }
}

export default App;

