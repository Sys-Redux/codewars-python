// Given an arr 'prices' where prices[i] is the stock price,
// maximize profit by choosing a single day to buy one stock &
// choosing a different day in the future to sell that stock
// TIME COMPLEXITY === O(n) | SPACE COMPLEXITY === O(1)

class Solution {
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;

        for (let price of prices) {
            minPrice = Math.min(minPrice, price);
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
        return maxProfit;
    }
}