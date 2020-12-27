// Say you have an array prices for which the ith element is the price of a given stock on day i.
// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
// buy, sell  > sell - buy
// first day alway buys
// second day alway sells

function maxProfit(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    const possibleProfit = prices[i + 1] - prices[i];

    console.log(
      '🚀 ~ file: 2.bestBuy.js ~ line 13 ~ maxProfit ~ prices[i',
      prices[i]
    );
    console.log(
      '🚀 ~ file: 2.bestBuy.js ~ line 13 ~ maxProfit ~ prices[i + 1]',
      prices[i + 1]
    );
    console.log(
      '🚀 ~ file: 2.bestBuy.js ~ line 23 ~ maxProfit ~ possibleProfit',
      possibleProfit
    );

    console.log(
      '🚀 ~ =====file: 2.bestBuy.js ~ line 28 ~ maxProfit ~ maxProfit',
      maxProfit
    );
    maxProfit = Math.max(maxProfit + possibleProfit, maxProfit);
    console.log('🚀 ~ maxProfit', maxProfit);
  }
  return maxProfit;
}

const checkInput = [7, 1, 5, 3, 6, 4];
const checkInput2 = [1, 2, 3, 4, 5];
const checkInput3 = [7, 6, 4, 3, 1];

console.log(maxProfit(checkInput));
