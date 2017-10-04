import {result_ranking} from '../data/ranking.js';
import lineChart from '../js/line_chart.js';
import bubbleChart from '../js/bubble_chart.js';

document.addEventListener('DOMContentLoaded', () => {
  // new lineChart('btc');
  new bubbleChart(result_ranking);
});
