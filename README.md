# CoinChart - a data visualization for Crypto-Currencies 

[Live Website](www.coinchart.me)

## Background 
As cryptocurrencies begin to gain explosive populaity in the world, it is important to visualize those data to make better judgement for investment. CoinChart is a data visualization that compares a variety of cryptocurrencies with their historic data and market value to better understand the strengthen and weakness of each currency. 

## Usage 
### Instructions 
On hover of the helper icon, there will be instructions on how to use the website
![helper](https://github.com/jerryzlau/coinChart/blob/master/docs/demo.png)

### Historic Chart
Users have two ways to pull out historic value movement of each crypto-currencies. 
* Click on a bubble
* Search Directly by ticker, unlike the bubble chart, search bar can return all exisiting currencies
![historic-chart](https://github.com/jerryzlau/coinChart/blob/master/docs/historic_chart.png)

### Bubble Chart 
Each bubble is scaled based on their current value, therefore, it is a great way to visualize how much each coin is worth compare to others. This chart returns the top 50 most expensive coins, users have the option to scale it up or down for a smaller group comparison.
![bubble_chart](https://github.com/jerryzlau/coinChart/blob/master/docs/bubble_chart.png)

## Technologies 
### Display Bubble Chart 
I implemented the entire data visualization with d3.js. In the bubbleChart, I kept the bubbles toward the center by implementing d3 forceSimulation.
```Javascript
let simulation = d3.forceSimulation(nodes)
  .force('charge', d3.forceManyBody().strength(2))
  .force('center', d3.forceCenter(width / 2, height / 2))
  .force('collision', d3.forceCollide().radius(function(d) {
    return d.radius;
  }))
  .on('tick', ticked);
```

### Bubble Chart Interaction 
I enable each bubble the ability to be dragged to increase data interaction. And set a boundry to keep bubbles within reach.
```Javascript 
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
```


