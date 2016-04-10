import React       from 'react';
import Participant from './Participant';

class ParticipantList extends React.Component
{
  render()
  {
    const {participants, remove_participant} = this.props;
    const list = participants.map(function(participant)
    {
      const {name} = participant;
      const remove = () => remove_participant(name);
      
      return <Participant key={name} name={name} remove_participant={remove}/>;
    });

    return <div>
      <div className="row">
        <div className="medium-10 columns margin-medium t">
          <h3>Participants</h3>
        </div>
      </div>
      <div className="row">{list}</div>
    </div>
  }
};

export default ParticipantList;
