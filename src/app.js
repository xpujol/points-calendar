import React                       from 'react';
import {connect}                   from 'react-redux';
import Config                      from './Components/Config';
import ParticipantList             from './Components/ParticipantList';
import Result                      from './Components/Result';
import Calendar                    from './Components/Calendar';
import {AddParticipant, RemoveParticipant, SetAbsent, UnsetAbsent}
                                   from './State/Participants';
import {AddHoliday, RemoveHoliday} from './State/Holidays';
import {ChangeStartDay}            from './State/StartDay';
import {ChangePercentage}          from './State/Percentage';

class App extends React.Component
{
  render()
  {
    const {dispatch, startDay, participants, percentage, holidays} = this.props;

    const add_participant    = p => dispatch(AddParticipant(p));
    const remove_participant = p => dispatch(RemoveParticipant(p));
    const set_absent         = (p, d) => dispatch(SetAbsent(p, d));
    const unset_absent       = (p, d) => dispatch(UnsetAbsent(p, d));

    const add_holiday        = d => dispatch(AddHoliday(d));
    const remove_holiday     = d => dispatch(RemoveHoliday(d));

    const change_start_day   = d => dispatch(ChangeStartDay(d));

    const change_percentage  = p => dispatch(ChangePercentage(p));

    const configProps          = {startDay, percentage, add_participant, change_start_day, change_percentage};
    const participantListProps = {participants, remove_participant};
    const resultProps          = {participants, percentage, holidays};
    const calendarProps        = {startDay, participants, holidays, set_absent, unset_absent, add_holiday, remove_holiday};

    return <div>
      <div className="fixed header">
      	<nav className="top-bar" data-topbar="" role="navigation">
      		<div className="row">
      			<div className="columns medium-12">
      				<h4>Points Calendar - UI Team</h4>
      			</div>
      		</div>
      	</nav>
      </div>

      <Config {...configProps} />
      <ParticipantList {...participantListProps} />
      <Result {...resultProps} />
      <Calendar {...calendarProps} />

      <div className="row">
      	<div className="columns medium-12 text-center">
      		<p><small>UI Team - Copyright 2016</small></p>
      	</div>
      </div>
    </div>;
  }
};

export default connect(state => state)(App);
