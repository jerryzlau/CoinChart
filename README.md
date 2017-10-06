# CoinChart - a data visualization of Crypto-Currencies 

## Background 
As cryptocurrencies begin to gain explosive populaity in the world, it is important to visualize those data to make better judgement for investment. coinChart will attempt to compare a variety of cryptocurrencies with their historic data and market capitalization to better understand the strengthen and weakness of each currency. 

## Functionality & MVP
There will be two main webpages:
* Homepage that has all cryptocurrencies as bubble
* Currency show page with a graph to show historic price points 

## Wireframes 
### Bubble Homepage
The bubble home page will consist of bubbles to show how much each currency is worth in comparison to another. Each of these currencies will have a unique color code for better differentiation. There will be a few actions here: 
* A year selector to display the value of all currencies of that year 
* A button to go back to a live stream of currency valuation 
* OnHover: show the selected currency's stats (value, market cap, etc) in a small pop up window 
* OnClick: route to currency show page 
![Bubble homepage](https://github.com/jerryzlau/coinChart/blob/master/docs/New%20Mockup%201.png)

### Currency Showpage 
* graph that shows just one currency's historic valuation 
* button to go back to home page 
![Currency Show](https://github.com/jerryzlau/coinChart/blob/master/docs/New%20Mockup%202.png)

## Architecture and Technologies
* `JavaScript` for general application logic 
* `d3.js` for visualization 
* `webpack` for bundle js files 
* `Reactjs` to management multiple webpages 

## Implementation Timeline

### Over the weekend:

- [ ] Research resources for crypto-currency data 
- [ ] Plan out what kind of data to display and how they would shape 
- [ ] Draw out the wireframe 

### Day 1: Get all the data necessary for this project 
- [ ] Set up index.html with canvas for Three.js and webpack to bundle code.
- [ ] Set up application to fetch data from [Coinbin](https://coinbin.org/) & [CoinMarketCap](https://coinmarketcap.com/api/)
- [ ] basepath: https://coinbin.org/ & https://api.coinmarketcap.com/v1/ & https://github.com/toddmotto/public-apis#cryptocurrency
- [ ] use curl to store data into different files 
- [ ] pull data from multiple apis 
- [ ] figure out the relations of these data 

### Day 2: Use this day to learn how to use d3
- [ ] resources:  https://d3js.org/#introduction
- [ ] use this example for bubble home page: https://bl.ocks.org/mbostock/4063269
- [ ] use this example for coin show page: https://bl.ocks.org/mbostock/3883245
- [ ] start with just one currency, get the logic fully working and then move on for more

### Day 3: 
- [ ] continue working on bubble home-page 
- [ ] work on bubble hover-effects, what kind of data to show? 
- [ ] work on multiple page transition when there is time 


### Day 4: 
- [ ] At this point, bubble homepage must work, if there is time, work on currency show page

## Bonus features 
Gather political events from new sources to reflect the changes in cryptocurrency valuation 
