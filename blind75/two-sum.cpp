// Given an arr of integers 'nums' & an integer target,
// return 2 distinct indices i + j such that: nums[i] + nums[j] == target

#include <vector>
#include <unordered_map>
#include <iostream>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        std::unordered_map<int, int> numIndices;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (numIndices.find(complement) != numIndices.end()) {
                return {numIndices[complement], i};
            }
            numIndices[nums[i]] = i;
        }
        return {};
    }
};

int main() {
    Solution solution;

    // Test case 1: nums = [2, 7, 11, 15], target = 9 -> [0, 1]
    std::vector<int> nums1 = {2, 7, 11, 15};
    std::vector<int> result1 = solution.twoSum(nums1, 9);
    std::cout << "Test 1: [" << result1[0] << ", " << result1[1] << "]" << std::endl;

    // Test case 2: nums = [3, 2, 4], target = 6 -> [1, 2]
    std::vector<int> nums2 = {3, 2, 4};
    std::vector<int> result2 = solution.twoSum(nums2, 6);
    std::cout << "Test 2: [" << result2[0] << ", " << result2[1] << "]" << std::endl;

    // Test case 3: nums = [3, 3], target = 6 -> [0, 1]
    std::vector<int> nums3 = {3, 3};
    std::vector<int> result3 = solution.twoSum(nums3, 6);
    std::cout << "Test 3: [" << result3[0] << ", " << result3[1] << "]" << std::endl;

    return 0;
}
