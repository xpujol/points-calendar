import React from 'react';

const sum        = arr => arr.length ? arr.reduce((a, b) => a + b) : 0;
const sprintDays = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class Result extends React.Component
{
  calculateResultWithoutPercentage()
  {
    const {participants, percentage, holidays} = this.props;
    const days = sprintDays.map(d => holidays.includes(d));
    const total = days.map(function(isHoliday, dayIndex)
    {
      if (isHoliday || (days.lastIndexOf(false) === dayIndex))
      {
        return 0;
      }
      return sum(participants.map(function(participant)
      {
        if (participant.absent.includes(dayIndex))
        {
          return 0;
        }
        return (days.indexOf(false) === dayIndex) ? 1 : 2;
      }));
    });

    return sum(total);
  }
  calculateResult(withoutPercentage)
  {
    return Math.round(10 * withoutPercentage * (this.props.percentage/100)) / 10;
  }
  render()
  {
    const withoutPercentage = this.calculateResultWithoutPercentage();

    return <div>
      <div className="row">
        <div className="medium-10 columns margin-medium tb">
          <h3>Points</h3>
        </div>
      </div>
      <div className="row">
        <div className="medium-10 columns">
            <h3>
              <span className="subheader">{withoutPercentage} points - {100 - this.props.percentage}% = </span>
              <span className="green" style={{fontWeight: 'bold'}}>{this.calculateResult(withoutPercentage)} points</span>
            </h3>
        </div>
      </div>
    </div>
  }
};

export default Result;
