import React    from 'react';
import ReactDOM from 'react-dom';

window.React = React;
window.ReactDOM = ReactDOM;

import {App}    from './app';

ReactDOM.render(<App counters={[
  {title: "Victories" , initialValue: 10}   ,
  {title: "Defeats"   , initialValue: 20}   ,
  {title: "Ties"      , initialValue: 9000}
]} />, document.getElementById('app'));
