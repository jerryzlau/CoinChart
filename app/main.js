import {result_ranking, coin_types} from '../data/ranking.js';
import lineChart from '../js/line_chart.js';
import bubbleChart from '../js/bubble_chart.js';
import * as d3 from 'd3';

document.addEventListener('DOMContentLoaded', () => {

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


  //clear line charts
  document.getElementById("clear").addEventListener('click', () => {
    document.getElementById("line-chart-index").remove();
    let index = document.createElement("div");
    index.setAttribute("class", "line-chart-index");
    index.setAttribute("id", "line-chart-index");
    document.getElementById("line-page").appendChild(index);
    document.getElementById("search-key").value = "";
  });

  //search by ticker
  let search = document.getElementById("search");
  search.addEventListener('submit', (e) => {
    e.preventDefault();
    let key = e.target.elements[0].value;
    let checker = document.getElementsByClassName(`line-chart-index-item-${key}`);

    if (coin_types.includes(key) && checker.length === 0){
      new lineChart(key);
    }else{
      alert("Invalid Input");
      e.target.elements[0].value = "";
    }
  });

  //help info
  d3.select(".help-icon")
    .on("mouseover", () => {
      //add single chart help
      new lineChart("dope");
      d3.select(".line-chart-index-item-dope")
        .append("p")
        .attr("class", "help-text-single")
        .text("This is the history of a selected coin, click it to remove it");

      //add multiple chart help
      // new lineChart("jobs");
      // d3.select(".line-chart-index-item-jobs")
      //   .append("p")
      //   .attr("class", "help-text-multiple")
      //   .text("You can have multiple historic chart for comparison");
 
      //add clear all charts help
      // d3.select("body")
      //   .append("p")
      //   .attr("class", "help-text-clear")
      //   .text("You can clear all charts at once");

      //add bubble chart help
      d3.select("body")
        .append("p")
        .attr("class", "help-text-bubble")
        .text("These bubbles are scaled to the value of each currency: click on each to request a historic chart");

      //add bubble chart bar help
      // d3.select("body")
      //   .append("p")
      //   .attr("class", "help-text-bubble-bar")
      //   .text("Scroll to compare # coins up to top 50");

    })
    .on("mouseout", () => {
      //remove single chart help
      d3.select(".line-chart-index-item-dope").remove();
      d3.select(".help-text").remove();

      //remove multiple chart help
      // d3.select(".line-chart-index-item-jobs").remove();
      // d3.select(".help-text-multiple").remove();

      //remove clear help
      // d3.select(".help-text-clear").remove();

      //remove clear help
      d3.select(".help-text-bubble").remove();

      //remove clear help
      // d3.select(".help-text-bubble-bar").remove();
    });

});
