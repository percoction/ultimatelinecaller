import React from 'react';
import $ from 'jquery';

/*class Position extends React.Component {
  constructor(props) {
    super(props)
  }

  render(props) {
}
*/

function Position(props) {
  let id = Math.floor(Math.random() * 1000000);
  let positionId = 'position' + id;
  let options = [];
  console.log(props.allPositions);
  $(props.allPositions).each(function(key, position) {
    console.log(key);
    console.log(position);
    options.push(<option value={position.name} />);
  });
  return (
    <div
      id={positionId}
    >
      <input 
        type="text"
        /*readOnly="readonly"*/
        value={props.position.name}
        onChange={(i) => {
            autofill(i, $('div#' + positionId + ' select option'));
          }
        }
      />
      <select className="position">
//        <option value={props.position.uuid} selected="selected" />
        {options}
      </select>
    </div>
  );
}

function autofill (tag, options) {
  $(options).each(function(key, option) {
    console.log(option);
    if (option.value.indexOf(tag.value) > 0) {
      // autocomplete tag.value (using highlighted)

      // select autocompleted option
      option.attr('selected', 'selected');
      // remove old selected attr?
    }
  });
}

export default Position;
