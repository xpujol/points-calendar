const ADD_PARTICIPANT = 'Participant/AddParticipant';
const REMOVE_PARTICIPANT = 'Participant/RemoveParticipant';
const SET_ABSENT = 'Absent/SetAbsent';
const UNSET_ABSENT = 'Absent/UnsetAbsent';

export function AddParticipant(name)
{
  return {type : ADD_PARTICIPANT, name};
}

export function RemoveParticipant(name)
{
  return {type : REMOVE_PARTICIPANT, name};
} 

export function SetAbsent(name, day)
{
  return {type : SET_ABSENT, name, day};
}

export function UnsetAbsent(name, day)
{
  return {type : UNSET_ABSENT, name, day};
}

const defaultParticipants = window.localStorage.participants ?
                            JSON.parse(window.localStorage.participants).map(name => ({name, absent : []})) : [];

const reducer = function(participants = defaultParticipants, action)
{
  const {type, name, day} = action;
  switch(type)
  {
    case ADD_PARTICIPANT:
      return [...participants, {name, absent: []}];
    case REMOVE_PARTICIPANT:
      return participants.filter(p => p.name !== name);
    case SET_ABSENT:
      return participants.map(function(participant)
      {
        if (participant.name === name)
        {
          participant.absent = [...participant.absent, day];
        }
        return participant;
      });
    case UNSET_ABSENT:
      return participants.map(function(participant)
      {
        if (participant.name === name)
        {
          participant.absent = participant.absent.filter(d => d !== day);
        }
        return participant;
      });
    default:
      return participants;
  }
};

export default reducer;
