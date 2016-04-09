import React         from 'react';
import moment        from 'moment';

class Day extends React.Component
{
  render()
  {
    const {
      isSprintPlanDay,
      isDemoDay,
      dayIndex,
      isHoliday,
      startDay,
      participants
    } = this.props;

    const list = (!isHoliday) && (!isDemoDay) && participants.map(function(participant)
    {
      const {name, absent} = participant;
      const isAbsent = absent.includes(dayIndex);
      return <span style={{marginLeft : '2px'}} key={name} className={'badge badge-medium ' + (isAbsent ? 'alert' : 'success')}>
        {name[0]}
      </span>;
    });

    return <div className="columns medium-2 text-center">
      <h4 style={{marginTop : '1rem'}}><a href="#"><small>
        <i className={'fa fa-thumbs-o-up fa-lg text-right holiday-' + (isHoliday ? 'off' : 'on')} />
      </small></a></h4>
      <h4>
        <small>[{moment(startDay).add(dayIndex < 5 ? dayIndex : dayIndex + 2, 'd').format('DD/MM/YYYY')}]</small>
      </h4>
      {isSprintPlanDay ? <p>SPRINT PLAN</p> : null}
      {isDemoDay ? <p>DEMO</p> : null}
      {isHoliday ? <p>HOLIDAY</p> : null}
      {list ? <ul className="menu">{list}</ul> : null}
    </div>;
  }
};

export default Day;
