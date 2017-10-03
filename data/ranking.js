import {MERGED_RANKING} from './ranking/merged_ranking.js';

let ranking = {};

MERGED_RANKING.forEach(coin => {
  ranking[coin.coin.ticker] = coin.coin;
});

export const result_ranking = ranking;
