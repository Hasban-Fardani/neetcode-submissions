class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let unique = [...new Set(nums)]
        return Math.abs(unique.length - nums.length) > 0
    }
}
