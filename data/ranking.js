import {MERGED_RANKING} from './ranking/merged_ranking.js';

let ranking = [];
let coins = [];

MERGED_RANKING.forEach(coin => {
  ranking.push(coin.coin);
  coins.push(coin.coin.ticker);
});

export const coin_types = coins;
export const result_ranking = ranking;
