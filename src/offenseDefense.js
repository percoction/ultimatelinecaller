import React from 'react';
import Position from './position.js';

class OffenseDefense extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.positions = props.positions;
    this.allPositions = props.allPositions;
    /*this.state = {
      name: props.name,
      positions: props.positions,
    }*/
  }

  render() {
    return (
      <div className="offenseDefense" >
        <div><h2>{this.name}</h2></div>
         { this.positions.map((position) =>
            <Position className="position" position={position} allPositions={this.allPositions} />
          ) }
      </div>
    );
  }
}

export default OffenseDefense;
