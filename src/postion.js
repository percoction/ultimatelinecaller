import React from 'react';

/*class Position extends React.Component {
  constructor(props) {
    super(props)
  }

  render(props) {
}
*/

function Position(props) {
  return (
    <input type="text" value={props.position.uuid}>{props.position.name}</input>
/*    <select className="position">
      <option value={props.position.uuid} selected="selected" />
      {$(propsi.*/
  );
}

export default Position;
