import React from 'react';
import OffenseDefense from './offenseDefense.js';

class LineCaller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: props.data.team,
      game: props.data.game,
    };
  }

  render() {
    return (
      <OffenseDefense name={this.state.team.offenses[0].name} positions={this.state.team.offenses[0].positions} allPositions={this.state.team.positions} />
    );
  }
}

export default LineCaller;
