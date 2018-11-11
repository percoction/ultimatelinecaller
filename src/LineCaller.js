import React from 'react';
import 'OffenseDefense' from 'offenseDefense.js';

class LineCaller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      this.team = data.team;
      this.game = data.game;
    };
  }

  render() {
    return (
      <OffenseDefense name={this.team.offenses[0].name} positions={this.team.offenses[0].positions} />
    );
  }
}
