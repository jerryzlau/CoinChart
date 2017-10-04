import * as d3 from 'd3';
import lineChart from './line_chart.js';

class bubbleChart {
  constructor(data, wanted){
    this.render(data, wanted);
  }

  render(data, wanted = data.length){

    d3.select(".bubble-page")
      .append("svg")
      .attr("class", "bubble-chart")
      .attr("width", "1095")
      .attr("height", "900");

    let width = 1095, height = 900;
    let color = d3.scaleOrdinal(d3.schemeCategory20);

    let div = d3.select("body").append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);

    data = data.sort(function(a,b){ return b.usd - a.usd; });

    data = data.slice(0,wanted+1);
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
      .force('charge', d3.forceManyBody().strength(5))
      .force('center', d3.forceCenter(width / 3, height / 2))
      .force('collision', d3.forceCollide().radius(function(d) {
        return d.radius;
      }))
      .on('tick', ticked);

    function getRadius(d){
      return Math.log(d.usd) * 10;
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
        .attr('cx', function(d) {
          return d.x;
        })
        .attr('cy', function(d) {
          return d.y;
        })
        .attr("fill", function(d) {
          return color(d.rank);
        })
        .on("mouseover", function(d) {
          div.transition()
              .style("display", "block")
              .style("left", d.x + "px")
              .style("top", d.y + "px")
              .style("opacity", .95);
              div.html(
               "<br/>" + d.name + "<br/>" +
               "Ticker: " + d.ticker + "<br/>" +
               "Rank: " + d.rank + "<br/>" +
               "Value(usd): $" + d.usd + "<br/>");

        })
        .on("mouseout", function() {
          d3.select(".tooltip")
            .style("display", "none");
        })
        //on click pop a line chart of that currency
        .on("click", function(d) {
          d3.select(".line-page")
            .append("div")
            .attr("class", "line-chart")
            .html(
              "<script>" +
              makeLineChart(d.ticker) +
              "</script>"
            );
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
