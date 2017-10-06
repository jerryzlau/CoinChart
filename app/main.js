import {result_ranking, coin_types} from '../data/ranking.js';
import lineChart from '../js/line_chart.js';
import bubbleChart from '../js/bubble_chart.js';
import * as d3 from 'd3';

document.addEventListener('DOMContentLoaded', () => {
  console.log(coin_types);

  //default 50 currencies
  d3.select(".bubble-title")
    .append("h2")
    .text("Top 25 Most Expensive Crypto-Currencies Bubble Chart");
  new bubbleChart(result_ranking);

  //renew bubble chart by input
  let numCoins = document.getElementById("numCoins");
  numCoins.addEventListener('input', () => {
    document.getElementById("bubble-chart").remove();
    d3.selectAll(".tooltip").remove();
    new bubbleChart(result_ranking, numCoins.value);

    //remove the title
    d3.select(".bubble-title")
      .select("h2")
      .remove();

    //add the new title in
    d3.select(".bubble-title")
      .append("h2")
      .text(`Top ${numCoins.value} Most Expensive Crypto-Currencies Bubble Chart`);
  });


  //remove line charts
  document.getElementById("clear").addEventListener('click', () => {
    document.getElementById("line-chart-index").remove();
    let index = document.createElement("div");
    index.setAttribute("class", "line-chart-index");
    index.setAttribute("id", "line-chart-index");
    document.getElementById("line-page").appendChild(index);
  });

  //search by ticker
  let search = document.getElementById("search");
  search.addEventListener('submit', (e) => {
    e.preventDefault();
    let key = e.target.elements[0].value;

    if (coin_types.includes(key)){
      new lineChart(key);
    }else{
      alert("Currency doesn't exist");
      e.target.elements[0].value = "";
    }
  });

});
