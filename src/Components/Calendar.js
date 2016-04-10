import React from 'react';
import Day   from './Day';

const sprintDays = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class Calendar extends React.Component
{
  renderWeek(days_of_week)
  {
    const {startDay, participants, holidays, set_absent,
           unset_absent, add_holiday, remove_holiday} = this.props;
    const days = sprintDays.map(d => holidays.includes(d));

    const weekDays = days.map(function(isHoliday, dayIndex)
    {
      if (!days_of_week.includes(dayIndex))
      {
        return null;
      }
      const dayProps =
      {
        set_absent      : p => set_absent(p, dayIndex),
        unset_absent    : p => unset_absent(p, dayIndex),
        add_holiday     : () => add_holiday(dayIndex),
        remove_holiday  : () => remove_holiday(dayIndex),
        isSprintPlanDay : dayIndex === days.indexOf(false),
        isDemoDay       : dayIndex === days.lastIndexOf(false),
        isHoliday,
        dayIndex,
        startDay,
        participants
      };

      return <Day key={dayIndex} {...dayProps} />;
    });

    return <div className="row">
      <div className="row points-calendar__header">
        <div className="columns medium-2">Monday</div>
        <div className="columns medium-2">Tuesday</div>
        <div className="columns medium-2">Wednesday</div>
        <div className="columns medium-2">Thursday</div>
        <div className="columns medium-2 end">Friday</div>
      </div>
      <div className="row points-calendar margin-large b">{weekDays}</div>
    </div>
  }
  render()
  {
    return <div>
      <div className="row">
        <div className="medium-10 columns margin-medium tb">
          <h3>Calendar</h3>
        </div>
      </div>
      {this.renderWeek([0,1,2,3,4])}
      {this.renderWeek([5,6,7,8,9])}
    </div>
  }
};

export default Calendar;
