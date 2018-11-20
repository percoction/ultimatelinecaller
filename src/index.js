import ReactDOM from 'react-dom';
import React from 'react';
import LineCaller from './lineCaller.js';
import data from './json.js';

ReactDOM.render(
  <LineCaller data={data} />,
  document.getElementById("root")
);

