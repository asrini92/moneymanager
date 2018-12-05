var PieChart = require('zingchart-react').pie;
var pieSlices = [
    { text : "First Slice", values : [10] },
    { text : "Second Slice", values : [20] },
    { text : "Third Slice", values : [30] },
    { text : "Fourth Slice", values : [40] }
];

React.render(
<PieChart id="chart1" height="300" width="600" series={pieSlices} legend="true" theme="light" title="Hello Pie Chart"/>,
document.getElementById('component1'));