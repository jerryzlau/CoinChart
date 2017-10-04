import * as d3 from 'd3';

class bubbleChart {
  constructor(data){
    this.render(data);
  }

  render(data){
    d3.select("body")
      .append("div")
      .attr("class", "bubble-page")
      .append("h1")
      .text("BubbleChart");

    d3.select(".bubble-page")
      .append("bubble-chart");

    let width = 1200,
        height = 500,
        sizeDivisor = 100,
        nodePadding = 2.5;

    let svg = d3.select("bubble-chart")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(0,0)");

    let color = d3.scaleOrdinal(d3.schemeCategory20);

    let div = d3.select("body").append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);

    let simulation = d3.forceSimulation()
    .force("forceX", d3.forceX().strength(.1).x(width * .5))
    .force("forceY", d3.forceY().strength(.1).y(height * .5))
    .force("center", d3.forceCenter().x(width * .5).y(height * .5))
    .force("charge", d3.forceManyBody().strength(-100));

    // data = data.slice(0,50);

    //get the small ones first
    data = data.sort(function(a,b){ return a.rank - b.rank; });

    // data = data.slice(0,40);

    console.log(data);

    let node = svg.append("g")
                  .attr("class", "node")
                  .selectAll("circle")
                  .data(data)
                  .enter().append("circle")
                  .attr("r", function(d) {
                    let radius = Math.log(d.usd + 1) * 5;
                    if (radius < 1) radius = 5;
                    return radius;
                  })
                  .attr("fill", function(d) { return color(d.rank); })
                  .attr("cx", function(d){ return d.x; })
                  .attr("cy", function(d){ return d.y; })
                  .call(d3.drag()
                      .on("start", dragstarted)
                      .on("drag", dragged)
                      .on("end", dragended))
                  .on("mouseover", function(d){
                    div.transition()
                        .duration(200)
                        .style("opacity", .95);

                        div.html(
                         "<br/>" + d.name + "<br/>" +
                         "Ticker:" + d.ticker + "<br/>" +
                         "Rank:" + d.rank + "<br/>" +
                         "Value(usd): $" + d.usd + "<br/>");
                  });

    simulation
    .nodes(data)
    .force("collide", d3.forceCollide().strength(.5).radius(function(d){ return d.radius + nodePadding; }).iterations(1))
    .on("tick", function(d){
      node
          .attr("cx", function(e){ return e.x; })
          .attr("cy", function(e){ return e.y; });
    });



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
