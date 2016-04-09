import React           from 'react';
import Config          from './Components/Config';
import ParticipantList from './Components/ParticipantList';
import Result          from './Components/Result';
import Calendar        from './Components/Calendar';

class App extends React.Component
{
  render()
  {
    const {startDay, participants, percentage, holidays} = this.props;

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

      <Config startDay={startDay} percentage={percentage} />
      <ParticipantList participants={participants} />
      <Result participants={participants} percentage={percentage} holidays={holidays} />
      <Calendar startDay={startDay} participants={participants} holidays={holidays} />

      <div className="row">
      	<div className="columns medium-12 text-center">
      		<p><small>UI Team - Copyright 2016</small></p>
      	</div>
      </div>
    </div>;
  }
};

export default App;
