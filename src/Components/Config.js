import React  from 'react';
import moment from 'moment';

const initialState = {participant : ''};

class Config extends React.Component
{
  constructor()
  {
    super();
    this.state = initialState;
  }
  setStartDay(e)
  {
    const value = e.target.value;
    value && this.props.change_start_day(value);
  }
  setPercentage(e)
  {
    const value = parseInt(e.target.value, 10);
    value && (value > 0) && (value <=100) && this.props.change_percentage(value);
  }
  handleParticipantInput(e)
  {
    this.setState({participant : e.target.value});
  }
  addParticipant(e)
  {
    const value = this.state.participant;
    e.preventDefault();
    if (value)
    {
      this.props.add_participant(value);
      this.setState(initialState);
    }

  }
  render()
  {
    const {startDay, percentage} = this.props;
    const addParticipant         = this.addParticipant.bind(this);

    return <div className="row">
      <div className="medium-10 columns">
        <div className="row">
          <div className="medium-2 columns">
            <input onChange={this.setStartDay.bind(this)} type="date" value={moment(startDay).format('YYYY-MM-DD')} />
          </div>
          <div className="medium-2 columns">
            <div className="input-group">
              <input onChange={this.setPercentage.bind(this)} className="input-group-field" type="number" value={percentage} />
              <span className="input-group-label">%</span>
            </div>
          </div>
          <div className="medium-6 columns">
            <form className="add-participant" onSubmit={addParticipant} >
              <div className="input-group">
                <input value={this.state.participant} onChange={this.handleParticipantInput.bind(this)}
                  type="text" name="new-user" placeholder="Add a new participant" className="input-group-field" />
                <span onClick={addParticipant} className="input-group-label">
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
