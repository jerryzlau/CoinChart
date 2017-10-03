/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ranking = __webpack_require__(2);

console.log(_ranking.result_ranking);

// document.addEventListener('DOMContentLoaded', () => {
//   const root = document.getElementById('root');
//   ReactDOM.render(<Root store={store}  />, root);
// });

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MERGED_RANKING = exports.MERGED_RANKING = [{
  "coin": {
    "btc": 0.0,
    "name": "020LondonCoin",
    "rank": 342,
    "ticker": "020",
    "usd": 5.6e-07
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "1337",
    "rank": 235,
    "ticker": "1337",
    "usd": 5.5e-05
  }
}, {
  "coin": {
    "btc": 4.491e-05,
    "name": "1CRedit",
    "rank": 636,
    "ticker": "1cr",
    "usd": 0.197713
  }
}, {
  "coin": {
    "btc": 1.28e-06,
    "name": "2GIVE",
    "rank": 193,
    "ticker": "2give",
    "usd": 0.005624
  }
}, {
  "coin": {
    "btc": 1.93070377,
    "name": "42-coin",
    "rank": 293,
    "ticker": "42",
    "usd": 8499.46
  }
}, {
  "coin": {
    "btc": 2.68e-06,
    "name": "ChanCoin",
    "rank": 516,
    "ticker": "4chn",
    "usd": 0.011802
  }
}, {
  "coin": {
    "btc": 2.527e-05,
    "name": "SixEleven",
    "rank": 562,
    "ticker": "611",
    "usd": 0.111245
  }
}, {
  "coin": {
    "btc": 3.0e-07,
    "name": "808Coin",
    "rank": 240,
    "ticker": "808",
    "usd": 0.001319
  }
}, {
  "coin": {
    "btc": 5.8e-07,
    "name": "OctoCoin",
    "rank": 465,
    "ticker": "888",
    "usd": 0.002563
  }
}, {
  "coin": {
    "btc": 5.513e-05,
    "name": "8Bit",
    "rank": 304,
    "ticker": "8bit",
    "usd": 0.242703
  }
}, {
  "coin": {
    "btc": 1.8e-06,
    "name": "9COIN",
    "rank": 696,
    "ticker": "9coin",
    "usd": 0.007909
  }
}, {
  "coin": {
    "btc": 2.32e-05,
    "name": "Asset Backed ...",
    "rank": 881,
    "ticker": "abc",
    "usd": 0.102137
  }
}, {
  "coin": {
    "btc": 2.1e-06,
    "name": "Abncoin",
    "rank": 676,
    "ticker": "abn",
    "usd": 0.009223
  }
}, {
  "coin": {
    "btc": 1.69e-06,
    "name": "ArtByte",
    "rank": 145,
    "ticker": "aby",
    "usd": 0.007426
  }
}, {
  "coin": {
    "btc": 5.5e-07,
    "name": "AsiaCoin",
    "rank": 379,
    "ticker": "ac",
    "usd": 0.00244
  }
}, {
  "coin": {
    "btc": 6.205e-05,
    "name": "AdCoin",
    "rank": 710,
    "ticker": "acc",
    "usd": 0.272817
  }
}, {
  "coin": {
    "btc": 3.0e-08,
    "name": "Aces",
    "rank": 767,
    "ticker": "aces",
    "usd": 0.000132
  }
}, {
  "coin": {
    "btc": 9.0e-08,
    "name": "Avoncoin",
    "rank": 753,
    "ticker": "acn",
    "usd": 0.000395
  }
}, {
  "coin": {
    "btc": 2.499e-05,
    "name": "Acoin",
    "rank": 462,
    "ticker": "acoin",
    "usd": 0.110031
  }
}, {
  "coin": {
    "btc": 1.09e-06,
    "name": "AnarchistsPrime",
    "rank": 623,
    "ticker": "acp",
    "usd": 0.004789
  }
}, {
  "coin": {
    "btc": 5.7e-06,
    "name": "Cardano",
    "rank": 13,
    "ticker": "ada",
    "usd": 0.025088
  }
}, {
  "coin": {
    "btc": 3.7e-07,
    "name": "AudioCoin",
    "rank": 234,
    "ticker": "adc",
    "usd": 0.00161
  }
}, {
  "coin": {
    "btc": 6.0e-07,
    "name": "Asiadigicoin",
    "rank": 540,
    "ticker": "adcn",
    "usd": 0.002639
  }
}, {
  "coin": {
    "btc": 0.00139701,
    "name": "Aidos Kuneen",
    "rank": 44,
    "ticker": "adk",
    "usd": 6.15
  }
}, {
  "coin": {
    "btc": 9.83e-06,
    "name": "Adzcoin",
    "rank": 212,
    "ticker": "adz",
    "usd": 0.043274
  }
}, {
  "coin": {
    "btc": 0.0004952,
    "name": "Aeon",
    "rank": 61,
    "ticker": "aeon",
    "usd": 2.18
  }
}, {
  "coin": {
    "btc": 2.03e-06,
    "name": "AgrolifeCoin",
    "rank": 549,
    "ticker": "aglc",
    "usd": 0.008919
  }
}, {
  "coin": {
    "btc": 1.33e-06,
    "name": "Advanced Inte...",
    "rank": 728,
    "ticker": "aib",
    "usd": 0.005838
  }
}, {
  "coin": {
    "btc": 1.5e-06,
    "name": "Allion",
    "rank": 577,
    "ticker": "all",
    "usd": 0.00659
  }
}, {
  "coin": {
    "btc": 6.0e-08,
    "name": "Antilitecoin",
    "rank": 657,
    "ticker": "altc",
    "usd": 0.000255
  }
}, {
  "coin": {
    "btc": 2.03e-06,
    "name": "AmberCoin",
    "rank": 414,
    "ticker": "amber",
    "usd": 0.008929
  }
}, {
  "coin": {
    "btc": 1.1e-07,
    "name": "Ammo Rewards",
    "rank": 360,
    "ticker": "ammo",
    "usd": 0.000483
  }
}, {
  "coin": {
    "btc": 8.3e-07,
    "name": "AmsterdamCoin",
    "rank": 714,
    "ticker": "ams",
    "usd": 0.003635
  }
}, {
  "coin": {
    "btc": 3.379e-05,
    "name": "Anoncoin",
    "rank": 421,
    "ticker": "anc",
    "usd": 0.148768
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "Animecoin",
    "rank": 782,
    "ticker": "ani",
    "usd": 8.9e-05
  }
}, {
  "coin": {
    "btc": 8.9e-07,
    "name": "AntiBitcoin",
    "rank": 535,
    "ticker": "anti",
    "usd": 0.00391
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Antimatter",
    "rank": 830,
    "ticker": "antx",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 5.666e-05,
    "name": "AlpaCoin",
    "rank": 748,
    "ticker": "apc",
    "usd": 0.249426
  }
}, {
  "coin": {
    "btc": 0.00012078,
    "name": "AppleCoin",
    "rank": 364,
    "ticker": "apw",
    "usd": 0.531716
  }
}, {
  "coin": {
    "btc": 1.82e-06,
    "name": "ARbit",
    "rank": 548,
    "ticker": "arb",
    "usd": 0.008003
  }
}, {
  "coin": {
    "btc": 1.295e-05,
    "name": "ArcticCoin",
    "rank": 229,
    "ticker": "arc",
    "usd": 0.056988
  }
}, {
  "coin": {
    "btc": 1.435e-05,
    "name": "AquariusCoin",
    "rank": 341,
    "ticker": "arco",
    "usd": 0.06319
  }
}, {
  "coin": {
    "btc": 2.14e-06,
    "name": "Argentum",
    "rank": 517,
    "ticker": "arg",
    "usd": 0.009402
  }
}, {
  "coin": {
    "btc": 1.35e-06,
    "name": "Argus",
    "rank": 661,
    "ticker": "argus",
    "usd": 0.005926
  }
}, {
  "coin": {
    "btc": 1.1e-07,
    "name": "Aricoin",
    "rank": 536,
    "ticker": "ari",
    "usd": 0.000484
  }
}, {
  "coin": {
    "btc": 0.00064058,
    "name": "Ark",
    "rank": 19,
    "ticker": "ark",
    "usd": 2.82
  }
}, {
  "coin": {
    "btc": 1.33e-06,
    "name": "AllSafe",
    "rank": 563,
    "ticker": "asafe2",
    "usd": 0.005849
  }
}, {
  "coin": {
    "btc": 2.6e-07,
    "name": "AsicCoin",
    "rank": 761,
    "ticker": "asc",
    "usd": 0.001149
  }
}, {
  "coin": {
    "btc": 1.22e-06,
    "name": "Aseancoin",
    "rank": 794,
    "ticker": "asn",
    "usd": 0.00536
  }
}, {
  "coin": {
    "btc": 0.00021968,
    "name": "ATBCoin",
    "rank": 682,
    "ticker": "atb",
    "usd": 0.96708
  }
}, {
  "coin": {
    "btc": 0.0002794,
    "name": "ATC Coin",
    "rank": 105,
    "ticker": "atcc",
    "usd": 1.23
  }
}, {
  "coin": {
    "btc": 0.00019961,
    "name": "ATMCoin",
    "rank": 810,
    "ticker": "atmc",
    "usd": 0.878724
  }
}, {
  "coin": {
    "btc": 6.34e-06,
    "name": "Atmos",
    "rank": 197,
    "ticker": "atms",
    "usd": 0.027893
  }
}, {
  "coin": {
    "btc": 5.66e-06,
    "name": "Atomic Coin",
    "rank": 298,
    "ticker": "atom",
    "usd": 0.024923
  }
}, {
  "coin": {
    "btc": 4.0e-07,
    "name": "Artex Coin",
    "rank": 599,
    "ticker": "atx",
    "usd": 0.001759
  }
}, {
  "coin": {
    "btc": 0.00025214,
    "name": "AurumCoin",
    "rank": 419,
    "ticker": "au",
    "usd": 1.11
  }
}, {
  "coin": {
    "btc": 0.00015685,
    "name": "Auroracoin",
    "rank": 143,
    "ticker": "aur",
    "usd": 0.690512
  }
}, {
  "coin": {
    "btc": 0.00082003,
    "name": "Aureus",
    "rank": 697,
    "ticker": "aurs",
    "usd": 3.61
  }
}, {
  "coin": {
    "btc": 9.93e-06,
    "name": "AvatarCoin",
    "rank": 734,
    "ticker": "av",
    "usd": 0.043716
  }
}, {
  "coin": {
    "btc": 1.546e-05,
    "name": "AxFunds",
    "rank": 866,
    "ticker": "axf",
    "usd": 0.068043
  }
}, {
  "coin": {
    "btc": 1.91e-06,
    "name": "Axiom",
    "rank": 813,
    "ticker": "axiom",
    "usd": 0.008392
  }
}, {
  "coin": {
    "btc": 2.929e-05,
    "name": "B3Coin",
    "rank": 128,
    "ticker": "b3",
    "usd": 0.128934
  }
}, {
  "coin": {
    "btc": 6.9e-07,
    "name": "BitAlphaCoin",
    "rank": 836,
    "ticker": "bac",
    "usd": 0.003032
  }
}, {
  "coin": {
    "btc": 6.7e-07,
    "name": "LuckChain",
    "rank": 210,
    "ticker": "bash",
    "usd": 0.002952
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "BatCoin",
    "rank": 727,
    "ticker": "bat",
    "usd": 2.0e-06
  }
}, {
  "coin": {
    "btc": 6.38e-06,
    "name": "BitBay",
    "rank": 64,
    "ticker": "bay",
    "usd": 0.028055
  }
}, {
  "coin": {
    "btc": 1.2e-07,
    "name": "BiblePay",
    "rank": 493,
    "ticker": "bbp",
    "usd": 0.000527
  }
}, {
  "coin": {
    "btc": 0.03151958,
    "name": "BitConnect",
    "rank": 12,
    "ticker": "bcc",
    "usd": 138.59
  }
}, {
  "coin": {
    "btc": 9.84e-06,
    "name": "BitcoinFast",
    "rank": 325,
    "ticker": "bcf",
    "usd": 0.043321
  }
}, {
  "coin": {
    "btc": 0.09403791,
    "name": "Bitcoin Cash",
    "rank": 4,
    "ticker": "bch",
    "usd": 413.48
  }
}, {
  "coin": {
    "btc": 3.0e-07,
    "name": "Bytecoin",
    "rank": 21,
    "ticker": "bcn",
    "usd": 0.001308
  }
}, {
  "coin": {
    "btc": 0.00010927,
    "name": "Bitdeal",
    "rank": 46,
    "ticker": "bdl",
    "usd": 0.481032
  }
}, {
  "coin": {
    "btc": 3.029e-05,
    "name": "Bela",
    "rank": 155,
    "ticker": "bela",
    "usd": 0.133346
  }
}, {
  "coin": {
    "btc": 5.0e-07,
    "name": "BenjiRolls",
    "rank": 571,
    "ticker": "benji",
    "usd": 0.002221
  }
}, {
  "coin": {
    "btc": 2.9e-07,
    "name": "BERNcash",
    "rank": 502,
    "ticker": "bern",
    "usd": 0.001269
  }
}, {
  "coin": {
    "btc": 1.9e-07,
    "name": "BestChain",
    "rank": 771,
    "ticker": "best",
    "usd": 0.000848
  }
}, {
  "coin": {
    "btc": 1.9e-06,
    "name": "BetaCoin",
    "rank": 736,
    "ticker": "bet",
    "usd": 0.008368
  }
}, {
  "coin": {
    "btc": 1.7e-07,
    "name": "BagCoin",
    "rank": 865,
    "ticker": "bgc",
    "usd": 0.000741
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "Bongger",
    "rank": 837,
    "ticker": "bgr",
    "usd": 8.6e-05
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "BigUp",
    "rank": 513,
    "ticker": "bigup",
    "usd": 3.8e-05
  }
}, {
  "coin": {
    "btc": 3.08e-06,
    "name": "BioBar",
    "rank": 653,
    "ticker": "biob",
    "usd": 0.013549
  }
}, {
  "coin": {
    "btc": 4.3e-07,
    "name": "BiosCrypto",
    "rank": 581,
    "ticker": "bios",
    "usd": 0.001889
  }
}, {
  "coin": {
    "btc": 9.95e-06,
    "name": "BipCoin",
    "rank": 528,
    "ticker": "bip",
    "usd": 0.043759
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "Birds",
    "rank": 819,
    "ticker": "birds",
    "usd": 9.4e-05
  }
}, {
  "coin": {
    "btc": 0.00019952,
    "name": "Bismuth",
    "rank": 168,
    "ticker": "bis",
    "usd": 0.877275
  }
}, {
  "coin": {
    "btc": 2.38e-06,
    "name": "First Bitcoin",
    "rank": 806,
    "ticker": "bit",
    "usd": 0.010479
  }
}, {
  "coin": {
    "btc": 7.0e-07,
    "name": "BitBean",
    "rank": 134,
    "ticker": "bitb",
    "usd": 0.003096
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Bitok",
    "rank": 778,
    "ticker": "bitok",
    "usd": 4.3e-05
  }
}, {
  "coin": {
    "btc": 5.28e-06,
    "name": "Bitstar",
    "rank": 403,
    "ticker": "bits",
    "usd": 0.023195
  }
}, {
  "coin": {
    "btc": 5.982e-05,
    "name": "Bitz",
    "rank": 404,
    "ticker": "bitz",
    "usd": 0.263022
  }
}, {
  "coin": {
    "btc": 2.2e-07,
    "name": "BlakeStar",
    "rank": 313,
    "ticker": "blas",
    "usd": 0.000955
  }
}, {
  "coin": {
    "btc": 1.4e-07,
    "name": "BlazerCoin",
    "rank": 804,
    "ticker": "blazr",
    "usd": 0.000615
  }
}, {
  "coin": {
    "btc": 2.06e-06,
    "name": "Blakecoin",
    "rank": 458,
    "ticker": "blc",
    "usd": 0.009072
  }
}, {
  "coin": {
    "btc": 0.00033165,
    "name": "Blitzcash",
    "rank": 144,
    "ticker": "blitz",
    "usd": 1.46
  }
}, {
  "coin": {
    "btc": 4.494e-05,
    "name": "BlackCoin",
    "rank": 93,
    "ticker": "blk",
    "usd": 0.197843
  }
}, {
  "coin": {
    "btc": 0.00446446,
    "name": "Blocknet",
    "rank": 37,
    "ticker": "block",
    "usd": 19.63
  }
}, {
  "coin": {
    "btc": 1.47e-06,
    "name": "BillaryCoin",
    "rank": 551,
    "ticker": "blry",
    "usd": 0.006446
  }
}, {
  "coin": {
    "btc": 1.04e-06,
    "name": "BlueCoin",
    "rank": 201,
    "ticker": "blu",
    "usd": 0.004559
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "BlazeCoin",
    "rank": 622,
    "ticker": "blz",
    "usd": 3.8e-05
  }
}, {
  "coin": {
    "btc": 1.5e-07,
    "name": "BnrtxCoin",
    "rank": 646,
    "ticker": "bnx",
    "usd": 0.000659
  }
}, {
  "coin": {
    "btc": 5.9e-07,
    "name": "Doubloon",
    "rank": 560,
    "ticker": "boat",
    "usd": 0.002586
  }
}, {
  "coin": {
    "btc": 4.19e-06,
    "name": "Bolivarcoin",
    "rank": 332,
    "ticker": "boli",
    "usd": 0.018416
  }
}, {
  "coin": {
    "btc": 1.4e-06,
    "name": "BoostCoin",
    "rank": 348,
    "ticker": "bost",
    "usd": 0.006151
  }
}, {
  "coin": {
    "btc": 3.0e-08,
    "name": "BBQCoin",
    "rank": 660,
    "ticker": "bqc",
    "usd": 0.000137
  }
}, {
  "coin": {
    "btc": 1.75e-06,
    "name": "Braincoin",
    "rank": 520,
    "ticker": "brain",
    "usd": 0.007689
  }
}, {
  "coin": {
    "btc": 0.00010648,
    "name": "BriaCoin",
    "rank": 330,
    "ticker": "bria",
    "usd": 0.46875
  }
}, {
  "coin": {
    "btc": 7.92e-06,
    "name": "BritCoin",
    "rank": 268,
    "ticker": "brit",
    "usd": 0.034803
  }
}, {
  "coin": {
    "btc": 3.539e-05,
    "name": "Breakout",
    "rank": 196,
    "ticker": "brk",
    "usd": 0.155789
  }
}, {
  "coin": {
    "btc": 2.237e-05,
    "name": "Bitradio",
    "rank": 400,
    "ticker": "bro",
    "usd": 0.098464
  }
}, {
  "coin": {
    "btc": 0.00012459,
    "name": "Breakout Stake",
    "rank": 182,
    "ticker": "brx",
    "usd": 0.547826
  }
}, {
  "coin": {
    "btc": 7.1e-07,
    "name": "BowsCoin",
    "rank": 639,
    "ticker": "bsc",
    "usd": 0.003113
  }
}, {
  "coin": {
    "btc": 0.0001045,
    "name": "BitSend",
    "rank": 129,
    "ticker": "bsd",
    "usd": 0.460027
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Blackstar",
    "rank": 611,
    "ticker": "bstar",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 1.68e-06,
    "name": "GlobalBoost-Y",
    "rank": 495,
    "ticker": "bsty",
    "usd": 0.007368
  }
}, {
  "coin": {
    "btc": 0.00018012,
    "name": "Bata",
    "rank": 173,
    "ticker": "bta",
    "usd": 0.792937
  }
}, {
  "coin": {
    "btc": 0.00216253,
    "name": "BitBar",
    "rank": 418,
    "ticker": "btb",
    "usd": 9.52
  }
}, {
  "coin": {
    "btc": 1.0,
    "name": "Bitcoin",
    "rank": 1,
    "ticker": "btc",
    "usd": 4396.95
  }
}, {
  "coin": {
    "btc": 0.022309,
    "name": "BitcoinDark",
    "rank": 32,
    "ticker": "btcd",
    "usd": 98.21
  }
}, {
  "coin": {
    "btc": 1.4e-07,
    "name": "Bitcurrency",
    "rank": 483,
    "ticker": "btcr",
    "usd": 0.000635
  }
}, {
  "coin": {
    "btc": 2.4e-06,
    "name": "Bitcoin Scrypt",
    "rank": 448,
    "ticker": "btcs",
    "usd": 0.010555
  }
}, {
  "coin": {
    "btc": 9.977e-05,
    "name": "Bitcloud",
    "rank": 700,
    "ticker": "btdx",
    "usd": 0.43869
  }
}, {
  "coin": {
    "btc": 0.00015951,
    "name": "Bitgem",
    "rank": 825,
    "ticker": "btg",
    "usd": 0.702188
  }
}, {
  "coin": {
    "btc": 0.0001116,
    "name": "Bitmark",
    "rank": 183,
    "ticker": "btm",
    "usd": 0.490682
  }
}, {
  "coin": {
    "btc": 5.1e-07,
    "name": "Bitcoin Planet",
    "rank": 654,
    "ticker": "btpl",
    "usd": 0.002236
  }
}, {
  "coin": {
    "btc": 8.5e-07,
    "name": "BitQuark",
    "rank": 612,
    "ticker": "btq",
    "usd": 0.003735
  }
}, {
  "coin": {
    "btc": 1.765e-05,
    "name": "BitShares",
    "rank": 25,
    "ticker": "bts",
    "usd": 0.077687
  }
}, {
  "coin": {
    "btc": 0.10222022,
    "name": "Bitcoin Unlim...",
    "rank": 706,
    "ticker": "btu",
    "usd": 450.0
  }
}, {
  "coin": {
    "btc": 1.8e-07,
    "name": "BitcoinTX",
    "rank": 544,
    "ticker": "btx",
    "usd": 0.000779
  }
}, {
  "coin": {
    "btc": 1.994e-05,
    "name": "Bubble",
    "rank": 725,
    "ticker": "bub",
    "usd": 0.087694
  }
}, {
  "coin": {
    "btc": 0.00018547,
    "name": "SwagBucks",
    "rank": 316,
    "ticker": "bucks",
    "usd": 0.816483
  }
}, {
  "coin": {
    "btc": 6.9e-07,
    "name": "BumbaCoin",
    "rank": 537,
    "ticker": "bumba",
    "usd": 0.003025
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "BunnyCoin",
    "rank": 391,
    "ticker": "bun",
    "usd": 8.0e-06
  }
}, {
  "coin": {
    "btc": 2.02e-06,
    "name": "Burst",
    "rank": 89,
    "ticker": "burst",
    "usd": 0.008908
  }
}, {
  "coin": {
    "btc": 2.3e-07,
    "name": "BuzzCoin",
    "rank": 687,
    "ticker": "buzz",
    "usd": 0.000992
  }
}, {
  "coin": {
    "btc": 3.34e-06,
    "name": "BeaverCoin",
    "rank": 568,
    "ticker": "bvc",
    "usd": 0.014696
  }
}, {
  "coin": {
    "btc": 5.2e-07,
    "name": "Bitcedi",
    "rank": 788,
    "ticker": "bxc",
    "usd": 0.002285
  }
}, {
  "coin": {
    "btc": 3.632e-05,
    "name": "BitTokens",
    "rank": 505,
    "ticker": "bxt",
    "usd": 0.159899
  }
}, {
  "coin": {
    "btc": 0.00013976,
    "name": "Bytecent",
    "rank": 249,
    "ticker": "byc",
    "usd": 0.615239
  }
}, {
  "coin": {
    "btc": 2.2e-07,
    "name": "Coin2.1",
    "rank": 491,
    "ticker": "c2",
    "usd": 0.000974
  }
}, {
  "coin": {
    "btc": 6.6e-07,
    "name": "Cabbage",
    "rank": 605,
    "ticker": "cab",
    "usd": 0.0029
  }
}, {
  "coin": {
    "btc": 4.12e-06,
    "name": "CacheCoin",
    "rank": 519,
    "ticker": "cach",
    "usd": 0.018116
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "CageCoin",
    "rank": 378,
    "ticker": "cage",
    "usd": 2.7e-05
  }
}, {
  "coin": {
    "btc": 2.5e-07,
    "name": "CaliphCoin",
    "rank": 678,
    "ticker": "calc",
    "usd": 0.001096
  }
}, {
  "coin": {
    "btc": 7.37e-06,
    "name": "CannabisCoin",
    "rank": 203,
    "ticker": "cann",
    "usd": 0.032408
  }
}, {
  "coin": {
    "btc": 2.1e-07,
    "name": "Bottlecaps",
    "rank": 450,
    "ticker": "cap",
    "usd": 0.00092
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Carboncoin",
    "rank": 394,
    "ticker": "carbon",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 1.2e-07,
    "name": "Cashcoin",
    "rank": 648,
    "ticker": "cash",
    "usd": 0.000526
  }
}, {
  "coin": {
    "btc": 2.59e-06,
    "name": "Catcoin",
    "rank": 534,
    "ticker": "cat",
    "usd": 0.01138
  }
}, {
  "coin": {
    "btc": 3.2e-07,
    "name": "CBD Crystals",
    "rank": 809,
    "ticker": "cbd",
    "usd": 0.001403
  }
}, {
  "coin": {
    "btc": 0.00045031,
    "name": "Crypto Bullion",
    "rank": 211,
    "ticker": "cbx",
    "usd": 1.98
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "CyberCoin",
    "rank": 802,
    "ticker": "cc",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 1.502e-05,
    "name": "Cannacoin",
    "rank": 296,
    "ticker": "ccn",
    "usd": 0.066027
  }
}, {
  "coin": {
    "btc": 0.00011353,
    "name": "CryptoCarbon",
    "rank": 217,
    "ticker": "ccrb",
    "usd": 0.499809
  }
}, {
  "coin": {
    "btc": 1.4e-06,
    "name": "Canada eCoin",
    "rank": 399,
    "ticker": "cdn",
    "usd": 0.006147
  }
}, {
  "coin": {
    "btc": 6.0e-08,
    "name": "CryptoEscudo",
    "rank": 358,
    "ticker": "cesc",
    "usd": 0.000263
  }
}, {
  "coin": {
    "btc": 4.39e-06,
    "name": "Californium",
    "rank": 673,
    "ticker": "cf",
    "usd": 0.019293
  }
}, {
  "coin": {
    "btc": 6.318e-05,
    "name": "ChainCoin",
    "rank": 166,
    "ticker": "chc",
    "usd": 0.277796
  }
}, {
  "coin": {
    "btc": 3.0e-08,
    "name": "Cheapcoin",
    "rank": 823,
    "ticker": "cheap",
    "usd": 0.000132
  }
}, {
  "coin": {
    "btc": 5.3e-07,
    "name": "ChessCoin",
    "rank": 467,
    "ticker": "chess",
    "usd": 0.002336
  }
}, {
  "coin": {
    "btc": 4.991e-05,
    "name": "CHIPS",
    "rank": 189,
    "ticker": "chips",
    "usd": 0.219725
  }
}, {
  "coin": {
    "btc": 7.0e-08,
    "name": "Cryptojacks",
    "rank": 335,
    "ticker": "cj",
    "usd": 0.000308
  }
}, {
  "coin": {
    "btc": 0.00216969,
    "name": "Clams",
    "rank": 70,
    "ticker": "clam",
    "usd": 9.54
  }
}, {
  "coin": {
    "btc": 1.66e-06,
    "name": "Clinton",
    "rank": 825,
    "ticker": "clint",
    "usd": 0.007279
  }
}, {
  "coin": {
    "btc": 0.00161054,
    "name": "CloakCoin",
    "rank": 56,
    "ticker": "cloak",
    "usd": 7.09
  }
}, {
  "coin": {
    "btc": 9.42e-05,
    "name": "ClubCoin",
    "rank": 688,
    "ticker": "club",
    "usd": 0.414704
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Cashme",
    "rank": 867,
    "ticker": "cme",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 0.00088818,
    "name": "Compcoin",
    "rank": 87,
    "ticker": "cmp",
    "usd": 3.91
  }
}, {
  "coin": {
    "btc": 1.3e-07,
    "name": "CampusCoin",
    "rank": 343,
    "ticker": "cmpco",
    "usd": 0.00058
  }
}, {
  "coin": {
    "btc": 1.234e-05,
    "name": "Comet",
    "rank": 561,
    "ticker": "cmt",
    "usd": 0.054325
  }
}, {
  "coin": {
    "btc": 2.3e-07,
    "name": "CHNCoin",
    "rank": 356,
    "ticker": "cnc",
    "usd": 0.001001
  }
}, {
  "coin": {
    "btc": 7.67e-06,
    "name": "Cannation",
    "rank": 510,
    "ticker": "cnnc",
    "usd": 0.033787
  }
}, {
  "coin": {
    "btc": 1.7e-07,
    "name": "Coin(O)",
    "rank": 518,
    "ticker": "cno",
    "usd": 0.000734
  }
}, {
  "coin": {
    "btc": 2.024e-05,
    "name": "Centurion",
    "rank": 208,
    "ticker": "cnt",
    "usd": 0.089105
  }
}, {
  "coin": {
    "btc": 1.56e-06,
    "name": "BitCoal",
    "rank": 603,
    "ticker": "coal",
    "usd": 0.006858
  }
}, {
  "coin": {
    "btc": 3.0e-08,
    "name": "ColossusCoinXT",
    "rank": 694,
    "ticker": "colx",
    "usd": 0.000131
  }
}, {
  "coin": {
    "btc": 9.0e-07,
    "name": "PayCon",
    "rank": 499,
    "ticker": "con",
    "usd": 0.003974
  }
}, {
  "coin": {
    "btc": 4.03e-06,
    "name": "Concoin",
    "rank": 651,
    "ticker": "conx",
    "usd": 0.01775
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "CorgiCoin",
    "rank": 340,
    "ticker": "corg",
    "usd": 8.8e-05
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "Coupecoin",
    "rank": 739,
    "ticker": "coupe",
    "usd": 3.0e-06
  }
}, {
  "coin": {
    "btc": 0.00012875,
    "name": "Capricoin",
    "rank": 247,
    "ticker": "cpc",
    "usd": 0.566779
  }
}, {
  "coin": {
    "btc": 4.7e-07,
    "name": "CompuCoin",
    "rank": 578,
    "ticker": "cpn",
    "usd": 0.002063
  }
}, {
  "coin": {
    "btc": 0.00066865,
    "name": "Crave",
    "rank": 171,
    "ticker": "crave",
    "usd": 2.94
  }
}, {
  "coin": {
    "btc": 4.403e-05,
    "name": "Creativecoin",
    "rank": 205,
    "ticker": "crea",
    "usd": 0.193836
  }
}, {
  "coin": {
    "btc": 2.5e-07,
    "name": "CrevaCoin",
    "rank": 357,
    "ticker": "creva",
    "usd": 0.001098
  }
}, {
  "coin": {
    "btc": 3.92e-06,
    "name": "Cream",
    "rank": 264,
    "ticker": "crm",
    "usd": 0.01725
  }
}, {
  "coin": {
    "btc": 4.791e-05,
    "name": "CRTCoin",
    "rank": 642,
    "ticker": "crt",
    "usd": 0.210894
  }
}, {
  "coin": {
    "btc": 0.00032256,
    "name": "Crown",
    "rank": 77,
    "ticker": "crw",
    "usd": 1.42
  }
}, {
  "coin": {
    "btc": 2.1e-07,
    "name": "Chronos",
    "rank": 538,
    "ticker": "crx",
    "usd": 0.000912
  }
}, {
  "coin": {
    "btc": 3.808e-05,
    "name": "CryptCoin",
    "rank": 387,
    "ticker": "crypt",
    "usd": 0.167452
  }
}, {
  "coin": {
    "btc": 1.685e-05,
    "name": "CasinoCoin",
    "rank": 194,
    "ticker": "csc",
    "usd": 0.074165
  }
}, {
  "coin": {
    "btc": 7.5e-07,
    "name": "Coimatic 2.0",
    "rank": 362,
    "ticker": "ctic2",
    "usd": 0.003297
  }
}, {
  "coin": {
    "btc": 1.18e-06,
    "name": "Crypto",
    "rank": 547,
    "ticker": "cto",
    "usd": 0.005174
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "DigiCube",
    "rank": 484,
    "ticker": "cube",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 5.389e-05,
    "name": "Curecoin",
    "rank": 148,
    "ticker": "cure",
    "usd": 0.236943
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Colossuscoin V2",
    "rank": 241,
    "ticker": "cv2",
    "usd": 5.2e-05
  }
}, {
  "coin": {
    "btc": 6.0e-07,
    "name": "CryptoWorldX ...",
    "rank": 329,
    "ticker": "cwxt",
    "usd": 0.002636
  }
}, {
  "coin": {
    "btc": 1.0e-06,
    "name": "Coinonat",
    "rank": 359,
    "ticker": "cxt",
    "usd": 0.004376
  }
}, {
  "coin": {
    "btc": 3.1e-07,
    "name": "Cycling Coin",
    "rank": 810,
    "ticker": "cyc",
    "usd": 0.001359
  }
}, {
  "coin": {
    "btc": 1.3e-07,
    "name": "Cyder",
    "rank": 731,
    "ticker": "cyder",
    "usd": 0.000571
  }
}, {
  "coin": {
    "btc": 4.11e-06,
    "name": "Cypher",
    "rank": 477,
    "ticker": "cyp",
    "usd": 0.018082
  }
}, {
  "coin": {
    "btc": 3.776e-05,
    "name": "DAS",
    "rank": 287,
    "ticker": "das",
    "usd": 0.166218
  }
}, {
  "coin": {
    "btc": 0.07068309,
    "name": "Dash",
    "rank": 6,
    "ticker": "dash",
    "usd": 310.79
  }
}, {
  "coin": {
    "btc": 7.19e-06,
    "name": "Dashs",
    "rank": 707,
    "ticker": "dashs",
    "usd": 0.031634
  }
}, {
  "coin": {
    "btc": 1.01e-06,
    "name": "DaxxCoin",
    "rank": 209,
    "ticker": "daxx",
    "usd": 0.004453
  }
}, {
  "coin": {
    "btc": 5.8e-07,
    "name": "Digital Bulli...",
    "rank": 823,
    "ticker": "dbg",
    "usd": 0.002548
  }
}, {
  "coin": {
    "btc": 0.00088698,
    "name": "DubaiCoin",
    "rank": 162,
    "ticker": "dbix",
    "usd": 3.9
  }
}, {
  "coin": {
    "btc": 8.2e-07,
    "name": "Debitcoin",
    "rank": 542,
    "ticker": "dbtc",
    "usd": 0.003603
  }
}, {
  "coin": {
    "btc": 0.00795046,
    "name": "Decred",
    "rank": 24,
    "ticker": "dcr",
    "usd": 35.0
  }
}, {
  "coin": {
    "btc": 2.591e-05,
    "name": "DeltaCredits",
    "rank": 851,
    "ticker": "dcre",
    "usd": 0.114041
  }
}, {
  "coin": {
    "btc": 0.00014263,
    "name": "DECENT",
    "rank": 60,
    "ticker": "dct",
    "usd": 0.627135
  }
}, {
  "coin": {
    "btc": 1.2e-07,
    "name": "Dinastycoin",
    "rank": 271,
    "ticker": "dcy",
    "usd": 0.000535
  }
}, {
  "coin": {
    "btc": 2.47e-06,
    "name": "Deutsche eMark",
    "rank": 299,
    "ticker": "dem",
    "usd": 0.010865
  }
}, {
  "coin": {
    "btc": 3.98e-06,
    "name": "Destiny",
    "rank": 610,
    "ticker": "des",
    "usd": 0.017531
  }
}, {
  "coin": {
    "btc": 0.00012485,
    "name": "DeusCoin",
    "rank": 702,
    "ticker": "deus",
    "usd": 0.548965
  }
}, {
  "coin": {
    "btc": 7.2e-06,
    "name": "DFSCoin",
    "rank": 694,
    "ticker": "dfs",
    "usd": 0.031659
  }
}, {
  "coin": {
    "btc": 5.732e-05,
    "name": "DraftCoin",
    "rank": 407,
    "ticker": "dft",
    "usd": 0.252326
  }
}, {
  "coin": {
    "btc": 3.63e-06,
    "name": "DigiByte",
    "rank": 30,
    "ticker": "dgb",
    "usd": 0.015977
  }
}, {
  "coin": {
    "btc": 8.3e-07,
    "name": "Digitalcoin",
    "rank": 490,
    "ticker": "dgc",
    "usd": 0.003649
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "Digital Credits",
    "rank": 374,
    "ticker": "dgcs",
    "usd": 8.8e-05
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "Dimecoin",
    "rank": 172,
    "ticker": "dime",
    "usd": 8.0e-06
  }
}, {
  "coin": {
    "btc": 1.5e-07,
    "name": "DarkLisk",
    "rank": 796,
    "ticker": "disk",
    "usd": 0.000659
  }
}, {
  "coin": {
    "btc": 2.23e-06,
    "name": "Dollarcoin",
    "rank": 504,
    "ticker": "dlc",
    "usd": 0.009803
  }
}, {
  "coin": {
    "btc": 4.0e-08,
    "name": "DAPPSTER",
    "rank": 634,
    "ticker": "dlisk",
    "usd": 0.000176
  }
}, {
  "coin": {
    "btc": 2.5e-07,
    "name": "Digital Money...",
    "rank": 375,
    "ticker": "dmb",
    "usd": 0.001081
  }
}, {
  "coin": {
    "btc": 0.00022716,
    "name": "DynamicCoin",
    "rank": 681,
    "ticker": "dmc",
    "usd": 1.0
  }
}, {
  "coin": {
    "btc": 0.0022743,
    "name": "Diamond",
    "rank": 72,
    "ticker": "dmd",
    "usd": 10.0
  }
}, {
  "coin": {
    "btc": 6.881e-05,
    "name": "Denarius",
    "rank": 283,
    "ticker": "dnr",
    "usd": 0.302903
  }
}, {
  "coin": {
    "btc": 2.4e-07,
    "name": "Dogecoin",
    "rank": 33,
    "ticker": "doge",
    "usd": 0.001064
  }
}, {
  "coin": {
    "btc": 5.43e-06,
    "name": "Dollar Online",
    "rank": 633,
    "ticker": "dollar",
    "usd": 0.023897
  }
}, {
  "coin": {
    "btc": 9.0e-08,
    "name": "Donationcoin",
    "rank": 781,
    "ticker": "don",
    "usd": 0.000395
  }
}, {
  "coin": {
    "btc": 7.66e-06,
    "name": "DopeCoin",
    "rank": 179,
    "ticker": "dope",
    "usd": 0.033678
  }
}, {
  "coin": {
    "btc": 1.1e-06,
    "name": "Dotcoin",
    "rank": 239,
    "ticker": "dot",
    "usd": 0.004817
  }
}, {
  "coin": {
    "btc": 1.039e-05,
    "name": "DigitalPrice",
    "rank": 267,
    "ticker": "dp",
    "usd": 0.045761
  }
}, {
  "coin": {
    "btc": 4.0e-08,
    "name": "DPAY",
    "rank": 649,
    "ticker": "dpay",
    "usd": 0.000176
  }
}, {
  "coin": {
    "btc": 3.89e-06,
    "name": "Dreamcoin",
    "rank": 574,
    "ticker": "drm",
    "usd": 0.01713
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "Digital Rupees",
    "rank": 572,
    "ticker": "drs",
    "usd": 8.8e-05
  }
}, {
  "coin": {
    "btc": 2.8e-07,
    "name": "DROXNE",
    "rank": 347,
    "ticker": "drxne",
    "usd": 0.001226
  }
}, {
  "coin": {
    "btc": 3.95e-06,
    "name": "Dashcoin",
    "rank": 297,
    "ticker": "dsh",
    "usd": 0.017383
  }
}, {
  "coin": {
    "btc": 1.0e-07,
    "name": "Digitalfund",
    "rank": 864,
    "ticker": "dtf",
    "usd": 0.000451
  }
}, {
  "coin": {
    "btc": 2.5e-07,
    "name": "Dubstep",
    "rank": 827,
    "ticker": "dub",
    "usd": 0.001098
  }
}, {
  "coin": {
    "btc": 6.526e-05,
    "name": "ParallelCoin",
    "rank": 508,
    "ticker": "duo",
    "usd": 0.287299
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "Devcoin",
    "rank": 426,
    "ticker": "dvc",
    "usd": 2.0e-05
  }
}, {
  "coin": {
    "btc": 0.00061634,
    "name": "Dynamic",
    "rank": 160,
    "ticker": "dyn",
    "usd": 2.71
  }
}, {
  "coin": {
    "btc": 3.0e-08,
    "name": "EarthCoin",
    "rank": 382,
    "ticker": "eac",
    "usd": 0.000132
  }
}, {
  "coin": {
    "btc": 3.81e-05,
    "name": "eBoost",
    "rank": 112,
    "ticker": "ebst",
    "usd": 0.167748
  }
}, {
  "coin": {
    "btc": 3.5e-07,
    "name": "Ebittree Coin",
    "rank": 372,
    "ticker": "ebt",
    "usd": 0.001535
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "Electra",
    "rank": 307,
    "ticker": "eca",
    "usd": 1.3e-05
  }
}, {
  "coin": {
    "btc": 6.0e-08,
    "name": "E-Currency Coin",
    "rank": 135,
    "ticker": "ecc",
    "usd": 0.000264
  }
}, {
  "coin": {
    "btc": 0.00072917,
    "name": "E-coin",
    "rank": 104,
    "ticker": "ecn",
    "usd": 3.21
  }
}, {
  "coin": {
    "btc": 4.409e-05,
    "name": "EcoCoin",
    "rank": 321,
    "ticker": "eco",
    "usd": 0.194108
  }
}, {
  "coin": {
    "btc": 2.25e-06,
    "name": "E-Dinar Coin",
    "rank": 119,
    "ticker": "edr",
    "usd": 0.009887
  }
}, {
  "coin": {
    "btc": 6.45e-06,
    "name": "EDRCoin",
    "rank": 773,
    "ticker": "edrc",
    "usd": 0.028374
  }
}, {
  "coin": {
    "btc": 2.503e-05,
    "name": "e-Gulden",
    "rank": 221,
    "ticker": "efl",
    "usd": 0.110204
  }
}, {
  "coin": {
    "btc": 5.177e-05,
    "name": "EverGreenCoin",
    "rank": 190,
    "ticker": "egc",
    "usd": 0.227644
  }
}, {
  "coin": {
    "btc": 3.81e-06,
    "name": "EggCoin",
    "rank": 850,
    "ticker": "egg",
    "usd": 0.016753
  }
}, {
  "coin": {
    "btc": 6.0e-08,
    "name": "EGO",
    "rank": 644,
    "ticker": "ego",
    "usd": 0.000258
  }
}, {
  "coin": {
    "btc": 5.0e-06,
    "name": "Elcoin",
    "rank": 311,
    "ticker": "el",
    "usd": 0.021972
  }
}, {
  "coin": {
    "btc": 2.639e-05,
    "name": "Elacoin",
    "rank": 764,
    "ticker": "elc",
    "usd": 0.116182
  }
}, {
  "coin": {
    "btc": 9.8e-07,
    "name": "Elementrem",
    "rank": 339,
    "ticker": "ele",
    "usd": 0.004297
  }
}, {
  "coin": {
    "btc": 1.3e-07,
    "name": "Elysium",
    "rank": 671,
    "ticker": "els",
    "usd": 0.000571
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "EmberCoin",
    "rank": 163,
    "ticker": "emb",
    "usd": 8.8e-05
  }
}, {
  "coin": {
    "btc": 2.829e-05,
    "name": "Einsteinium",
    "rank": 66,
    "ticker": "emc2",
    "usd": 0.124379
  }
}, {
  "coin": {
    "btc": 0.000151,
    "name": "Emercoin",
    "rank": 65,
    "ticker": "emc",
    "usd": 0.664721
  }
}, {
  "coin": {
    "btc": 1.72e-06,
    "name": "Emerald Crypto",
    "rank": 457,
    "ticker": "emd",
    "usd": 0.007541
  }
}, {
  "coin": {
    "btc": 1.244e-05,
    "name": "EMoneyPower",
    "rank": 280,
    "ticker": "emp",
    "usd": 0.054677
  }
}, {
  "coin": {
    "btc": 2.634e-05,
    "name": "Energycoin",
    "rank": 98,
    "ticker": "enrg",
    "usd": 0.115799
  }
}, {
  "coin": {
    "btc": 3.624e-05,
    "name": "Eternity",
    "rank": 275,
    "ticker": "ent",
    "usd": 0.159356
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "Environ",
    "rank": 674,
    "ticker": "env",
    "usd": 1.2e-05
  }
}, {
  "coin": {
    "btc": 0.0001347,
    "name": "EquiTrader",
    "rank": 149,
    "ticker": "eqt",
    "usd": 0.593005
  }
}, {
  "coin": {
    "btc": 0.00011065,
    "name": "EuropeCoin",
    "rank": 162,
    "ticker": "erc",
    "usd": 0.487121
  }
}, {
  "coin": {
    "btc": 1.7e-06,
    "name": "Eryllium",
    "rank": 589,
    "ticker": "ery",
    "usd": 0.007479
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "Espers",
    "rank": 216,
    "ticker": "esp",
    "usd": 8.9e-05
  }
}, {
  "coin": {
    "btc": 0.00283264,
    "name": "Ethereum Classic",
    "rank": 11,
    "ticker": "etc",
    "usd": 12.47
  }
}, {
  "coin": {
    "btc": 0.0673813,
    "name": "Ethereum",
    "rank": 2,
    "ticker": "eth",
    "usd": 296.63
  }
}, {
  "coin": {
    "btc": 0.0001682,
    "name": "Ethereum Dark",
    "rank": 248,
    "ticker": "ethd",
    "usd": 0.740476
  }
}, {
  "coin": {
    "btc": 0.00029303,
    "name": "Metaverse ETP",
    "rank": 63,
    "ticker": "etp",
    "usd": 1.29
  }
}, {
  "coin": {
    "btc": 1.91e-06,
    "name": "Eurocoin",
    "rank": 488,
    "ticker": "euc",
    "usd": 0.008411
  }
}, {
  "coin": {
    "btc": 8.7e-07,
    "name": "Evil Coin",
    "rank": 512,
    "ticker": "evil",
    "usd": 0.003845
  }
}, {
  "coin": {
    "btc": 5.08e-06,
    "name": "Evotion",
    "rank": 531,
    "ticker": "evo",
    "usd": 0.022353
  }
}, {
  "coin": {
    "btc": 0.00029076,
    "name": "ExclusiveCoin",
    "rank": 151,
    "ticker": "excl",
    "usd": 1.28
  }
}, {
  "coin": {
    "btc": 9.0e-08,
    "name": "Excelcoin",
    "rank": 771,
    "ticker": "exl",
    "usd": 0.000395
  }
}, {
  "coin": {
    "btc": 0.00047476,
    "name": "Expanse",
    "rank": 88,
    "ticker": "exp",
    "usd": 2.09
  }
}, {
  "coin": {
    "btc": 0.00016905,
    "name": "FairCoin",
    "rank": 53,
    "ticker": "fair",
    "usd": 0.743293
  }
}, {
  "coin": {
    "btc": 0.00047988,
    "name": "Falcoin",
    "rank": 288,
    "ticker": "fal",
    "usd": 2.11
  }
}, {
  "coin": {
    "btc": 6.3e-07,
    "name": "Fazzcoin",
    "rank": 792,
    "ticker": "fazz",
    "usd": 0.002762
  }
}, {
  "coin": {
    "btc": 1.7e-07,
    "name": "FiboCoins",
    "rank": 851,
    "ticker": "fbc",
    "usd": 0.000751
  }
}, {
  "coin": {
    "btc": 6.1e-07,
    "name": "FuelCoin",
    "rank": 427,
    "ticker": "fc2",
    "usd": 0.002675
  }
}, {
  "coin": {
    "btc": 2.794e-05,
    "name": "Fantomcoin",
    "rank": 266,
    "ticker": "fcn",
    "usd": 0.123021
  }
}, {
  "coin": {
    "btc": 0.00390498,
    "name": "Factom",
    "rank": 29,
    "ticker": "fct",
    "usd": 17.17
  }
}, {
  "coin": {
    "btc": 2.3e-07,
    "name": "Future Digita...",
    "rank": 669,
    "ticker": "fdc",
    "usd": 0.001011
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "FedoraShare",
    "rank": 879,
    "ticker": "feds",
    "usd": 8.0e-06
  }
}, {
  "coin": {
    "btc": 2.7e-07,
    "name": "Fuda Energy",
    "rank": 856,
    "ticker": "fei",
    "usd": 0.001202
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "FireFlyCoin",
    "rank": 774,
    "ticker": "ffc",
    "usd": 6.3e-05
  }
}, {
  "coin": {
    "btc": 1.994e-05,
    "name": "BITFID",
    "rank": 743,
    "ticker": "fid",
    "usd": 0.087694
  }
}, {
  "coin": {
    "btc": 2.2e-07,
    "name": "FIMKrypto",
    "rank": 401,
    "ticker": "fimk",
    "usd": 0.000965
  }
}, {
  "coin": {
    "btc": 0.0001845,
    "name": "Firecoin",
    "rank": 514,
    "ticker": "fire",
    "usd": 0.811259
  }
}, {
  "coin": {
    "btc": 1.5e-07,
    "name": "FujiCoin",
    "rank": 269,
    "ticker": "fjc",
    "usd": 0.000647
  }
}, {
  "coin": {
    "btc": 9.8e-07,
    "name": "Flash",
    "rank": 721,
    "ticker": "flash",
    "usd": 0.004306
  }
}, {
  "coin": {
    "btc": 7.49e-06,
    "name": "Flaxscript",
    "rank": 324,
    "ticker": "flax",
    "usd": 0.032952
  }
}, {
  "coin": {
    "btc": 1.648e-05,
    "name": "FlorinCoin",
    "rank": 110,
    "ticker": "flo",
    "usd": 0.072455
  }
}, {
  "coin": {
    "btc": 1.4e-07,
    "name": "FlutterCoin",
    "rank": 437,
    "ticker": "flt",
    "usd": 0.000614
  }
}, {
  "coin": {
    "btc": 3.7e-07,
    "name": "FlavorCoin",
    "rank": 594,
    "ticker": "flvr",
    "usd": 0.001626
  }
}, {
  "coin": {
    "btc": 0.0002297,
    "name": "Flycoin",
    "rank": 434,
    "ticker": "fly",
    "usd": 1.01
  }
}, {
  "coin": {
    "btc": 1.013e-05,
    "name": "FinCoin",
    "rank": 278,
    "ticker": "fnc",
    "usd": 0.044589
  }
}, {
  "coin": {
    "btc": 6.0e-08,
    "name": "Fonziecoin",
    "rank": 793,
    "ticker": "fonz",
    "usd": 0.000264
  }
}, {
  "coin": {
    "btc": 7.3e-07,
    "name": "Frazcoin",
    "rank": 617,
    "ticker": "fraz",
    "usd": 0.003202
  }
}, {
  "coin": {
    "btc": 1.0e-06,
    "name": "Freicoin",
    "rank": 466,
    "ticker": "frc",
    "usd": 0.004394
  }
}, {
  "coin": {
    "btc": 0.0017171,
    "name": "Fargocoin",
    "rank": 680,
    "ticker": "frgc",
    "usd": 7.55
  }
}, {
  "coin": {
    "btc": 1.939e-05,
    "name": "Franko",
    "rank": 554,
    "ticker": "frk",
    "usd": 0.08535
  }
}, {
  "coin": {
    "btc": 1.249e-05,
    "name": "Francs",
    "rank": 320,
    "ticker": "frn",
    "usd": 0.054984
  }
}, {
  "coin": {
    "btc": 0.00234253,
    "name": "FirstCoin",
    "rank": 34,
    "ticker": "frst",
    "usd": 10.3
  }
}, {
  "coin": {
    "btc": 6.2e-07,
    "name": "FrankyWillCoin",
    "rank": 763,
    "ticker": "frwc",
    "usd": 0.002719
  }
}, {
  "coin": {
    "btc": 1.76e-06,
    "name": "Fastcoin",
    "rank": 255,
    "ticker": "fst",
    "usd": 0.00775
  }
}, {
  "coin": {
    "btc": 1.022e-05,
    "name": "Feathercoin",
    "rank": 126,
    "ticker": "ftc",
    "usd": 0.044919
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "The Cypherfunks",
    "rank": 445,
    "ticker": "funk",
    "usd": 4.0e-06
  }
}, {
  "coin": {
    "btc": 7.5e-07,
    "name": "FutCoin",
    "rank": 724,
    "ticker": "futc",
    "usd": 0.003295
  }
}, {
  "coin": {
    "btc": 8.1e-07,
    "name": "FuzzBalls",
    "rank": 640,
    "ticker": "fuzz",
    "usd": 0.003552
  }
}, {
  "coin": {
    "btc": 1.26e-06,
    "name": "G3N",
    "rank": 575,
    "ticker": "g3n",
    "usd": 0.005536
  }
}, {
  "coin": {
    "btc": 2.92e-06,
    "name": "GAIA",
    "rank": 422,
    "ticker": "gaia",
    "usd": 0.012839
  }
}, {
  "coin": {
    "btc": 4.0e-08,
    "name": "UGAIN",
    "rank": 822,
    "ticker": "gain",
    "usd": 0.000175
  }
}, {
  "coin": {
    "btc": 0.00317948,
    "name": "Gambit",
    "rank": 86,
    "ticker": "gam",
    "usd": 13.98
  }
}, {
  "coin": {
    "btc": 0.00054128,
    "name": "GameCredits",
    "rank": 27,
    "ticker": "game",
    "usd": 2.38
  }
}, {
  "coin": {
    "btc": 1.41e-06,
    "name": "Gapcoin",
    "rank": 524,
    "ticker": "gap",
    "usd": 0.006227
  }
}, {
  "coin": {
    "btc": 1.608e-05,
    "name": "GAY Money",
    "rank": 791,
    "ticker": "gay",
    "usd": 0.070706
  }
}, {
  "coin": {
    "btc": 1.69e-06,
    "name": "GoldBlocks",
    "rank": 338,
    "ticker": "gb",
    "usd": 0.007424
  }
}, {
  "coin": {
    "btc": 6.7e-07,
    "name": "GBCGoldCoin",
    "rank": 597,
    "ticker": "gbc",
    "usd": 0.002966
  }
}, {
  "coin": {
    "btc": 2.301e-05,
    "name": "Golos Gold",
    "rank": 692,
    "ticker": "gbg",
    "usd": 0.101158
  }
}, {
  "coin": {
    "btc": 3.0e-08,
    "name": "Global Busine...",
    "rank": 747,
    "ticker": "gbrc",
    "usd": 0.000132
  }
}, {
  "coin": {
    "btc": 3.1e-07,
    "name": "GameBet Coin",
    "rank": 609,
    "ticker": "gbt",
    "usd": 0.001365
  }
}, {
  "coin": {
    "btc": 0.0510513,
    "name": "Byteball Bytes",
    "rank": 31,
    "ticker": "gbyte",
    "usd": 224.47
  }
}, {
  "coin": {
    "btc": 8.9e-07,
    "name": "GuccioneCoin",
    "rank": 515,
    "ticker": "gcc",
    "usd": 0.003902
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "GCoin",
    "rank": 312,
    "ticker": "gcn",
    "usd": 2.0e-06
  }
}, {
  "coin": {
    "btc": 1.157e-05,
    "name": "Global Curren...",
    "rank": 154,
    "ticker": "gcr",
    "usd": 0.050871
  }
}, {
  "coin": {
    "btc": 3.0e-07,
    "name": "GeertCoin",
    "rank": 662,
    "ticker": "geert",
    "usd": 0.001315
  }
}, {
  "coin": {
    "btc": 0.00027519,
    "name": "GeoCoin",
    "rank": 175,
    "ticker": "geo",
    "usd": 1.21
  }
}, {
  "coin": {
    "btc": 1.34e-06,
    "name": "GlobalCoin",
    "rank": 415,
    "ticker": "glc",
    "usd": 0.005876
  }
}, {
  "coin": {
    "btc": 2.789e-05,
    "name": "GoldCoin",
    "rank": 159,
    "ticker": "gld",
    "usd": 0.122785
  }
}, {
  "coin": {
    "btc": 6.5e-07,
    "name": "GlobalToken",
    "rank": 350,
    "ticker": "glt",
    "usd": 0.002876
  }
}, {
  "coin": {
    "btc": 1.37e-06,
    "name": "GameLeagueCoin",
    "rank": 833,
    "ticker": "gml",
    "usd": 0.006007
  }
}, {
  "coin": {
    "btc": 3.0e-07,
    "name": "GoldMaxCoin",
    "rank": 754,
    "ticker": "gmx",
    "usd": 0.001318
  }
}, {
  "coin": {
    "btc": 3.66e-06,
    "name": "Gokucoin",
    "rank": 690,
    "ticker": "goku",
    "usd": 0.016103
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Golfcoin",
    "rank": 874,
    "ticker": "golf",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 2.274e-05,
    "name": "Golos",
    "rank": 106,
    "ticker": "golos",
    "usd": 0.100124
  }
}, {
  "coin": {
    "btc": 1.36e-05,
    "name": "GoldPieces",
    "rank": 523,
    "ticker": "gp",
    "usd": 0.05978
  }
}, {
  "coin": {
    "btc": 3.743e-05,
    "name": "Gold Pressed ...",
    "rank": 580,
    "ticker": "gpl",
    "usd": 0.164761
  }
}, {
  "coin": {
    "btc": 5.1e-07,
    "name": "GPU Coin",
    "rank": 503,
    "ticker": "gpu",
    "usd": 0.002223
  }
}, {
  "coin": {
    "btc": 7.82e-06,
    "name": "GridCoin",
    "rank": 101,
    "ticker": "grc",
    "usd": 0.034371
  }
}, {
  "coin": {
    "btc": 8.0e-08,
    "name": "Greencoin",
    "rank": 385,
    "ticker": "gre",
    "usd": 0.000338
  }
}, {
  "coin": {
    "btc": 2.48e-06,
    "name": "Granite",
    "rank": 853,
    "ticker": "grn",
    "usd": 0.010912
  }
}, {
  "coin": {
    "btc": 2.946e-05,
    "name": "Groestlcoin",
    "rank": 118,
    "ticker": "grs",
    "usd": 0.129541
  }
}, {
  "coin": {
    "btc": 6.7e-07,
    "name": "Grantcoin",
    "rank": 470,
    "ticker": "grt",
    "usd": 0.002938
  }
}, {
  "coin": {
    "btc": 0.00025017,
    "name": "Growers Inter...",
    "rank": 246,
    "ticker": "grwi",
    "usd": 1.1
  }
}, {
  "coin": {
    "btc": 6.03e-06,
    "name": "GeyserCoin",
    "rank": 872,
    "ticker": "gsr",
    "usd": 0.026501
  }
}, {
  "coin": {
    "btc": 3.5e-07,
    "name": "Global Tour Coin",
    "rank": 570,
    "ticker": "gtc",
    "usd": 0.001538
  }
}, {
  "coin": {
    "btc": 1.4e-07,
    "name": "Guncoin",
    "rank": 475,
    "ticker": "gun",
    "usd": 0.000612
  }
}, {
  "coin": {
    "btc": 0.00053901,
    "name": "GXShares",
    "rank": 36,
    "ticker": "gxs",
    "usd": 2.37
  }
}, {
  "coin": {
    "btc": 1.9e-07,
    "name": "Gycoin",
    "rank": 874,
    "ticker": "gyc",
    "usd": 0.000831
  }
}, {
  "coin": {
    "btc": 2.78e-06,
    "name": "Halcyon",
    "rank": 546,
    "ticker": "hal",
    "usd": 0.012258
  }
}, {
  "coin": {
    "btc": 6.0e-08,
    "name": "Halloween Coin",
    "rank": 759,
    "ticker": "hallo",
    "usd": 0.000253
  }
}, {
  "coin": {
    "btc": 5.0e-08,
    "name": "HBCoin",
    "rank": 859,
    "ticker": "hbc",
    "usd": 0.00024
  }
}, {
  "coin": {
    "btc": 1.18e-06,
    "name": "HoboNickels",
    "rank": 423,
    "ticker": "hbn",
    "usd": 0.005174
  }
}, {
  "coin": {
    "btc": 7.0e-08,
    "name": "Happy Creator...",
    "rank": 807,
    "ticker": "hcc",
    "usd": 0.000307
  }
}, {
  "coin": {
    "btc": 4.927e-05,
    "name": "HEAT",
    "rank": 141,
    "ticker": "heat",
    "usd": 0.21662
  }
}, {
  "coin": {
    "btc": 1.14e-06,
    "name": "Hacker Gold",
    "rank": 344,
    "ticker": "hkg",
    "usd": 0.004999
  }
}, {
  "coin": {
    "btc": 4.9e-07,
    "name": "Lepaoquan",
    "rank": 880,
    "ticker": "hlb",
    "usd": 0.002153
  }
}, {
  "coin": {
    "btc": 9.7e-07,
    "name": "HarmonyCoin",
    "rank": 373,
    "ticker": "hmc",
    "usd": 0.004285
  }
}, {
  "coin": {
    "btc": 3.0e-08,
    "name": "HempCoin",
    "rank": 444,
    "ticker": "hmp",
    "usd": 0.000132
  }
}, {
  "coin": {
    "btc": 7.0e-08,
    "name": "Huncoin",
    "rank": 741,
    "ticker": "hnc",
    "usd": 0.000308
  }
}, {
  "coin": {
    "btc": 4.5e-07,
    "name": "HOdlcoin",
    "rank": 310,
    "ticker": "hodl",
    "usd": 0.001973
  }
}, {
  "coin": {
    "btc": 0.00010126,
    "name": "Honey",
    "rank": 480,
    "ticker": "honey",
    "usd": 0.445245
  }
}, {
  "coin": {
    "btc": 5.109e-05,
    "name": "Happycoin",
    "rank": 198,
    "ticker": "hpc",
    "usd": 0.224918
  }
}, {
  "coin": {
    "btc": 0.00164432,
    "name": "Hshare",
    "rank": 20,
    "ticker": "hsr",
    "usd": 7.23
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "HitCoin",
    "rank": 406,
    "ticker": "htc",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 3.0e-08,
    "name": "HTMLCOIN",
    "rank": 142,
    "ticker": "html5",
    "usd": 0.000147
  }
}, {
  "coin": {
    "btc": 2.194e-05,
    "name": "HunterCoin",
    "rank": 215,
    "ticker": "huc",
    "usd": 0.096572
  }
}, {
  "coin": {
    "btc": 0.00044068,
    "name": "Hush",
    "rank": 167,
    "ticker": "hush",
    "usd": 1.94
  }
}, {
  "coin": {
    "btc": 2.66e-06,
    "name": "High Voltage",
    "rank": 635,
    "ticker": "hvco",
    "usd": 0.011731
  }
}, {
  "coin": {
    "btc": 6.07e-06,
    "name": "Hexx",
    "rank": 582,
    "ticker": "hxx",
    "usd": 0.026678
  }
}, {
  "coin": {
    "btc": 3.7e-07,
    "name": "HyperStake",
    "rank": 223,
    "ticker": "hyp",
    "usd": 0.00161
  }
}, {
  "coin": {
    "btc": 5.1e-06,
    "name": "Hyper",
    "rank": 800,
    "ticker": "hyper",
    "usd": 0.022403
  }
}, {
  "coin": {
    "btc": 1.465e-05,
    "name": "I0Coin",
    "rank": 232,
    "ticker": "i0c",
    "usd": 0.064423
  }
}, {
  "coin": {
    "btc": 9.2e-07,
    "name": "iBank",
    "rank": 631,
    "ticker": "ibank",
    "usd": 0.004034
  }
}, {
  "coin": {
    "btc": 1.45e-06,
    "name": "iCoin",
    "rank": 440,
    "ticker": "icn",
    "usd": 0.006358
  }
}, {
  "coin": {
    "btc": 1.4e-07,
    "name": "ICOBID",
    "rank": 352,
    "ticker": "icob",
    "usd": 0.000614
  }
}, {
  "coin": {
    "btc": 2.15e-05,
    "name": "Iconic",
    "rank": 353,
    "ticker": "icon",
    "usd": 0.094639
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "Infinitecoin",
    "rank": 384,
    "ticker": "ifc",
    "usd": 1.5e-05
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "InflationCoin",
    "rank": 260,
    "ticker": "iflt",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 1.9e-07,
    "name": "ImpulseCoin",
    "rank": 641,
    "ticker": "imps",
    "usd": 0.000833
  }
}, {
  "coin": {
    "btc": 6.23e-06,
    "name": "Independent M...",
    "rank": 456,
    "ticker": "ims",
    "usd": 0.02743
  }
}, {
  "coin": {
    "btc": 5.0e-08,
    "name": "Impact",
    "rank": 618,
    "ticker": "imx",
    "usd": 0.000215
  }
}, {
  "coin": {
    "btc": 1.1e-07,
    "name": "India Coin",
    "rank": 689,
    "ticker": "india",
    "usd": 0.000482
  }
}, {
  "coin": {
    "btc": 2.32e-06,
    "name": "InfChain",
    "rank": 679,
    "ticker": "inf",
    "usd": 0.010235
  }
}, {
  "coin": {
    "btc": 0.00015777,
    "name": "Influxcoin",
    "rank": 242,
    "ticker": "infx",
    "usd": 0.693695
  }
}, {
  "coin": {
    "btc": 1.812e-05,
    "name": "InsaneCoin",
    "rank": 232,
    "ticker": "insn",
    "usd": 0.07976
  }
}, {
  "coin": {
    "btc": 0.00070873,
    "name": "I/O Coin",
    "rank": 48,
    "ticker": "ioc",
    "usd": 3.12
  }
}, {
  "coin": {
    "btc": 0.00031613,
    "name": "ION",
    "rank": 75,
    "ticker": "ion",
    "usd": 1.39
  }
}, {
  "coin": {
    "btc": 0.00101207,
    "name": "Internet of P...",
    "rank": 124,
    "ticker": "iop",
    "usd": 4.45
  }
}, {
  "coin": {
    "btc": 4.0e-07,
    "name": "IrishCoin",
    "rank": 750,
    "ticker": "irl",
    "usd": 0.001754
  }
}, {
  "coin": {
    "btc": 1.453e-05,
    "name": "IslaCoin",
    "rank": 492,
    "ticker": "isl",
    "usd": 0.063885
  }
}, {
  "coin": {
    "btc": 0.00662387,
    "name": "iTicoin",
    "rank": 388,
    "ticker": "iti",
    "usd": 29.16
  }
}, {
  "coin": {
    "btc": 0.00012606,
    "name": "Interzone",
    "rank": 308,
    "ticker": "itz",
    "usd": 0.554958
  }
}, {
  "coin": {
    "btc": 8.813e-05,
    "name": "InvisibleCoin",
    "rank": 862,
    "ticker": "ivz",
    "usd": 0.387519
  }
}, {
  "coin": {
    "btc": 1.519e-05,
    "name": "Ixcoin",
    "rank": 383,
    "ticker": "ixc",
    "usd": 0.066864
  }
}, {
  "coin": {
    "btc": 8.66e-06,
    "name": "Joincoin",
    "rank": 496,
    "ticker": "j",
    "usd": 0.038136
  }
}, {
  "coin": {
    "btc": 7.2e-07,
    "name": "Jin Coin",
    "rank": 602,
    "ticker": "jin",
    "usd": 0.003182
  }
}, {
  "coin": {
    "btc": 1.0e-07,
    "name": "JobsCoin",
    "rank": 565,
    "ticker": "jobs",
    "usd": 0.000439
  }
}, {
  "coin": {
    "btc": 5.2e-07,
    "name": "Jewels",
    "rank": 567,
    "ticker": "jwl",
    "usd": 0.002285
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Karmacoin",
    "rank": 783,
    "ticker": "karma",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "KashhCoin",
    "rank": 767,
    "ticker": "kashh",
    "usd": 8.7e-05
  }
}, {
  "coin": {
    "btc": 1.2e-07,
    "name": "Kayicoin",
    "rank": 726,
    "ticker": "kayi",
    "usd": 0.000525
  }
}, {
  "coin": {
    "btc": 2.07e-06,
    "name": "Darsek",
    "rank": 474,
    "ticker": "ked",
    "usd": 0.009115
  }
}, {
  "coin": {
    "btc": 1.386e-05,
    "name": "KekCoin",
    "rank": 397,
    "ticker": "kek",
    "usd": 0.060947
  }
}, {
  "coin": {
    "btc": 1.81e-06,
    "name": "KibiCoin",
    "rank": 337,
    "ticker": "kic",
    "usd": 0.007978
  }
}, {
  "coin": {
    "btc": 1.8e-07,
    "name": "KiloCoin",
    "rank": 452,
    "ticker": "klc",
    "usd": 0.000789
  }
}, {
  "coin": {
    "btc": 0.00050262,
    "name": "Komodo",
    "rank": 22,
    "ticker": "kmd",
    "usd": 2.21
  }
}, {
  "coin": {
    "btc": 0.00428251,
    "name": "KingN Coin",
    "rank": 584,
    "ticker": "knc",
    "usd": 18.83
  }
}, {
  "coin": {
    "btc": 3.29e-06,
    "name": "Kobocoin",
    "rank": 417,
    "ticker": "kobo",
    "usd": 0.014499
  }
}, {
  "coin": {
    "btc": 0.00153516,
    "name": "KoreCoin",
    "rank": 103,
    "ticker": "kore",
    "usd": 6.75
  }
}, {
  "coin": {
    "btc": 2.219e-05,
    "name": "Karbowanec",
    "rank": 285,
    "ticker": "krb",
    "usd": 0.097703
  }
}, {
  "coin": {
    "btc": 2.51e-06,
    "name": "Kronecoin",
    "rank": 363,
    "ticker": "krone",
    "usd": 0.011049
  }
}, {
  "coin": {
    "btc": 2.13e-06,
    "name": "Krypstal",
    "rank": 431,
    "ticker": "krs",
    "usd": 0.009377
  }
}, {
  "coin": {
    "btc": 1.5e-06,
    "name": "Kurrent",
    "rank": 541,
    "ticker": "kurt",
    "usd": 0.006613
  }
}, {
  "coin": {
    "btc": 4.24e-06,
    "name": "KushCoin",
    "rank": 487,
    "ticker": "kush",
    "usd": 0.018673
  }
}, {
  "coin": {
    "btc": 5.0e-08,
    "name": "LanaCoin",
    "rank": 446,
    "ticker": "lana",
    "usd": 0.000219
  }
}, {
  "coin": {
    "btc": 3.5e-07,
    "name": "Lazaruscoin",
    "rank": 846,
    "ticker": "laz",
    "usd": 0.001535
  }
}, {
  "coin": {
    "btc": 5.114e-05,
    "name": "LBRY Credits",
    "rank": 91,
    "ticker": "lbc",
    "usd": 0.224841
  }
}, {
  "coin": {
    "btc": 5.7e-07,
    "name": "LiteBitcoin",
    "rank": 369,
    "ticker": "lbtc",
    "usd": 0.002491
  }
}, {
  "coin": {
    "btc": 2.495e-05,
    "name": "Litecoin Plus",
    "rank": 355,
    "ticker": "lcp",
    "usd": 0.109841
  }
}, {
  "coin": {
    "btc": 5.3e-07,
    "name": "LandCoin",
    "rank": 708,
    "ticker": "ldcn",
    "usd": 0.002334
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "LiteDoge",
    "rank": 250,
    "ticker": "ldoge",
    "usd": 7.5e-05
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "LeaCoin",
    "rank": 616,
    "ticker": "lea",
    "usd": 8.8e-05
  }
}, {
  "coin": {
    "btc": 5.948e-05,
    "name": "LEOcoin",
    "rank": 73,
    "ticker": "leo",
    "usd": 0.26155
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "LePen",
    "rank": 751,
    "ticker": "lepen",
    "usd": 5.5e-05
  }
}, {
  "coin": {
    "btc": 6.0e-08,
    "name": "Linda",
    "rank": 224,
    "ticker": "linda",
    "usd": 0.000257
  }
}, {
  "coin": {
    "btc": 1.647e-05,
    "name": "Linx",
    "rank": 277,
    "ticker": "linx",
    "usd": 0.072425
  }
}, {
  "coin": {
    "btc": 1.1e-07,
    "name": "LetItRide",
    "rank": 638,
    "ticker": "lir",
    "usd": 0.000482
  }
}, {
  "coin": {
    "btc": 3.0e-08,
    "name": "LinkedCoin",
    "rank": 839,
    "ticker": "lkc",
    "usd": 0.000132
  }
}, {
  "coin": {
    "btc": 7.48e-05,
    "name": "Lykke",
    "rank": 38,
    "ticker": "lkk",
    "usd": 0.328911
  }
}, {
  "coin": {
    "btc": 1.202e-05,
    "name": "LoMoCoin",
    "rank": 108,
    "ticker": "lmc",
    "usd": 0.0529
  }
}, {
  "coin": {
    "btc": 2.598e-05,
    "name": "Woodcoin",
    "rank": 259,
    "ticker": "log",
    "usd": 0.114366
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "LottoCoin",
    "rank": 455,
    "ticker": "lot",
    "usd": 1.0e-05
  }
}, {
  "coin": {
    "btc": 0.0012221,
    "name": "Lisk",
    "rank": 14,
    "ticker": "lsk",
    "usd": 5.38
  }
}, {
  "coin": {
    "btc": 3.76e-05,
    "name": "LiteBar",
    "rank": 471,
    "ticker": "ltb",
    "usd": 0.165508
  }
}, {
  "coin": {
    "btc": 0.01212886,
    "name": "Litecoin",
    "rank": 5,
    "ticker": "ltc",
    "usd": 53.33
  }
}, {
  "coin": {
    "btc": 2.6e-07,
    "name": "Litecred",
    "rank": 361,
    "ticker": "ltcr",
    "usd": 0.001139
  }
}, {
  "coin": {
    "btc": 6.46e-06,
    "name": "LiteCoin Ultra",
    "rank": 366,
    "ticker": "ltcu",
    "usd": 0.028442
  }
}, {
  "coin": {
    "btc": 8.0e-08,
    "name": "LAthaan",
    "rank": 835,
    "ticker": "lth",
    "usd": 0.000351
  }
}, {
  "coin": {
    "btc": 3.0e-06,
    "name": "Luna Coin",
    "rank": 625,
    "ticker": "luna",
    "usd": 0.01319
  }
}, {
  "coin": {
    "btc": 2.34e-06,
    "name": "LevoPlus",
    "rank": 368,
    "ticker": "lvps",
    "usd": 0.010293
  }
}, {
  "coin": {
    "btc": 3.86e-06,
    "name": "Machinecoin",
    "rank": 294,
    "ticker": "mac",
    "usd": 0.016983
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "SatoshiMadness",
    "rank": 506,
    "ticker": "mad",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 0.00022296,
    "name": "Magnetcoin",
    "rank": 717,
    "ticker": "magn",
    "usd": 0.980333
  }
}, {
  "coin": {
    "btc": 0.00133502,
    "name": "Malcoin",
    "rank": 424,
    "ticker": "malc",
    "usd": 5.87
  }
}, {
  "coin": {
    "btc": 1.715e-05,
    "name": "Mao Zedong",
    "rank": 285,
    "ticker": "mao",
    "usd": 0.075417
  }
}, {
  "coin": {
    "btc": 8.79e-06,
    "name": "Marijuanacoin",
    "rank": 557,
    "ticker": "mar",
    "usd": 0.038667
  }
}, {
  "coin": {
    "btc": 6.3e-07,
    "name": "Marscoin",
    "rank": 346,
    "ticker": "mars",
    "usd": 0.002755
  }
}, {
  "coin": {
    "btc": 3.8e-07,
    "name": "MarxCoin",
    "rank": 742,
    "ticker": "marx",
    "usd": 0.001658
  }
}, {
  "coin": {
    "btc": 1.51e-06,
    "name": "Mavro",
    "rank": 820,
    "ticker": "mavro",
    "usd": 0.006634
  }
}, {
  "coin": {
    "btc": 3.0e-06,
    "name": "MaxCoin",
    "rank": 391,
    "ticker": "max",
    "usd": 0.013198
  }
}, {
  "coin": {
    "btc": 1.69e-06,
    "name": "Theresa May Coin",
    "rank": 328,
    "ticker": "may",
    "usd": 0.007437
  }
}, {
  "coin": {
    "btc": 1.8e-07,
    "name": "MobileCash",
    "rank": 718,
    "ticker": "mbl",
    "usd": 0.000791
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "MACRON",
    "rank": 608,
    "ticker": "mcrn",
    "usd": 7.3e-05
  }
}, {
  "coin": {
    "btc": 5.33e-06,
    "name": "Megacoin",
    "rank": 263,
    "ticker": "mec",
    "usd": 0.023437
  }
}, {
  "coin": {
    "btc": 5.228e-05,
    "name": "Memetic",
    "rank": 178,
    "ticker": "meme",
    "usd": 0.229851
  }
}, {
  "coin": {
    "btc": 1.4e-07,
    "name": "PeopleCoin",
    "rank": 701,
    "ticker": "men",
    "usd": 0.000614
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "Kittehcoin",
    "rank": 569,
    "ticker": "meow",
    "usd": 2.0e-06
  }
}, {
  "coin": {
    "btc": 1.62e-06,
    "name": "MetalCoin",
    "rank": 402,
    "ticker": "metal",
    "usd": 0.007104
  }
}, {
  "coin": {
    "btc": 2.59e-06,
    "name": "Mind Gene",
    "rank": 711,
    "ticker": "mg",
    "usd": 0.0114
  }
}, {
  "coin": {
    "btc": 1.12e-06,
    "name": "GulfCoin",
    "rank": 698,
    "ticker": "mgc",
    "usd": 0.004911
  }
}, {
  "coin": {
    "btc": 7.4e-07,
    "name": "Magnum",
    "rank": 652,
    "ticker": "mgm",
    "usd": 0.003251
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "Xiaomicoin",
    "rank": 675,
    "ticker": "mi",
    "usd": 3.0e-06
  }
}, {
  "coin": {
    "btc": 8.3e-07,
    "name": "MiloCoin",
    "rank": 579,
    "ticker": "milo",
    "usd": 0.003667
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "Mintcoin",
    "rank": 380,
    "ticker": "mint",
    "usd": 8.8e-05
  }
}, {
  "coin": {
    "btc": 0.00012851,
    "name": "IOTA",
    "rank": 9,
    "ticker": "miota",
    "usd": 0.565055
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "MIYUCoin",
    "rank": 843,
    "ticker": "miu",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 5.1e-07,
    "name": "MMXVI",
    "rank": 858,
    "ticker": "mmxvi",
    "usd": 0.002243
  }
}, {
  "coin": {
    "btc": 1.3e-07,
    "name": "MantraCoin",
    "rank": 670,
    "ticker": "mnc",
    "usd": 0.000571
  }
}, {
  "coin": {
    "btc": 6.6e-07,
    "name": "MindCoin",
    "rank": 588,
    "ticker": "mnd",
    "usd": 0.0029
  }
}, {
  "coin": {
    "btc": 3.26e-06,
    "name": "Mineum",
    "rank": 333,
    "ticker": "mnm",
    "usd": 0.014331
  }
}, {
  "coin": {
    "btc": 1.546e-05,
    "name": "Moin",
    "rank": 282,
    "ticker": "moin",
    "usd": 0.067986
  }
}, {
  "coin": {
    "btc": 3.24e-06,
    "name": "MojoCoin",
    "rank": 327,
    "ticker": "mojo",
    "usd": 0.014256
  }
}, {
  "coin": {
    "btc": 0.00011032,
    "name": "MonaCoin",
    "rank": 68,
    "ticker": "mona",
    "usd": 0.485665
  }
}, {
  "coin": {
    "btc": 7.0e-08,
    "name": "Moneta",
    "rank": 828,
    "ticker": "moneta",
    "usd": 0.000308
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "MoneyCoin",
    "rank": 816,
    "ticker": "money",
    "usd": 8.8e-05
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Mooncoin",
    "rank": 107,
    "ticker": "moon",
    "usd": 5.5e-05
  }
}, {
  "coin": {
    "btc": 3.3e-07,
    "name": "Motocoin",
    "rank": 735,
    "ticker": "moto",
    "usd": 0.001441
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "microCoin",
    "rank": 878,
    "ticker": "mrc",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 8.6e-06,
    "name": "GanjaCoin",
    "rank": 733,
    "ticker": "mrja",
    "usd": 0.037796
  }
}, {
  "coin": {
    "btc": 2.7e-07,
    "name": "MorningStar",
    "rank": 712,
    "ticker": "mrng",
    "usd": 0.001186
  }
}, {
  "coin": {
    "btc": 3.3e-07,
    "name": "Master Swiscoin",
    "rank": 352,
    "ticker": "mscn",
    "usd": 0.001472
  }
}, {
  "coin": {
    "btc": 2.872e-05,
    "name": "MSD",
    "rank": 686,
    "ticker": "msd",
    "usd": 0.12628
  }
}, {
  "coin": {
    "btc": 3.279e-05,
    "name": "MustangCoin",
    "rank": 500,
    "ticker": "mst",
    "usd": 0.14433
  }
}, {
  "coin": {
    "btc": 7.0e-08,
    "name": "Metal Music Coin",
    "rank": 621,
    "ticker": "mtlmc3",
    "usd": 0.000291
  }
}, {
  "coin": {
    "btc": 2.906e-05,
    "name": "Masternodecoin",
    "rank": 715,
    "ticker": "mtnc",
    "usd": 0.12777
  }
}, {
  "coin": {
    "btc": 4.149e-05,
    "name": "MonetaryUnit",
    "rank": 74,
    "ticker": "mue",
    "usd": 0.182417
  }
}, {
  "coin": {
    "btc": 5.65e-06,
    "name": "Musicoin",
    "rank": 116,
    "ticker": "music",
    "usd": 0.024865
  }
}, {
  "coin": {
    "btc": 0.00030439,
    "name": "MarteXcoin",
    "rank": 180,
    "ticker": "mxt",
    "usd": 1.34
  }
}, {
  "coin": {
    "btc": 7.0e-08,
    "name": "MazaCoin",
    "rank": 410,
    "ticker": "mzc",
    "usd": 0.000306
  }
}, {
  "coin": {
    "btc": 4.0e-08,
    "name": "NamoCoin",
    "rank": 703,
    "ticker": "namo",
    "usd": 0.000177
  }
}, {
  "coin": {
    "btc": 39.88855911,
    "name": "Project-X",
    "rank": 650,
    "ticker": "nanox",
    "usd": 175388.0
  }
}, {
  "coin": {
    "btc": 0.00020264,
    "name": "NAV Coin",
    "rank": 47,
    "ticker": "nav",
    "usd": 0.892071
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "BitCentavo",
    "rank": 873,
    "ticker": "nbe",
    "usd": 5.0e-06
  }
}, {
  "coin": {
    "btc": 3.37e-06,
    "name": "netBit",
    "rank": 816,
    "ticker": "nbit",
    "usd": 0.014822
  }
}, {
  "coin": {
    "btc": 0.00024335,
    "name": "Neblio",
    "rank": 102,
    "ticker": "nebl",
    "usd": 1.07
  }
}, {
  "coin": {
    "btc": 0.0082912,
    "name": "NEO",
    "rank": 8,
    "ticker": "neo",
    "usd": 36.5
  }
}, {
  "coin": {
    "btc": 0.00059814,
    "name": "NeosCoin",
    "rank": 112,
    "ticker": "neos",
    "usd": 2.63
  }
}, {
  "coin": {
    "btc": 1.2e-07,
    "name": "NetCoin",
    "rank": 289,
    "ticker": "net",
    "usd": 0.000526
  }
}, {
  "coin": {
    "btc": 6.692e-05,
    "name": "Netko",
    "rank": 243,
    "ticker": "netko",
    "usd": 0.29424
  }
}, {
  "coin": {
    "btc": 3.81e-06,
    "name": "NevaCoin",
    "rank": 583,
    "ticker": "neva",
    "usd": 0.016755
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "IncaKoin",
    "rank": 389,
    "ticker": "nka",
    "usd": 8.8e-05
  }
}, {
  "coin": {
    "btc": 3.758e-05,
    "name": "NoLimitCoin",
    "rank": 57,
    "ticker": "nlc2",
    "usd": 0.165217
  }
}, {
  "coin": {
    "btc": 3.08e-05,
    "name": "Gulden",
    "rank": 50,
    "ticker": "nlg",
    "usd": 0.135428
  }
}, {
  "coin": {
    "btc": 0.00029793,
    "name": "Namecoin",
    "rank": 81,
    "ticker": "nmc",
    "usd": 1.31
  }
}, {
  "coin": {
    "btc": 6.0e-08,
    "name": "NobleCoin",
    "rank": 398,
    "ticker": "nobl",
    "usd": 0.000263
  }
}, {
  "coin": {
    "btc": 1.04e-06,
    "name": "NodeCoin",
    "rank": 659,
    "ticker": "nodc",
    "usd": 0.00456
  }
}, {
  "coin": {
    "btc": 1.141e-05,
    "name": "DNotes",
    "rank": 138,
    "ticker": "note",
    "usd": 0.05018
  }
}, {
  "coin": {
    "btc": 3.2e-07,
    "name": "Neuro",
    "rank": 585,
    "ticker": "nro",
    "usd": 0.001403
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Neptune Classic",
    "rank": 861,
    "ticker": "ntcc",
    "usd": 3.7e-05
  }
}, {
  "coin": {
    "btc": 3.93e-05,
    "name": "Neutron",
    "rank": 152,
    "ticker": "ntrn",
    "usd": 0.172812
  }
}, {
  "coin": {
    "btc": 0.00100069,
    "name": "Novacoin",
    "rank": 123,
    "ticker": "nvc",
    "usd": 4.4
  }
}, {
  "coin": {
    "btc": 0.00037981,
    "name": "Nexus",
    "rank": 39,
    "ticker": "nxs",
    "usd": 1.67
  }
}, {
  "coin": {
    "btc": 1.617e-05,
    "name": "Nxt",
    "rank": 42,
    "ticker": "nxt",
    "usd": 0.07119
  }
}, {
  "coin": {
    "btc": 7.0e-08,
    "name": "Nyancoin",
    "rank": 497,
    "ticker": "nyan",
    "usd": 0.000312
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "NewYorkCoin",
    "rank": 417,
    "ticker": "nyc",
    "usd": 3.0e-06
  }
}, {
  "coin": {
    "btc": 7.8e-07,
    "name": "OCOW",
    "rank": 871,
    "ticker": "ocow",
    "usd": 0.003443
  }
}, {
  "coin": {
    "btc": 0.00013768,
    "name": "Obsidian",
    "rank": 97,
    "ticker": "odn",
    "usd": 0.605393
  }
}, {
  "coin": {
    "btc": 1.78e-06,
    "name": "Cthulhu Offer...",
    "rank": 624,
    "ticker": "off",
    "usd": 0.007805
  }
}, {
  "coin": {
    "btc": 9.6e-07,
    "name": "OHM",
    "rank": 472,
    "ticker": "ohm",
    "usd": 0.004209
  }
}, {
  "coin": {
    "btc": 6.266e-05,
    "name": "OKCash",
    "rank": 79,
    "ticker": "ok",
    "usd": 0.275825
  }
}, {
  "coin": {
    "btc": 4.627e-05,
    "name": "Omicron",
    "rank": 871,
    "ticker": "omc",
    "usd": 0.203463
  }
}, {
  "coin": {
    "btc": 0.00553111,
    "name": "Omni",
    "rank": 100,
    "ticker": "omni",
    "usd": 24.32
  }
}, {
  "coin": {
    "btc": 0.00017293,
    "name": "DeepOnion",
    "rank": 202,
    "ticker": "onion",
    "usd": 0.761273
  }
}, {
  "coin": {
    "btc": 1.174e-05,
    "name": "Onix",
    "rank": 229,
    "ticker": "onx",
    "usd": 0.051631
  }
}, {
  "coin": {
    "btc": 2.9e-07,
    "name": "Operand",
    "rank": 845,
    "ticker": "op",
    "usd": 0.001272
  }
}, {
  "coin": {
    "btc": 2.65e-06,
    "name": "Opal",
    "rank": 737,
    "ticker": "opal",
    "usd": 0.011664
  }
}, {
  "coin": {
    "btc": 2.7e-07,
    "name": "Opescoin",
    "rank": 827,
    "ticker": "opes",
    "usd": 0.001184
  }
}, {
  "coin": {
    "btc": 2.244e-05,
    "name": "Orbitcoin",
    "rank": 425,
    "ticker": "orb",
    "usd": 0.09865
  }
}, {
  "coin": {
    "btc": 2.1e-07,
    "name": "Orlycoin",
    "rank": 596,
    "ticker": "orly",
    "usd": 0.000921
  }
}, {
  "coin": {
    "btc": 4.67e-06,
    "name": "OsmiumCoin",
    "rank": 365,
    "ticker": "os76",
    "usd": 0.02052
  }
}, {
  "coin": {
    "btc": 4.0e-08,
    "name": "P7Coin",
    "rank": 664,
    "ticker": "p7c",
    "usd": 0.000176
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "Paccoin",
    "rank": 719,
    "ticker": "pac",
    "usd": 1.4e-07
  }
}, {
  "coin": {
    "btc": 1.53e-06,
    "name": "Pakcoin",
    "rank": 305,
    "ticker": "pak",
    "usd": 0.006722
  }
}, {
  "coin": {
    "btc": 0.00180816,
    "name": "Particl",
    "rank": 45,
    "ticker": "part",
    "usd": 7.96
  }
}, {
  "coin": {
    "btc": 9.031e-05,
    "name": "Pascal Coin",
    "rank": 150,
    "ticker": "pasc",
    "usd": 0.397079
  }
}, {
  "coin": {
    "btc": 5.87e-06,
    "name": "Pascal Lite",
    "rank": 501,
    "ticker": "pasl",
    "usd": 0.025826
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "PayPeer",
    "rank": 757,
    "ticker": "payp",
    "usd": 8.8e-05
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "PeepCoin",
    "rank": 848,
    "ticker": "pcn",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 1.988e-05,
    "name": "Pabyosi Coin ...",
    "rank": 705,
    "ticker": "pcs",
    "usd": 0.087431
  }
}, {
  "coin": {
    "btc": 4.0e-08,
    "name": "PinkDog",
    "rank": 798,
    "ticker": "pdg",
    "usd": 0.000175
  }
}, {
  "coin": {
    "btc": 3.99e-06,
    "name": "Peacecoin",
    "rank": 776,
    "ticker": "pec",
    "usd": 0.017539
  }
}, {
  "coin": {
    "btc": 1.42e-06,
    "name": "PosEx",
    "rank": 646,
    "ticker": "pex",
    "usd": 0.006264
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "Photon",
    "rank": 576,
    "ticker": "pho",
    "usd": 2.0e-06
  }
}, {
  "coin": {
    "btc": 4.57e-06,
    "name": "Philosopher S...",
    "rank": 559,
    "ticker": "phs",
    "usd": 0.020084
  }
}, {
  "coin": {
    "btc": 2.27e-06,
    "name": "PiCoin",
    "rank": 812,
    "ticker": "pi",
    "usd": 0.009997
  }
}, {
  "coin": {
    "btc": 4.62e-06,
    "name": "PIECoin",
    "rank": 252,
    "ticker": "pie",
    "usd": 0.020301
  }
}, {
  "coin": {
    "btc": 1.2e-07,
    "name": "Piggycoin",
    "rank": 430,
    "ticker": "piggy",
    "usd": 0.000529
  }
}, {
  "coin": {
    "btc": 5.6e-06,
    "name": "PinkCoin",
    "rank": 117,
    "ticker": "pink",
    "usd": 0.024673
  }
}, {
  "coin": {
    "btc": 0.00063604,
    "name": "PIVX",
    "rank": 28,
    "ticker": "pivx",
    "usd": 2.8
  }
}, {
  "coin": {
    "btc": 4.0e-07,
    "name": "PizzaCoin",
    "rank": 371,
    "ticker": "pizza",
    "usd": 0.001754
  }
}, {
  "coin": {
    "btc": 8.092e-05,
    "name": "ParkByte",
    "rank": 222,
    "ticker": "pkb",
    "usd": 0.356235
  }
}, {
  "coin": {
    "btc": 1.14e-06,
    "name": "PLNcoin",
    "rank": 509,
    "ticker": "plnc",
    "usd": 0.004999
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Pandacoin",
    "rank": 386,
    "ticker": "pnd",
    "usd": 3.1e-05
  }
}, {
  "coin": {
    "btc": 3.0e-08,
    "name": "PokeCoin",
    "rank": 855,
    "ticker": "poke",
    "usd": 0.000132
  }
}, {
  "coin": {
    "btc": 1.411e-05,
    "name": "PonziCoin",
    "rank": 555,
    "ticker": "ponzi",
    "usd": 0.062044
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "PopularCoin",
    "rank": 573,
    "ticker": "pop",
    "usd": 1.3e-05
  }
}, {
  "coin": {
    "btc": 5.87e-06,
    "name": "PostCoin",
    "rank": 290,
    "ticker": "post",
    "usd": 0.025824
  }
}, {
  "coin": {
    "btc": 3.614e-05,
    "name": "PoSW Coin",
    "rank": 131,
    "ticker": "posw",
    "usd": 0.159099
  }
}, {
  "coin": {
    "btc": 1.767e-05,
    "name": "PotCoin",
    "rank": 85,
    "ticker": "pot",
    "usd": 0.077772
  }
}, {
  "coin": {
    "btc": 0.00028849,
    "name": "Peercoin",
    "rank": 62,
    "ticker": "ppc",
    "usd": 1.27
  }
}, {
  "coin": {
    "btc": 0.00088243,
    "name": "Peerplays",
    "rank": 96,
    "ticker": "ppy",
    "usd": 3.88
  }
}, {
  "coin": {
    "btc": 0.00031575,
    "name": "Prototanium",
    "rank": 309,
    "ticker": "pr",
    "usd": 1.39
  }
}, {
  "coin": {
    "btc": 1.61e-06,
    "name": "PRCoin",
    "rank": 494,
    "ticker": "prc",
    "usd": 0.007059
  }
}, {
  "coin": {
    "btc": 3.0e-08,
    "name": "Primulon",
    "rank": 857,
    "ticker": "primu",
    "usd": 0.000132
  }
}, {
  "coin": {
    "btc": 2.1e-07,
    "name": "PrismChain",
    "rank": 765,
    "ticker": "prm",
    "usd": 0.000923
  }
}, {
  "coin": {
    "btc": 1.193e-05,
    "name": "ProCurrency",
    "rank": 272,
    "ticker": "proc",
    "usd": 0.052519
  }
}, {
  "coin": {
    "btc": 4.5e-07,
    "name": "Printerium",
    "rank": 619,
    "ticker": "prx",
    "usd": 0.001984
  }
}, {
  "coin": {
    "btc": 1.08e-06,
    "name": "Pesobit",
    "rank": 451,
    "ticker": "psb",
    "usd": 0.004735
  }
}, {
  "coin": {
    "btc": 2.7e-06,
    "name": "Psilocybin",
    "rank": 852,
    "ticker": "psy",
    "usd": 0.011879
  }
}, {
  "coin": {
    "btc": 8.68e-06,
    "name": "Pesetacoin",
    "rank": 156,
    "ticker": "ptc",
    "usd": 0.03818
  }
}, {
  "coin": {
    "btc": 4.7e-07,
    "name": "Pulse",
    "rank": 607,
    "ticker": "pulse",
    "usd": 0.002073
  }
}, {
  "coin": {
    "btc": 8.982e-05,
    "name": "Pura",
    "rank": 683,
    "ticker": "pura",
    "usd": 0.394935
  }
}, {
  "coin": {
    "btc": 3.71e-06,
    "name": "PutinCoin",
    "rank": 186,
    "ticker": "put",
    "usd": 0.016291
  }
}, {
  "coin": {
    "btc": 1.0e-06,
    "name": "Putin Classic",
    "rank": 453,
    "ticker": "putic",
    "usd": 0.004394
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Powercoin",
    "rank": 672,
    "ticker": "pwr",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 2.1e-07,
    "name": "PX",
    "rank": 511,
    "ticker": "px",
    "usd": 0.000921
  }
}, {
  "coin": {
    "btc": 9.6e-07,
    "name": "Phoenixcoin",
    "rank": 430,
    "ticker": "pxc",
    "usd": 0.004211
  }
}, {
  "coin": {
    "btc": 1.41e-06,
    "name": "Prime-XI",
    "rank": 486,
    "ticker": "pxi",
    "usd": 0.006215
  }
}, {
  "coin": {
    "btc": 0.00020452,
    "name": "PRIZM",
    "rank": 125,
    "ticker": "pzm",
    "usd": 0.900367
  }
}, {
  "coin": {
    "btc": 1.8e-07,
    "name": "QubitCoin",
    "rank": 439,
    "ticker": "q2c",
    "usd": 0.000789
  }
}, {
  "coin": {
    "btc": 2.2e-07,
    "name": "Quebecoin",
    "rank": 834,
    "ticker": "qbc",
    "usd": 0.000965
  }
}, {
  "coin": {
    "btc": 3.0e-07,
    "name": "Cubits",
    "rank": 840,
    "ticker": "qbt",
    "usd": 0.00131
  }
}, {
  "coin": {
    "btc": 4.99e-06,
    "name": "QuazarCoin",
    "rank": 464,
    "ticker": "qcn",
    "usd": 0.021923
  }
}, {
  "coin": {
    "btc": 2.908e-05,
    "name": "Qora",
    "rank": 756,
    "ticker": "qora",
    "usd": 0.127844
  }
}, {
  "coin": {
    "btc": 1.7e-06,
    "name": "Quark",
    "rank": 214,
    "ticker": "qrk",
    "usd": 0.007493
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Quartz",
    "rank": 876,
    "ticker": "qrz",
    "usd": 3.7e-05
  }
}, {
  "coin": {
    "btc": 1.37e-06,
    "name": "Quatloo",
    "rank": 566,
    "ticker": "qtl",
    "usd": 0.006051
  }
}, {
  "coin": {
    "btc": 0.00103708,
    "name": "Radium",
    "rank": 92,
    "ticker": "rads",
    "usd": 4.56
  }
}, {
  "coin": {
    "btc": 1.807e-05,
    "name": "Condensate",
    "rank": 159,
    "ticker": "rain",
    "usd": 0.079442
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "RabbitCoin",
    "rank": 779,
    "ticker": "rbbt",
    "usd": 2.0e-06
  }
}, {
  "coin": {
    "btc": 6.2e-06,
    "name": "Rubies",
    "rank": 303,
    "ticker": "rbies",
    "usd": 0.027304
  }
}, {
  "coin": {
    "btc": 1.0e-07,
    "name": "Rimbit",
    "rank": 558,
    "ticker": "rbt",
    "usd": 0.000424
  }
}, {
  "coin": {
    "btc": 0.00016006,
    "name": "Rubycoin",
    "rank": 83,
    "ticker": "rby",
    "usd": 0.703794
  }
}, {
  "coin": {
    "btc": 1.099e-05,
    "name": "RussiaCoin",
    "rank": 412,
    "ticker": "rc",
    "usd": 0.048374
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Rcoin",
    "rank": 832,
    "ticker": "rcn",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 2.6e-07,
    "name": "ReddCoin",
    "rank": 59,
    "ticker": "rdd",
    "usd": 0.00114
  }
}, {
  "coin": {
    "btc": 0.00395729,
    "name": "Regalcoin",
    "rank": 49,
    "ticker": "rec",
    "usd": 17.4
  }
}, {
  "coin": {
    "btc": 2.2e-07,
    "name": "RedCoin",
    "rank": 527,
    "ticker": "red",
    "usd": 0.000966
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "ReeCoin",
    "rank": 317,
    "ticker": "ree",
    "usd": 8.7e-05
  }
}, {
  "coin": {
    "btc": 1.3e-06,
    "name": "Regacoin",
    "rank": 723,
    "ticker": "rega",
    "usd": 0.005712
  }
}, {
  "coin": {
    "btc": 1.53e-06,
    "name": "Revenu",
    "rank": 658,
    "ticker": "rev",
    "usd": 0.006709
  }
}, {
  "coin": {
    "btc": 1.8e-07,
    "name": "RHFCoin",
    "rank": 752,
    "ticker": "rhfc",
    "usd": 0.000789
  }
}, {
  "coin": {
    "btc": 1.497e-05,
    "name": "Riecoin",
    "rank": 204,
    "ticker": "ric",
    "usd": 0.065904
  }
}, {
  "coin": {
    "btc": 1.44e-06,
    "name": "RichCoin",
    "rank": 818,
    "ticker": "richx",
    "usd": 0.006314
  }
}, {
  "coin": {
    "btc": 6.0e-08,
    "name": "Ride My Car",
    "rank": 613,
    "ticker": "ride",
    "usd": 0.000263
  }
}, {
  "coin": {
    "btc": 8.616e-05,
    "name": "Rise",
    "rank": 51,
    "ticker": "rise",
    "usd": 0.378838
  }
}, {
  "coin": {
    "btc": 9.47e-06,
    "name": "Renos",
    "rank": 230,
    "ticker": "rns",
    "usd": 0.041696
  }
}, {
  "coin": {
    "btc": 5.5e-07,
    "name": "RoyalCoin",
    "rank": 807,
    "ticker": "royal",
    "usd": 0.002416
  }
}, {
  "coin": {
    "btc": 1.627e-05,
    "name": "RonPaulCoin",
    "rank": 545,
    "ticker": "rpc",
    "usd": 0.071558
  }
}, {
  "coin": {
    "btc": 0.00307941,
    "name": "RSGPcoin",
    "rank": 620,
    "ticker": "rsgp",
    "usd": 13.54
  }
}, {
  "coin": {
    "btc": 7.2e-07,
    "name": "RubleBit",
    "rank": 729,
    "ticker": "rubit",
    "usd": 0.003157
  }
}, {
  "coin": {
    "btc": 1.83e-05,
    "name": "Rupee",
    "rank": 218,
    "ticker": "rup",
    "usd": 0.08048
  }
}, {
  "coin": {
    "btc": 8.93e-06,
    "name": "Rupaya",
    "rank": 319,
    "ticker": "rupx",
    "usd": 0.039305
  }
}, {
  "coin": {
    "btc": 3.2e-07,
    "name": "RoyalCoin 2",
    "rank": 869,
    "ticker": "rycn",
    "usd": 0.001409
  }
}, {
  "coin": {
    "btc": 1.396e-05,
    "name": "SACoin",
    "rank": 331,
    "ticker": "sac",
    "usd": 0.061386
  }
}, {
  "coin": {
    "btc": 6.6e-07,
    "name": "Sharkcoin",
    "rank": 744,
    "ticker": "sak",
    "usd": 0.002912
  }
}, {
  "coin": {
    "btc": 1.17e-06,
    "name": "Save and Gain",
    "rank": 644,
    "ticker": "sandg",
    "usd": 0.00513
  }
}, {
  "coin": {
    "btc": 0.00021094,
    "name": "Steem Dollars",
    "rank": 187,
    "ticker": "sbd",
    "usd": 0.927491
  }
}, {
  "coin": {
    "btc": 1.17e-06,
    "name": "Siacoin",
    "rank": 28,
    "ticker": "sc",
    "usd": 0.005131
  }
}, {
  "coin": {
    "btc": 4.62e-06,
    "name": "Scorecoin",
    "rank": 283,
    "ticker": "score",
    "usd": 0.020315
  }
}, {
  "coin": {
    "btc": 3.93e-06,
    "name": "SecretCoin",
    "rank": 522,
    "ticker": "scrt",
    "usd": 0.017278
  }
}, {
  "coin": {
    "btc": 1.601e-05,
    "name": "Speedcash",
    "rank": 628,
    "ticker": "scs",
    "usd": 0.070375
  }
}, {
  "coin": {
    "btc": 2.583e-05,
    "name": "ShadowCash",
    "rank": 392,
    "ticker": "sdc",
    "usd": 0.113564
  }
}, {
  "coin": {
    "btc": 1.287e-05,
    "name": "SydPak",
    "rank": 655,
    "ticker": "sdp",
    "usd": 0.056607
  }
}, {
  "coin": {
    "btc": 2.877e-05,
    "name": "Sequence",
    "rank": 147,
    "ticker": "seq",
    "usd": 0.126499
  }
}, {
  "coin": {
    "btc": 3.1e-07,
    "name": "Solarflarecoin",
    "rank": 626,
    "ticker": "sfc",
    "usd": 0.001352
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "SafeCoin",
    "rank": 854,
    "ticker": "sfe",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 1.38e-06,
    "name": "Shilling",
    "rank": 615,
    "ticker": "sh",
    "usd": 0.006054
  }
}, {
  "coin": {
    "btc": 1.6e-07,
    "name": "SHACoin",
    "rank": 758,
    "ticker": "sha",
    "usd": 0.000702
  }
}, {
  "coin": {
    "btc": 5.98e-06,
    "name": "ShellCoin",
    "rank": 790,
    "ticker": "shell",
    "usd": 0.026308
  }
}, {
  "coin": {
    "btc": 0.00028201,
    "name": "Shift",
    "rank": 99,
    "ticker": "shift",
    "usd": 1.24
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "StrongHands",
    "rank": 732,
    "ticker": "shnd",
    "usd": 4.2e-08
  }
}, {
  "coin": {
    "btc": 1.13e-06,
    "name": "Shorty",
    "rank": 405,
    "ticker": "shorty",
    "usd": 0.004955
  }
}, {
  "coin": {
    "btc": 0.00028429,
    "name": "SIBCoin",
    "rank": 80,
    "ticker": "sib",
    "usd": 1.25
  }
}, {
  "coin": {
    "btc": 1.145e-05,
    "name": "SIGMAcoin",
    "rank": 704,
    "ticker": "sigma",
    "usd": 0.050336
  }
}, {
  "coin": {
    "btc": 5.72e-06,
    "name": "Signatum",
    "rank": 197,
    "ticker": "sigt",
    "usd": 0.025153
  }
}, {
  "coin": {
    "btc": 3.6e-07,
    "name": "Skeincoin",
    "rank": 801,
    "ticker": "skc",
    "usd": 0.001578
  }
}, {
  "coin": {
    "btc": 2.9e-07,
    "name": "Sakuracoin",
    "rank": 738,
    "ticker": "skr",
    "usd": 0.001272
  }
}, {
  "coin": {
    "btc": 1.16e-06,
    "name": "Pirate Blocks",
    "rank": 793,
    "ticker": "skull",
    "usd": 0.005086
  }
}, {
  "coin": {
    "btc": 0.00078236,
    "name": "Skycoin",
    "rank": 78,
    "ticker": "sky",
    "usd": 3.44
  }
}, {
  "coin": {
    "btc": 6.0e-08,
    "name": "Slevin",
    "rank": 629,
    "ticker": "slevin",
    "usd": 0.000263
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Selfiecoin",
    "rank": 667,
    "ticker": "slfi",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 1.066e-05,
    "name": "Sterlingcoin",
    "rank": 438,
    "ticker": "slg",
    "usd": 0.046882
  }
}, {
  "coin": {
    "btc": 1.239e-05,
    "name": "Sling",
    "rank": 549,
    "ticker": "sling",
    "usd": 0.054497
  }
}, {
  "coin": {
    "btc": 2.77e-06,
    "name": "Slimcoin",
    "rank": 441,
    "ticker": "slm",
    "usd": 0.01219
  }
}, {
  "coin": {
    "btc": 5.225e-05,
    "name": "SolarCoin",
    "rank": 122,
    "ticker": "slr",
    "usd": 0.229731
  }
}, {
  "coin": {
    "btc": 0.00337962,
    "name": "SaluS",
    "rank": 94,
    "ticker": "sls",
    "usd": 14.86
  }
}, {
  "coin": {
    "btc": 2.55e-06,
    "name": "SmartCash",
    "rank": 137,
    "ticker": "smart",
    "usd": 0.01122
  }
}, {
  "coin": {
    "btc": 1.054e-05,
    "name": "SmartCoin",
    "rank": 251,
    "ticker": "smc",
    "usd": 0.046363
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "SmileyCoin",
    "rank": 238,
    "ticker": "smly",
    "usd": 4.8e-05
  }
}, {
  "coin": {
    "btc": 0.00032295,
    "name": "Synergy",
    "rank": 165,
    "ticker": "snrg",
    "usd": 1.42
  }
}, {
  "coin": {
    "btc": 2.93e-06,
    "name": "SocialCoin",
    "rank": 634,
    "ticker": "socc",
    "usd": 0.012904
  }
}, {
  "coin": {
    "btc": 2.57e-06,
    "name": "SOILcoin",
    "rank": 543,
    "ticker": "soil",
    "usd": 0.01129
  }
}, {
  "coin": {
    "btc": 2.81e-06,
    "name": "Sojourn",
    "rank": 665,
    "ticker": "soj",
    "usd": 0.012366
  }
}, {
  "coin": {
    "btc": 1.3e-07,
    "name": "SongCoin",
    "rank": 627,
    "ticker": "song",
    "usd": 0.000568
  }
}, {
  "coin": {
    "btc": 6.2e-07,
    "name": "SoonCoin",
    "rank": 595,
    "ticker": "soon",
    "usd": 0.002719
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "SoulCoin",
    "rank": 777,
    "ticker": "soul",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 8.5e-07,
    "name": "SpaceCoin",
    "rank": 521,
    "ticker": "space",
    "usd": 0.003738
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "SproutsExtreme",
    "rank": 468,
    "ticker": "spex",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 0.00058904,
    "name": "Sphere",
    "rank": 125,
    "ticker": "sphr",
    "usd": 2.59
  }
}, {
  "coin": {
    "btc": 1.6e-07,
    "name": "SportsCoin",
    "rank": 786,
    "ticker": "sport",
    "usd": 0.000702
  }
}, {
  "coin": {
    "btc": 0.00038208,
    "name": "SpreadCoin",
    "rank": 95,
    "ticker": "spr",
    "usd": 1.68
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Sprouts",
    "rank": 69,
    "ticker": "sprts",
    "usd": 3.9e-05
  }
}, {
  "coin": {
    "btc": 6.9e-07,
    "name": "Spots",
    "rank": 533,
    "ticker": "spt",
    "usd": 0.003044
  }
}, {
  "coin": {
    "btc": 1.94e-06,
    "name": "SecureCoin",
    "rank": 530,
    "ticker": "src",
    "usd": 0.00855
  }
}, {
  "coin": {
    "btc": 1.22e-05,
    "name": "Startcoin",
    "rank": 206,
    "ticker": "start",
    "usd": 0.053626
  }
}, {
  "coin": {
    "btc": 0.00021701,
    "name": "Stakecoin",
    "rank": 377,
    "ticker": "stcn",
    "usd": 0.954204
  }
}, {
  "coin": {
    "btc": 0.00029339,
    "name": "Steem",
    "rank": 18,
    "ticker": "steem",
    "usd": 1.29
  }
}, {
  "coin": {
    "btc": 4.5e-07,
    "name": "Steps",
    "rank": 587,
    "ticker": "steps",
    "usd": 0.001977
  }
}, {
  "coin": {
    "btc": 0.00087333,
    "name": "Stratis",
    "rank": 17,
    "ticker": "strat",
    "usd": 3.84
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "SuperTurboStake",
    "rank": 842,
    "ticker": "strb",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 8.0e-08,
    "name": "Stress",
    "rank": 436,
    "ticker": "sts",
    "usd": 0.000353
  }
}, {
  "coin": {
    "btc": 2.34e-06,
    "name": "Sativacoin",
    "rank": 524,
    "ticker": "stv",
    "usd": 0.010279
  }
}, {
  "coin": {
    "btc": 0.00010274,
    "name": "Sumokoin",
    "rank": 265,
    "ticker": "sumo",
    "usd": 0.451756
  }
}, {
  "coin": {
    "btc": 2.09e-06,
    "name": "SuperCoin",
    "rank": 409,
    "ticker": "super",
    "usd": 0.009168
  }
}, {
  "coin": {
    "btc": 0.00027974,
    "name": "Bitswift",
    "rank": 158,
    "ticker": "swift",
    "usd": 1.23
  }
}, {
  "coin": {
    "btc": 1.568e-05,
    "name": "Swing",
    "rank": 442,
    "ticker": "swing",
    "usd": 0.068948
  }
}, {
  "coin": {
    "btc": 2.09e-06,
    "name": "Sexcoin",
    "rank": 245,
    "ticker": "sxc",
    "usd": 0.009205
  }
}, {
  "coin": {
    "btc": 0.04322997,
    "name": "Sync",
    "rank": 868,
    "ticker": "sync",
    "usd": 190.08
  }
}, {
  "coin": {
    "btc": 4.789e-05,
    "name": "Syndicate",
    "rank": 188,
    "ticker": "synx",
    "usd": 0.210562
  }
}, {
  "coin": {
    "btc": 3.361e-05,
    "name": "Syscoin",
    "rank": 41,
    "ticker": "sys",
    "usd": 0.147798
  }
}, {
  "coin": {
    "btc": 1.261e-05,
    "name": "TagCoin",
    "rank": 420,
    "ticker": "tag",
    "usd": 0.055459
  }
}, {
  "coin": {
    "btc": 2.0e-07,
    "name": "TAGRcoin",
    "rank": 593,
    "ticker": "tagr",
    "usd": 0.000877
  }
}, {
  "coin": {
    "btc": 9.4e-07,
    "name": "TajCoin",
    "rank": 606,
    "ticker": "taj",
    "usd": 0.004141
  }
}, {
  "coin": {
    "btc": 1.54e-06,
    "name": "BTCtalkcoin",
    "rank": 408,
    "ticker": "talk",
    "usd": 0.006757
  }
}, {
  "coin": {
    "btc": 3.136e-05,
    "name": "The ChampCoin",
    "rank": 76,
    "ticker": "tcc",
    "usd": 0.137899
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "T-coin",
    "rank": 740,
    "ticker": "tcoin",
    "usd": 8.8e-05
  }
}, {
  "coin": {
    "btc": 6.0e-08,
    "name": "TheCreed",
    "rank": 841,
    "ticker": "tcr",
    "usd": 0.000263
  }
}, {
  "coin": {
    "btc": 4.0e-08,
    "name": "TeamUp",
    "rank": 836,
    "ticker": "team",
    "usd": 0.000175
  }
}, {
  "coin": {
    "btc": 3.0e-08,
    "name": "TEKcoin",
    "rank": 326,
    "ticker": "tek",
    "usd": 0.000122
  }
}, {
  "coin": {
    "btc": 3.0e-08,
    "name": "Tellurion",
    "rank": 803,
    "ticker": "tell",
    "usd": 0.000121
  }
}, {
  "coin": {
    "btc": 0.00367343,
    "name": "TerraNova",
    "rank": 761,
    "ticker": "ter",
    "usd": 16.12
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "TeraCoin",
    "rank": 691,
    "ticker": "tera",
    "usd": 8.8e-05
  }
}, {
  "coin": {
    "btc": 2.72e-06,
    "name": "TeslaCoin",
    "rank": 261,
    "ticker": "tes",
    "usd": 0.011948
  }
}, {
  "coin": {
    "btc": 5.5e-07,
    "name": "Tigercoin",
    "rank": 485,
    "ticker": "tgc",
    "usd": 0.002412
  }
}, {
  "coin": {
    "btc": 3.84e-06,
    "name": "HempCoin",
    "rank": 176,
    "ticker": "thc",
    "usd": 0.016881
  }
}, {
  "coin": {
    "btc": 0.00012652,
    "name": "TechShares",
    "rank": 693,
    "ticker": "ths",
    "usd": 0.556289
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "FedoraCoin",
    "rank": 237,
    "ticker": "tips",
    "usd": 3.0e-06
  }
}, {
  "coin": {
    "btc": 1.01e-06,
    "name": "Titcoin",
    "rank": 433,
    "ticker": "tit",
    "usd": 0.004441
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "Tickets",
    "rank": 334,
    "ticker": "tix",
    "usd": 2.0e-06
  }
}, {
  "coin": {
    "btc": 2.887e-05,
    "name": "Tattoocoin (L...",
    "rank": 860,
    "ticker": "tle",
    "usd": 0.126941
  }
}, {
  "coin": {
    "btc": 1.16e-06,
    "name": "ToaCoin",
    "rank": 120,
    "ticker": "toa",
    "usd": 0.005107
  }
}, {
  "coin": {
    "btc": 2.5e-07,
    "name": "TodayCoin",
    "rank": 815,
    "ticker": "today",
    "usd": 0.001096
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "SwapToken",
    "rank": 395,
    "ticker": "token",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 1.1e-07,
    "name": "TopCoin",
    "rank": 764,
    "ticker": "top",
    "usd": 0.000482
  }
}, {
  "coin": {
    "btc": 3.139e-05,
    "name": "Topaz Coin",
    "rank": 788,
    "ticker": "topaz",
    "usd": 0.138037
  }
}, {
  "coin": {
    "btc": 4.986e-05,
    "name": "Torcoin",
    "rank": 532,
    "ticker": "tor",
    "usd": 0.219235
  }
}, {
  "coin": {
    "btc": 1.15e-06,
    "name": "Tradecoin",
    "rank": 601,
    "ticker": "trade",
    "usd": 0.005042
  }
}, {
  "coin": {
    "btc": 6.285e-05,
    "name": "Terracoin",
    "rank": 145,
    "ticker": "trc",
    "usd": 0.276336
  }
}, {
  "coin": {
    "btc": 0.00101434,
    "name": "Triangles",
    "rank": 295,
    "ticker": "tri",
    "usd": 4.46
  }
}, {
  "coin": {
    "btc": 1.41e-06,
    "name": "TrickyCoin",
    "rank": 804,
    "ticker": "trick",
    "usd": 0.006182
  }
}, {
  "coin": {
    "btc": 3.1e-07,
    "name": "Truckcoin",
    "rank": 321,
    "ticker": "trk",
    "usd": 0.001359
  }
}, {
  "coin": {
    "btc": 1.6e-07,
    "name": "Trollcoin",
    "rank": 413,
    "ticker": "troll",
    "usd": 0.000699
  }
}, {
  "coin": {
    "btc": 1.31e-05,
    "name": "TrumpCoin",
    "rank": 292,
    "ticker": "trump",
    "usd": 0.057483
  }
}, {
  "coin": {
    "btc": 3.155e-05,
    "name": "TrustPlus",
    "rank": 164,
    "ticker": "trust",
    "usd": 0.138732
  }
}, {
  "coin": {
    "btc": 1.5e-07,
    "name": "Tattoocoin (S...",
    "rank": 553,
    "ticker": "tse",
    "usd": 0.000639
  }
}, {
  "coin": {
    "btc": 4.93e-06,
    "name": "Tristar Coin",
    "rank": 482,
    "ticker": "tstr",
    "usd": 0.021656
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "TittieCoin",
    "rank": 481,
    "ticker": "ttc",
    "usd": 8.8e-05
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "TurboCoin",
    "rank": 830,
    "ticker": "turbo",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 9.723e-05,
    "name": "TransferCoin",
    "rank": 200,
    "ticker": "tx",
    "usd": 0.427519
  }
}, {
  "coin": {
    "btc": 3.969e-05,
    "name": "Tyrocoin",
    "rank": 716,
    "ticker": "tyc",
    "usd": 0.174511
  }
}, {
  "coin": {
    "btc": 3.562e-05,
    "name": "Tychocoin",
    "rank": 262,
    "ticker": "tycho",
    "usd": 0.156622
  }
}, {
  "coin": {
    "btc": 2.53e-06,
    "name": "TrezarCoin",
    "rank": 258,
    "ticker": "tzc",
    "usd": 0.011137
  }
}, {
  "coin": {
    "btc": 5.0e-07,
    "name": "UCoin",
    "rank": 666,
    "ticker": "u",
    "usd": 0.002182
  }
}, {
  "coin": {
    "btc": 0.0004071,
    "name": "Ubiq",
    "rank": 43,
    "ticker": "ubq",
    "usd": 1.79
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "UFO Coin",
    "rank": 301,
    "ticker": "ufo",
    "usd": 8.8e-05
  }
}, {
  "coin": {
    "btc": 3.11e-06,
    "name": "Unitus",
    "rank": 273,
    "ticker": "uis",
    "usd": 0.013681
  }
}, {
  "coin": {
    "btc": 1.275e-05,
    "name": "Ulatech",
    "rank": 370,
    "ticker": "ula",
    "usd": 0.055959
  }
}, {
  "coin": {
    "btc": 6.893e-05,
    "name": "UnbreakableCoin",
    "rank": 270,
    "ticker": "unb",
    "usd": 0.302486
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "UNCoin",
    "rank": 782,
    "ticker": "unc",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 3.99e-06,
    "name": "Universe",
    "rank": 459,
    "ticker": "uni",
    "usd": 0.017539
  }
}, {
  "coin": {
    "btc": 2.063e-05,
    "name": "UniCoin",
    "rank": 428,
    "ticker": "unic",
    "usd": 0.090729
  }
}, {
  "coin": {
    "btc": 1.34e-05,
    "name": "Unify",
    "rank": 254,
    "ticker": "unify",
    "usd": 0.058811
  }
}, {
  "coin": {
    "btc": 2.31e-06,
    "name": "Universal Cur...",
    "rank": 463,
    "ticker": "unit",
    "usd": 0.010176
  }
}, {
  "coin": {
    "btc": 7.4e-06,
    "name": "GameUnits",
    "rank": 479,
    "ticker": "units",
    "usd": 0.032541
  }
}, {
  "coin": {
    "btc": 0.02835058,
    "name": "Unobtanium",
    "rank": 71,
    "ticker": "uno",
    "usd": 124.41
  }
}, {
  "coin": {
    "btc": 2.0e-07,
    "name": "UniversalRoya...",
    "rank": 770,
    "ticker": "unrc",
    "usd": 0.000877
  }
}, {
  "coin": {
    "btc": 1.5e-07,
    "name": "UR",
    "rank": 778,
    "ticker": "ur",
    "usd": 0.000657
  }
}, {
  "coin": {
    "btc": 1.8e-06,
    "name": "Unrealcoin",
    "rank": 553,
    "ticker": "urc",
    "usd": 0.007933
  }
}, {
  "coin": {
    "btc": 9.68e-06,
    "name": "Uro",
    "rank": 556,
    "ticker": "uro",
    "usd": 0.04257
  }
}, {
  "coin": {
    "btc": 3.169e-05,
    "name": "Ultimate Secu...",
    "rank": 226,
    "ticker": "usc",
    "usd": 0.139323
  }
}, {
  "coin": {
    "btc": 3.0e-08,
    "name": "USDe",
    "rank": 454,
    "ticker": "usde",
    "usd": 0.000132
  }
}, {
  "coin": {
    "btc": 0.00022743,
    "name": "NuBits",
    "rank": 257,
    "ticker": "usnbt",
    "usd": 1.0
  }
}, {
  "coin": {
    "btc": 4.8e-07,
    "name": "UtaCoin",
    "rank": 773,
    "ticker": "uta",
    "usd": 0.002105
  }
}, {
  "coin": {
    "btc": 2.06e-06,
    "name": "UltraCoin",
    "rank": 411,
    "ticker": "utc",
    "usd": 0.009076
  }
}, {
  "coin": {
    "btc": 1.1e-07,
    "name": "Version",
    "rank": 432,
    "ticker": "v",
    "usd": 0.000483
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Valorbit",
    "rank": 449,
    "ticker": "val",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 2.43e-06,
    "name": "VPNCoin",
    "rank": 169,
    "ticker": "vash",
    "usd": 0.010686
  }
}, {
  "coin": {
    "btc": 2.84e-06,
    "name": "VirtualCoin",
    "rank": 469,
    "ticker": "vc",
    "usd": 0.012496
  }
}, {
  "coin": {
    "btc": 1.0e-06,
    "name": "Vector",
    "rank": 527,
    "ticker": "vec2",
    "usd": 0.004384
  }
}, {
  "coin": {
    "btc": 6.521e-05,
    "name": "VeChain",
    "rank": 40,
    "ticker": "ven",
    "usd": 0.28673
  }
}, {
  "coin": {
    "btc": 1.6e-07,
    "name": "VegasCoin",
    "rank": 787,
    "ticker": "vgc",
    "usd": 0.0007
  }
}, {
  "coin": {
    "btc": 0.00033271,
    "name": "Viacoin",
    "rank": 59,
    "ticker": "via",
    "usd": 1.46
  }
}, {
  "coin": {
    "btc": 3.3e-07,
    "name": "PureVidz",
    "rank": 443,
    "ticker": "vidz",
    "usd": 0.00143
  }
}, {
  "coin": {
    "btc": 9.0e-08,
    "name": "VIP Tokens",
    "rank": 600,
    "ticker": "vip",
    "usd": 0.000395
  }
}, {
  "coin": {
    "btc": 1.494e-05,
    "name": "Visio",
    "rank": 184,
    "ticker": "visio",
    "usd": 0.065582
  }
}, {
  "coin": {
    "btc": 0.00111668,
    "name": "VIVO",
    "rank": 220,
    "ticker": "vivo",
    "usd": 4.91
  }
}, {
  "coin": {
    "btc": 0.00012099,
    "name": "Veltor",
    "rank": 301,
    "ticker": "vlt",
    "usd": 0.530929
  }
}, {
  "coin": {
    "btc": 1.2e-07,
    "name": "Vault Coin",
    "rank": 367,
    "ticker": "vltc",
    "usd": 0.000517
  }
}, {
  "coin": {
    "btc": 1.3e-07,
    "name": "Bitvolt",
    "rank": 656,
    "ticker": "volt",
    "usd": 0.00057
  }
}, {
  "coin": {
    "btc": 1.156e-05,
    "name": "Voxels",
    "rank": 109,
    "ticker": "vox",
    "usd": 0.05081
  }
}, {
  "coin": {
    "btc": 0.0005697,
    "name": "Voyacoin",
    "rank": 760,
    "ticker": "voya",
    "usd": 2.5
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "VapersCoin",
    "rank": 591,
    "ticker": "vprc",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 7.335e-05,
    "name": "VeriCoin",
    "rank": 111,
    "ticker": "vrc",
    "usd": 0.321865
  }
}, {
  "coin": {
    "btc": 0.00046623,
    "name": "VeriumReserve",
    "rank": 198,
    "ticker": "vrm",
    "usd": 2.05
  }
}, {
  "coin": {
    "btc": 1.43e-06,
    "name": "Vsync",
    "rank": 276,
    "ticker": "vsx",
    "usd": 0.006293
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "Virtacoin",
    "rank": 604,
    "ticker": "vta",
    "usd": 6.0e-06
  }
}, {
  "coin": {
    "btc": 0.00023244,
    "name": "Vertcoin",
    "rank": 52,
    "ticker": "vtc",
    "usd": 1.02
  }
}, {
  "coin": {
    "btc": 6.981e-05,
    "name": "vTorrent",
    "rank": 185,
    "ticker": "vtr",
    "usd": 0.30693
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Victoriouscoin",
    "rank": 796,
    "ticker": "vty",
    "usd": 3.9e-05
  }
}, {
  "coin": {
    "btc": 8.3e-07,
    "name": "Virta Unique ...",
    "rank": 318,
    "ticker": "vuc",
    "usd": 0.003629
  }
}, {
  "coin": {
    "btc": 3.55e-06,
    "name": "WA Space",
    "rank": 709,
    "ticker": "wa",
    "usd": 0.015563
  }
}, {
  "coin": {
    "btc": 9.73e-06,
    "name": "WARP",
    "rank": 565,
    "ticker": "warp",
    "usd": 0.042699
  }
}, {
  "coin": {
    "btc": 0.00110986,
    "name": "Waves",
    "rank": 16,
    "ticker": "waves",
    "usd": 4.88
  }
}, {
  "coin": {
    "btc": 3.1e-07,
    "name": "WayGuide",
    "rank": 460,
    "ticker": "way",
    "usd": 0.001359
  }
}, {
  "coin": {
    "btc": 0.00038891,
    "name": "Wild Beast Block",
    "rank": 170,
    "ticker": "wbb",
    "usd": 1.71
  }
}, {
  "coin": {
    "btc": 0.00041392,
    "name": "WalletBuilder...",
    "rank": 592,
    "ticker": "wbc",
    "usd": 1.82
  }
}, {
  "coin": {
    "btc": 2.63e-06,
    "name": "WorldCoin",
    "rank": 234,
    "ticker": "wdc",
    "usd": 0.011554
  }
}, {
  "coin": {
    "btc": 2.638e-05,
    "name": "Wowecoin",
    "rank": 769,
    "ticker": "wec",
    "usd": 0.116
  }
}, {
  "coin": {
    "btc": 1.557e-05,
    "name": "Wexcoin",
    "rank": 642,
    "ticker": "wex",
    "usd": 0.068443
  }
}, {
  "coin": {
    "btc": 4.0e-08,
    "name": "Wink",
    "rank": 785,
    "ticker": "wink",
    "usd": 0.000157
  }
}, {
  "coin": {
    "btc": 1.71e-06,
    "name": "WMCoin",
    "rank": 507,
    "ticker": "wmc",
    "usd": 0.007529
  }
}, {
  "coin": {
    "btc": 3.86e-06,
    "name": "WomenCoin",
    "rank": 291,
    "ticker": "women",
    "usd": 0.016951
  }
}, {
  "coin": {
    "btc": 1.5e-07,
    "name": "HealthyWormCoin",
    "rank": 349,
    "ticker": "worm",
    "usd": 0.000658
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Wowcoin",
    "rank": 819,
    "ticker": "wow",
    "usd": 4.5e-05
  }
}, {
  "coin": {
    "btc": 2.9e-07,
    "name": "WeAreSatoshi",
    "rank": 844,
    "ticker": "wsx",
    "usd": 0.001272
  }
}, {
  "coin": {
    "btc": 1.449e-05,
    "name": "Wyvern",
    "rank": 489,
    "ticker": "wyv",
    "usd": 0.063566
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "X2",
    "rank": 863,
    "ticker": "x2",
    "usd": 8.8e-05
  }
}, {
  "coin": {
    "btc": 5.418e-05,
    "name": "Asch",
    "rank": 82,
    "ticker": "xas",
    "usd": 0.238244
  }
}, {
  "coin": {
    "btc": 5.07e-06,
    "name": "Xaucoin",
    "rank": 847,
    "ticker": "xau",
    "usd": 0.022274
  }
}, {
  "coin": {
    "btc": 0.0149581,
    "name": "Bitcoin Plus",
    "rank": 133,
    "ticker": "xbc",
    "usd": 65.77
  }
}, {
  "coin": {
    "btc": 2.69e-06,
    "name": "BTCGold",
    "rank": 685,
    "ticker": "xbg",
    "usd": 0.011839
  }
}, {
  "coin": {
    "btc": 2.024e-05,
    "name": "Bitcoin 21",
    "rank": 529,
    "ticker": "xbtc21",
    "usd": 0.088817
  }
}, {
  "coin": {
    "btc": 4.98e-06,
    "name": "Beatcoin",
    "rank": 598,
    "ticker": "xbts",
    "usd": 0.021883
  }
}, {
  "coin": {
    "btc": 4.1e-06,
    "name": "XTRABYTES",
    "rank": 129,
    "ticker": "xby",
    "usd": 0.018007
  }
}, {
  "coin": {
    "btc": 0.00026837,
    "name": "XCurrency",
    "rank": 131,
    "ticker": "xc",
    "usd": 1.18
  }
}, {
  "coin": {
    "btc": 4.1e-07,
    "name": "Cryptonite",
    "rank": 396,
    "ticker": "xcn",
    "usd": 0.001794
  }
}, {
  "coin": {
    "btc": 1.69e-06,
    "name": "X-Coin",
    "rank": 498,
    "ticker": "xco",
    "usd": 0.00741
  }
}, {
  "coin": {
    "btc": 0.0023016,
    "name": "Counterparty",
    "rank": 67,
    "ticker": "xcp",
    "usd": 10.12
  }
}, {
  "coin": {
    "btc": 3.9e-07,
    "name": "Creatio",
    "rank": 590,
    "ticker": "xcre",
    "usd": 0.001701
  }
}, {
  "coin": {
    "btc": 1.2e-07,
    "name": "C-Bit",
    "rank": 345,
    "ticker": "xct",
    "usd": 0.000508
  }
}, {
  "coin": {
    "btc": 5.17e-06,
    "name": "CoinonatX",
    "rank": 300,
    "ticker": "xcxt",
    "usd": 0.022712
  }
}, {
  "coin": {
    "btc": 0.00050944,
    "name": "XDE II",
    "rank": 754,
    "ticker": "xde2",
    "usd": 2.24
  }
}, {
  "coin": {
    "btc": 5.1e-07,
    "name": "DigitalNote",
    "rank": 90,
    "ticker": "xdn",
    "usd": 0.002253
  }
}, {
  "coin": {
    "btc": 0.00010359,
    "name": "Elastic",
    "rank": 54,
    "ticker": "xel",
    "usd": 0.454563
  }
}, {
  "coin": {
    "btc": 5.265e-05,
    "name": "NEM",
    "rank": 7,
    "ticker": "xem",
    "usd": 0.231021
  }
}, {
  "coin": {
    "btc": 2.39e-06,
    "name": "Xenixcoin",
    "rank": 677,
    "ticker": "xen",
    "usd": 0.010523
  }
}, {
  "coin": {
    "btc": 5.787e-05,
    "name": "Footy Cash",
    "rank": 244,
    "ticker": "xft",
    "usd": 0.254466
  }
}, {
  "coin": {
    "btc": 1.51e-06,
    "name": "GoldReserve",
    "rank": 478,
    "ticker": "xgr",
    "usd": 0.006621
  }
}, {
  "coin": {
    "btc": 1.17e-06,
    "name": "HiCoin",
    "rank": 256,
    "ticker": "xhi",
    "usd": 0.005129
  }
}, {
  "coin": {
    "btc": 1.4e-06,
    "name": "International...",
    "rank": 720,
    "ticker": "xid",
    "usd": 0.006139
  }
}, {
  "coin": {
    "btc": 8.1e-07,
    "name": "Joulecoin",
    "rank": 336,
    "ticker": "xjo",
    "usd": 0.003572
  }
}, {
  "coin": {
    "btc": 6.61e-06,
    "name": "LeviarCoin",
    "rank": 749,
    "ticker": "xlc",
    "usd": 0.028997
  }
}, {
  "coin": {
    "btc": 2.94e-06,
    "name": "Stellar Lumens",
    "rank": 23,
    "ticker": "xlm",
    "usd": 0.012895
  }
}, {
  "coin": {
    "btc": 0.00010576,
    "name": "Solaris",
    "rank": 314,
    "ticker": "xlr",
    "usd": 0.465034
  }
}, {
  "coin": {
    "btc": 0.00014814,
    "name": "MonacoCoin",
    "rank": 228,
    "ticker": "xmcc",
    "usd": 0.650094
  }
}, {
  "coin": {
    "btc": 5.819e-05,
    "name": "Magi",
    "rank": 214,
    "ticker": "xmg",
    "usd": 0.255369
  }
}, {
  "coin": {
    "btc": 0.02098093,
    "name": "Monero",
    "rank": 10,
    "ticker": "xmr",
    "usd": 92.07
  }
}, {
  "coin": {
    "btc": 5.6e-07,
    "name": "Myriad",
    "rank": 180,
    "ticker": "xmy",
    "usd": 0.002455
  }
}, {
  "coin": {
    "btc": 4.886e-05,
    "name": "Enigma",
    "rank": 668,
    "ticker": "xng",
    "usd": 0.214851
  }
}, {
  "coin": {
    "btc": 9.97e-06,
    "name": "Xonecoin",
    "rank": 630,
    "ticker": "xoc",
    "usd": 0.043847
  }
}, {
  "coin": {
    "btc": 0.0,
    "name": "XP",
    "rank": 219,
    "ticker": "xp",
    "usd": 1.2e-05
  }
}, {
  "coin": {
    "btc": 4.2e-07,
    "name": "PetroDollar",
    "rank": 476,
    "ticker": "xpd",
    "usd": 0.001834
  }
}, {
  "coin": {
    "btc": 4.209e-05,
    "name": "Primecoin",
    "rank": 176,
    "ticker": "xpm",
    "usd": 0.184715
  }
}, {
  "coin": {
    "btc": 0.00016941,
    "name": "PlatinumBAR",
    "rank": 315,
    "ticker": "xptx",
    "usd": 0.74488
  }
}, {
  "coin": {
    "btc": 3.99e-06,
    "name": "PayCoin",
    "rank": 435,
    "ticker": "xpy",
    "usd": 0.017539
  }
}, {
  "coin": {
    "btc": 1.79e-06,
    "name": "Quotient",
    "rank": 713,
    "ticker": "xqn",
    "usd": 0.007892
  }
}, {
  "coin": {
    "btc": 3.6e-07,
    "name": "Ratecoin",
    "rank": 447,
    "ticker": "xra",
    "usd": 0.001589
  }
}, {
  "coin": {
    "btc": 1.746e-05,
    "name": "RaiBlocks",
    "rank": 114,
    "ticker": "xrb",
    "usd": 0.07679
  }
}, {
  "coin": {
    "btc": 2.01e-06,
    "name": "Rawcoin",
    "rank": 663,
    "ticker": "xrc",
    "usd": 0.008818
  }
}, {
  "coin": {
    "btc": 1.23e-06,
    "name": "RevolverCoin",
    "rank": 473,
    "ticker": "xre",
    "usd": 0.005422
  }
}, {
  "coin": {
    "btc": 4.654e-05,
    "name": "Ripple",
    "rank": 3,
    "ticker": "xrp",
    "usd": 0.204634
  }
}, {
  "coin": {
    "btc": 8.94e-06,
    "name": "Royalties",
    "rank": 799,
    "ticker": "xry",
    "usd": 0.039236
  }
}, {
  "coin": {
    "btc": 0.00010055,
    "name": "Spectrecoin",
    "rank": 115,
    "ticker": "xspec",
    "usd": 0.441229
  }
}, {
  "coin": {
    "btc": 4.451e-05,
    "name": "Stealthcoin",
    "rank": 153,
    "ticker": "xst",
    "usd": 0.195692
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Safe Trade Coin",
    "rank": 746,
    "ticker": "xstc",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "XTD Coin",
    "rank": 699,
    "ticker": "xtd",
    "usd": 8.8e-05
  }
}, {
  "coin": {
    "btc": 2.173e-05,
    "name": "Tao",
    "rank": 191,
    "ticker": "xto",
    "usd": 0.095556
  }
}, {
  "coin": {
    "btc": 0.00043894,
    "name": "Tezos (Pre-La...",
    "rank": 684,
    "ticker": "xtz",
    "usd": 1.93
  }
}, {
  "coin": {
    "btc": 9.664e-05,
    "name": "Vcash",
    "rank": 137,
    "ticker": "xvc",
    "usd": 0.424101
  }
}, {
  "coin": {
    "btc": 5.0e-08,
    "name": "The Vegan Ini...",
    "rank": 730,
    "ticker": "xve",
    "usd": 0.00022
  }
}, {
  "coin": {
    "btc": 1.65e-06,
    "name": "Verge",
    "rank": 35,
    "ticker": "xvg",
    "usd": 0.007229
  }
}, {
  "coin": {
    "btc": 1.292e-05,
    "name": "Virtacoinplus",
    "rank": 279,
    "ticker": "xvp",
    "usd": 0.056791
  }
}, {
  "coin": {
    "btc": 1.06e-06,
    "name": "Vsync",
    "rank": 281,
    "ticker": "xvs",
    "usd": 0.004668
  }
}, {
  "coin": {
    "btc": 5.8e-06,
    "name": "WhiteCoin",
    "rank": 140,
    "ticker": "xwc",
    "usd": 0.02547
  }
}, {
  "coin": {
    "btc": 0.00266321,
    "name": "ZCoin",
    "rank": 55,
    "ticker": "xzc",
    "usd": 11.71
  }
}, {
  "coin": {
    "btc": 2.6e-07,
    "name": "Yacoin",
    "rank": 461,
    "ticker": "yac",
    "usd": 0.00114
  }
}, {
  "coin": {
    "btc": 4.787e-05,
    "name": "YashCoin",
    "rank": 381,
    "ticker": "yash",
    "usd": 0.210466
  }
}, {
  "coin": {
    "btc": 0.00021969,
    "name": "YbCoin",
    "rank": 376,
    "ticker": "ybc",
    "usd": 0.965959
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "Yescoin",
    "rank": 745,
    "ticker": "yes",
    "usd": 3.3e-05
  }
}, {
  "coin": {
    "btc": 1.6e-07,
    "name": "Yogold",
    "rank": 877,
    "ticker": "yog",
    "usd": 0.000705
  }
}, {
  "coin": {
    "btc": 6.92e-06,
    "name": "Zilbercoin",
    "rank": 722,
    "ticker": "zbc",
    "usd": 0.030361
  }
}, {
  "coin": {
    "btc": 5.31e-06,
    "name": "ZcCoin",
    "rank": 227,
    "ticker": "zcc",
    "usd": 0.023329
  }
}, {
  "coin": {
    "btc": 0.00050717,
    "name": "ZClassic",
    "rank": 172,
    "ticker": "zcl",
    "usd": 2.23
  }
}, {
  "coin": {
    "btc": 0.05866777,
    "name": "Zcash",
    "rank": 15,
    "ticker": "zec",
    "usd": 257.45
  }
}, {
  "coin": {
    "btc": 2.0e-08,
    "name": "Zeitcoin",
    "rank": 192,
    "ticker": "zeit",
    "usd": 7.9e-05
  }
}, {
  "coin": {
    "btc": 0.00174784,
    "name": "ZenCash",
    "rank": 85,
    "ticker": "zen",
    "usd": 7.67
  }
}, {
  "coin": {
    "btc": 3.5e-07,
    "name": "Zennies",
    "rank": 225,
    "ticker": "zeni",
    "usd": 0.001535
  }
}, {
  "coin": {
    "btc": 3.889e-05,
    "name": "Zero",
    "rank": 306,
    "ticker": "zer",
    "usd": 0.171004
  }
}, {
  "coin": {
    "btc": 9.8e-07,
    "name": "Zetacoin",
    "rank": 393,
    "ticker": "zet",
    "usd": 0.004301
  }
}, {
  "coin": {
    "btc": 1.0e-08,
    "name": "ZetaMicron",
    "rank": 614,
    "ticker": "zmc",
    "usd": 4.4e-05
  }
}, {
  "coin": {
    "btc": 1.33e-06,
    "name": "Zonecoin",
    "rank": 647,
    "ticker": "zne",
    "usd": 0.005832
  }
}, {
  "coin": {
    "btc": 2.0e-07,
    "name": "Bitzeny",
    "rank": 539,
    "ticker": "zny",
    "usd": 0.000877
  }
}, {
  "coin": {
    "btc": 1.73e-05,
    "name": "Zoin",
    "rank": 253,
    "ticker": "zoi",
    "usd": 0.076071
  }
}, {
  "coin": {
    "btc": 1.21e-06,
    "name": "ZSEcoin",
    "rank": 813,
    "ticker": "zse",
    "usd": 0.005328
  }
}, {
  "coin": {
    "btc": 5.1e-07,
    "name": "Zurcoin",
    "rank": 322,
    "ticker": "zur",
    "usd": 0.002225
  }
}, {
  "coin": {
    "btc": 1.37e-06,
    "name": "Zayedcoin",
    "rank": 586,
    "ticker": "zyd",
    "usd": 0.006007
  }
}];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.result_ranking = undefined;

var _merged_ranking = __webpack_require__(1);

var ranking = {};

_merged_ranking.MERGED_RANKING.forEach(function (coin) {
  ranking[coin.coin.ticker] = coin.coin;
});

var result_ranking = exports.result_ranking = ranking;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map