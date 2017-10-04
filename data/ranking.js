import {MERGED_RANKING} from './ranking/merged_ranking.js';
// import fs from 'fs';

// let ranking = {};
//
// MERGED_RANKING.forEach(coin => {
//   ranking[coin.coin.ticker] = coin.coin;
// });

let ranking = [];
MERGED_RANKING.forEach(coin => {
  ranking.push(coin.coin);
});

export const result_ranking = ranking;
