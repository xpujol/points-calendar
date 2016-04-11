import React         from 'react';
import moment        from 'moment';

class Day extends React.Component
{
  toggleHoliday()
  {
    const {isHoliday, dayIndex, add_holiday, remove_holiday} = this.props;
    isHoliday ? remove_holiday(dayIndex) : add_holiday(dayIndex);
  }
  render()
  {
    const {
      set_absent,
      unset_absent,
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
      const toggleAbsent = isAbsent ? () => unset_absent(name) : () => set_absent(name);
      return <span onClick={toggleAbsent} style={{marginLeft : '2px'}} key={name} className={'badge badge-medium ' + (isAbsent ? 'alert' : 'success')}>
        {name.toUpperCase().slice(0,2)}
      </span>;
    });

    return <div className="columns medium-2 text-center">
      <h4 style={{marginTop : '1rem'}}><small>
        <i onClick={this.toggleHoliday.bind(this)} className={'fa fa-thumbs-o-up fa-lg text-right holiday-' + (isHoliday ? 'off' : 'on')} />
      </small></h4>
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
