import React from 'react';

class Participant extends React.Component
{
  render()
  {
    const {name, remove_participant, last} = this.props;

    return <div className={'medium-2 columns' + (last ? ' end' : '')}>
      <div className="profile-card">
        <span onClick={remove_participant} className="profile-delete" style={{marginTop: '0.5rem'}}>
          <i className="fa fa-close" />
        </span>
        <img src="assets/buho.png" alt="UserZoom" />
        <div className="profile-info">
          <h4 className="subheader">{name}</h4>
        </div>
      </div>
    </div>;
  }
};

export default Participant;
