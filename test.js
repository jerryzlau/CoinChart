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
