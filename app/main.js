import {result_ranking} from '../data/ranking.js';
import lineChart from '../js/line_chart.js';
import bubbleChart from '../js/bubble_chart.js';
import * as d3 from 'd3';

document.addEventListener('DOMContentLoaded', () => {

  //default 50 currencies
  d3.select(".bubble-title")
    .append("h1")
    .text("Top 1 Crypto-Currency Most Expensive Bubble Chart");
  new bubbleChart(result_ranking);

  //renew bubble chart by input
  let numCoins = document.getElementById("numCoins");
  numCoins.addEventListener('input', () => {
    document.getElementById("bubble-chart").remove();
    new bubbleChart(result_ranking, numCoins.value);

    //remove the title
    d3.select(".bubble-title")
      .select("h1")
      .remove();

    //add the new title in
    d3.select(".bubble-title")
      .append("h1")
      .text(`Top ${numCoins.value} Crypto-Currency Most Expensive Bubble Chart`);

  });


  //remove line charts
  document.getElementById("clear").addEventListener('click', () => {
    document.getElementById("line-chart-index").remove();
    let index = document.createElement("div");
    index.setAttribute("class", "line-chart-index");
    index.setAttribute("id", "line-chart-index");
    document.getElementById("line-page").appendChild(index);
  });
});
