// Given an arr 'nums,' return true if any value appears at least twice in the arr
// TIME COMPLEXITY === O(n) | SPACE COMPLEXITY === O(n)

class Solution {
    containsDuplicates(nums) {
        const uniqueSet = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (uniqueSet.has(nums[i])) {
                return true;
            }
            uniqueSet.add(nums[i]);
        }
        return false;
    }
}