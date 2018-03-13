import React from 'react';

const Filters = (props) => {
  const EventFilter = <select onChange={props.filterEvent} name="Event" >{props.Events.map( ev => <option key={ev} value={ev}>{ev}</option>)}</select>;
  const LeagueFilter = <select onChange={props.filterLeague} name="League" >{props.Leagues.map( league => <option key={league} value={league}>{league}</option>)}</select>;
  return <div>{EventFilter}  {LeagueFilter}</div>
};

export default Filters;