class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let index = [];
        const count = nums.length;
        for (let i = 0; i < count; i++) {
            for (let j = count-1; j >= 0; j--) {
                if (nums[i] + nums[j] == target && i != j) {
                    index = [i, j]
                    break;
                }
            }
            if (index.length > 0) break
        }

        index.sort();
        return index;
    }
}
