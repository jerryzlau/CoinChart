data = data.slice(0,10);
console.log(data);

let diameter = 1000000; //max size of the bubbles
let color = d3.scaleOrdinal(d3.schemeCategory20); //color category

let bubble = d3.pack()
              .size([diameter, diameter])
              .padding(1.5);


let svg = d3.select("body")
            .append("svg")
            .attr("width", 1000000)
            .attr("height", 1000000)
            .attr("class", "bubble");

//convert numerical usds from strings to numbers
// data = data.map(function(d){ d.usd = +d["Amount"]; return d; });

// console.log(data);
//bubbles needs very specific format, convert data to this.
// let nodes = bubble.nodes({children:data}).filter(function(d) { return !d.children; });

//setup the chart
let bubbles = svg.append("g")
                 .attr("transform", "translate(0,0)")
                 .selectAll(".bubble")
                 .data(data)
                 .enter();

//create the bubbles
bubbles.append("circle")
       .attr("r", function(d){
         if (d.usd < 1){
           console.log("small circle");
           return 10;
         }else if (d.usd > 1000){
           console.log("big circle");
           return d.usd/100;
         }
       })
      //  .attr("r", function(d){ return d.rank; })
       .attr("cx", function(d){ return d.rank; })
       .attr("cy", function(d){ return d.rank; })
       .style("fill", function(d) { return color(d.rank); });

//format the text for each bubble
bubbles.append("text")
       .attr("x", function(d){ return d.rank; })
       .attr("y", function(d){ return d.rank + 5; })
       .attr("text-anchor", "middle")
       .text(function(d){ return d["ticker"]; })
       .style({
           "fill":"white",
           "font-family":"Helvetica Neue, Helvetica, Arial, san-serif",
           "font-size": "12px"
       });
}


// ========================================================================

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

let simulation = d3.forceSimulation()
.force("forceX", d3.forceX().strength(.1).x(width * .5))
.force("forceY", d3.forceY().strength(.1).y(height * .5))
.force("center", d3.forceCenter().x(width * .5).y(height * .5))
.force("charge", d3.forceManyBody().strength(-15));

// data = data.slice(0,50);

//get the small ones first
data = data.sort(function(a,b){ return a.rank - b.rank; });

data = data.slice(0,20);

console.log(data);

let node = svg.append("g")
              .attr("class", "node")
              .selectAll("circle")
              .data(data)
              .enter().append("circle")
              .attr("r", function(d) {
                let radius = Math.log(d.usd + 1);
                // if (radius < 1) radius = 10;
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

              });

simulation
.nodes(data)
.force("collide", d3.forceCollide().strength(.5).radius(function(d){ return d.radius + nodePadding; }).iterations(1))
.on("tick", function(d){
  node
      .text(function(e){ return e.ticker; })
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
