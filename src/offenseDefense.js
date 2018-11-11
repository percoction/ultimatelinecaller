import React from 'react';
import Position from 'position.js';

class OffenseDefense extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="offenseDefense" >
        <div><h2>{props.name}</h2></div>
        { $(props.positions).each((position) => {
            <Position className="position" position={position} />
          }
        }
      </div>
    );
  }
}
