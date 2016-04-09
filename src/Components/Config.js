import React  from 'react';
import moment from 'moment';

class Config extends React.Component
{
  render()
  {
    const {startDay, percentage} = this.props;
    const change = f => f;

    return <div className="row">
      <div className="medium-10 columns">
        <div className="row">
          <div className="medium-2 columns">
            <input onChange={change} type="date" value={moment(startDay).format('YYYY-MM-DD')} />
          </div>
          <div className="medium-2 columns">
            <div className="input-group">
              <input onChange={change} className="input-group-field" type="number" value={percentage} />
              <span className="input-group-label">%</span>
            </div>
          </div>
          <div className="medium-6 columns">
            <form className="add-participant">
              <div className="input-group">
                <input onChange={change} type="text" name="new-user" placeholder="Add a new participant" className="input-group-field" />
                <span className="input-group-label">
                  <i className="fa fa-user-plus fa-inverse" />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>;
  }
};

export default Config;
