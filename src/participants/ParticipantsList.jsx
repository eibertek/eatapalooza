import React from 'react';
import _ from 'lodash';
import { Participant } from "./Participant.jsx";

const ParticipantsList = (props) => {
  const parts = _.orderBy(props.participants, ['Weight'],['desc']);
  return <table width="100%">
    <thead>
    <tr><th>Name</th><th>Up By</th></tr>
    </thead>
    <tbody>
    {parts.map((p, c)=> <Participant key={c} {...p} />)}
    </tbody>
  </table>
};

export default ParticipantsList;