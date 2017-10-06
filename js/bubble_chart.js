import * as d3 from 'd3';
import lineChart from './line_chart.js';

class bubbleChart {
  constructor(data, wanted){
    this.render(data, wanted);
  }

  render(data, wanted = 25){

    d3.select(".bubble-graph")
      .append("svg")
      .attr("class", "bubble-chart")
      .attr("id", "bubble-chart")
      .attr("width", "1095")
      .attr("height", "500");

    let width = 1095, height = 500;
    let color = d3.scaleOrdinal(d3.schemeCategory20);

    let tooltip = d3.select("body")
                    .append("div")
                    .attr("class", "tooltip")
                    .style("opacity", 0);

    data = data.sort(function(a,b){ return b.usd - a.usd; });

    data = data.slice(0,wanted);
    console.log(data);

    let nodes = data.map(function(d) {
      return {
        name: d.name,
        rank: d.rank,
        ticker: d.ticker,
        usd: d.usd,
        radius: getRadius(d)
      };
    });

    let simulation = d3.forceSimulation(nodes)
      .force('charge', d3.forceManyBody().strength(2))
      .force('center', d3.forceCenter(width / 3, height / 2))
      .force('collision', d3.forceCollide().radius(function(d) {
        return d.radius;
      }))
      .on('tick', ticked);

    function getRadius(d){
      let r = Math.log(d.usd);
      r = Math.abs(r) * 8;
      return r;
    }

    function ticked() {
      let u = d3.select('svg')
        .selectAll('circle')
        .data(nodes);

      u.enter()
        .append('circle')
        .attr('r', function(d) {
          return d.radius;
        })
        .merge(u)
        .text(function(d){
          return d.ticker;
        })
        .attr('cx', function(d) {
          return  Math.max(d.radius, Math.min(width - d.radius, d.x));
        })
        .attr('cy', function(d) {
          return Math.max(d.radius, Math.min(height - d.radius, d.y));
        })
        .attr("fill", function(d) {
          return color(d.rank);
        })
        .on("mouseover", function(d) {
            tooltip.html(
             "<br/>" + d.name + "<br/>" +
             "Ticker: " + d.ticker + "<br/>" +
             "Rank: " + d.rank + "<br/>" +
             "Value(usd): $" + d.usd + "<br/>")
             .style("opacity", "1")
             .style("left", d.x + 20 + "px")
             .style("top", d.y + "px");
        })
        .on("mouseout", function() {
          tooltip.style("opacity", "0");
        })
        //on click push a line chart of that currency
        .on("click", function(d) {
          let checker = document.getElementsByClassName(`line-chart-index-item-${d.ticker}`);

          if (checker.length === 0){
            makeLineChart(d.ticker);
          }
        })
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

      u.exit().remove();
    }

    function makeLineChart(key){
      return new lineChart(key);
    }

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(.03).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(.03);
      d.fx = null;
      d.fy = null;
    }

  }
}

export default bubbleChart;
