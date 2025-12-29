// Given an arr of integers 'nums' & an integer target,
// return 2 distinct indices i + j such that: nums[i] + nums[j] === target
// TIME COMPLEXITY === O(n) | SPACE COMPLEXITY === O(n)

class Solution {
    twoSums(nums, target) {
        const numIndices = {};
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (complement in numIndices) {
                return [numIndices[complement], i];
            }
            numIndices[nums[i]] = i;
        }
    }
}