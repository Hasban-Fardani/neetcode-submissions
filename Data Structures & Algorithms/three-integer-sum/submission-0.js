class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const seen = new Set();
        const result = [];

        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            for (let j = i + 1, k = nums.length - 1; j < k;) {
                const sum = nums[i] + nums[j] + nums[k];

                if (sum < 0) {
                    j++;
                } else if (sum > 0) {
                    k--;
                } else {
                    const key = `${nums[i]},${nums[j]},${nums[k]}`;
                    if (!seen.has(key)) {
                        seen.add(key);
                        result.push([nums[i], nums[j], nums[k]]);
                    }
                    j++;
                    k--;
                }
            }
        }

        return result;
    }
}
