import React from 'react';

class Participant extends React.Component
{
  render()
  {
    return <div className="medium-2 columns">
      <div className="profile-card">
        <span className="profile-delete" style={{marginTop: '0.5rem'}}>
          <i className="fa fa-close" />
        </span>
        <img src="assets/buho.png" alt="UserZoom" />
        <div className="profile-info">
          <h4 className="subheader">{this.props.name}</h4>
        </div>
      </div>
    </div>;
  }
};

export default Participant;
