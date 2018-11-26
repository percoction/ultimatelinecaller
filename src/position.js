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
    options.push(<option value={position.name}>{position.name}</option>);
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
        {options}
      </select>
    </div>
  );
}

function autofill (tag, options) {
  $(options).each(function(key, option) {
    console.log(option);
    let matchPos = option.value.indexOf(tag.value);
    if (matchPos > 0) {
      // autocomplete tag.value (using highlighted)
      $(tag).selectRange(matchPos, tag.value.length);
      // select autocompleted option
      option.attr('selected', 'selected');
      // remove old selected attr?
    }
  });
}

$.fn.selectRange = function(start, end) {
  var e = document.getElementById($(this).attr('id')); // I don't know why... but $(this) don't want to work today :-/
  if (!e) return;
  else if (e.setSelectionRange) { e.focus(); e.setSelectionRange(start, end); } /* WebKit */ 
  else if (e.createTextRange) { var range = e.createTextRange(); range.collapse(true); range.moveEnd('character', end); range.moveStart('character', start); range.select(); } /* IE */
  else if (e.selectionStart) { e.selectionStart = start; e.selectionEnd = end; }
};

export default Position;
