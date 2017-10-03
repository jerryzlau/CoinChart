import * as d3 from 'd3';

let svg = d3.select("svg"),
    margin = {top: 20, right: 70, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

let g = svg.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json(`./data/history/btc_history.json`, function(error, data) {
  data = data.history;
  // console.log(data);
  data.reverse();
  if (error) throw error;

  data.forEach(function(d) {
    d.timestamp = new Date(d.timestamp);
    d.value = +d.value;
  });

  let x = d3.scaleTime()
            .domain([data[0].timestamp, data[data.length-1].timestamp] )
            .range([0, width]);
  let y = d3.scaleLinear()
            .range([height, 0]);

  let bisectDate = d3.bisector(function(d) { return d.timestamp; }).left;

  let line = d3.line()
    .x(function(d) { return x(d.timestamp); })
    .y(function(d) { return y(d.value); });

  // x.domain(d3.extent(data, function(d) { return d.timestamp; }));
  y.domain([d3.min(data, function(d) { return d.value; }), d3.max(data, function(d) { return d.value; })]);

  // x-axis line
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // y-axis line
  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(5).tickFormat(function(d) { return parseInt(d); }))
    .append("text")
      .attr("class", "axis-title")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .attr("fill", "#5D6971")
      .text("(Value)");

  g.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);

  let focus = g.append("g")
      .attr("class", "focus")
      .style("display", "none");

  focus.append("line")
      .attr("class", "x-hover-line hover-line")
      .attr("y1", 0)
      .attr("y2", height);

  focus.append("line")
      .attr("class", "y-hover-line hover-line")
      .attr("x1", 0)
      .attr("x2", 0);

  focus.append("circle")
      .attr("r", 10);

  focus.append("text")
      .attr("x", 15)
      .attr("dy", ".31em");

  svg.append("rect")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .attr("class", "overlay")
      .attr("width", width)
      .attr("height", height)
      .on("mouseover", function() { focus.style("display", null); })
      .on("mouseout", function() { focus.style("display", "none"); })
      .on("mousemove", mousemove);

  function mousemove() {
    let x0 = x.invert(d3.mouse(this)[0]);
    let i = bisectDate(data, x0, 1);
    let d0 = data[i - 1];
    let d1 = data[i];
    let  d = x0 - d0.timestamp > d1.timestamp - x0 ? d1 : d0;
    focus.attr("transform", "translate(" + x(d.timestamp) + "," + y(d.value) + ")");
    focus.select("text").text(function() { return d.value; });
    focus.select(".x-hover-line").attr("y2", height - y(d.value));
    focus.select(".y-hover-line").attr("x1", - x(d.timestamp));
  }
});