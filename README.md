# coinChart - a visualization project for Crypto Currency data

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
* `Ruby on Rails` to store past data in case api link is broken
* `Reactjs` to management multiple webpages 

## Implementation Timeline

### Over the weekend:

- [ ] Research resources for crypto-currency data 
- [ ] Plan out what kind of data to display and how they would shape 
- [ ] Draw out the wireframe 

### Day 1: 
- [ ] Set up index.html with canvas for Three.js and webpack to bundle code.
- [ ] Set up application to fetch data from [Coinbin](https://coinbin.org/) & [CoinMarketCap](https://coinmarketcap.com/api/)
- [ ] basepath: https://coinbin.org/ & https://api.coinmarketcap.com/v1/


### Day 2: 
- [ ]
- [ ]
- [ ]

### Day 3: 
- [ ]
- [ ]
- [ ]

### Day 4: 
- [ ]
- [ ]
- [ ]

## Bonus features 
Gather political events from new sources to reflect the changes in cryptocurrency valuation 
