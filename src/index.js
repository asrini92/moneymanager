import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
var PieChart = require('zingchart-react').pie;

ReactDOM.render(<App />, document.getElementById('root'));
var pieSlices = [
    { text : "First Slice", values : [1] },
    { text : "Second Slice", values : [3] },
    { text : "Third Slice", values : [2] },
    { text : "Fourth Slice", values : [40] }
];

ReactDOM.render(
<PieChart id="chart1" height="300" width="600" series={pieSlices} legend="true" theme="light" title="Hello Pie Chart"/>,
document.getElementById('component1'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
