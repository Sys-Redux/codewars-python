// Given an arr 'prices' where prices[i] is the stock price,
// maximize profit by choosing a single day to buy one stock &
// choosing a different day in the future to sell that stock
// TIME COMPLEXITY === O(n) | SPACE COMPLEXITY === O(1)

#include <vector>
#include <algorithm>
#include <climits>

class Solution {
public:
    int maxProfit(std::vector<int>& prices) {
        int minPrice = INT_MAX;
        int maxProfit = 0;

        for (int price : prices) {
            minPrice = std::min(minPrice, price);
            maxProfit = std::max(maxProfit, price - minPrice);
        }
        return maxProfit;
    }
};