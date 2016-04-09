import React       from 'react';
import Participant from './Participant';

class ParticipantList extends React.Component
{
  render()
  {
    const participants = this.props.participants.map(function(participant)
    {
      const {name} = participant;
      return <Participant key={name} name={name} />;
    });

    return <div>
      <div className="row">
        <div className="medium-10 columns margin-medium t">
          <h3>Participants</h3>
        </div>
      </div>
      <div className="row">{participants}</div>
    </div>
  }
};

export default ParticipantList;
