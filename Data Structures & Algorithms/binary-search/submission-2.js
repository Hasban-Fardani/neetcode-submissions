class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let n = nums.length;
        let c = Math.floor(n/2)
        if (nums[c] == target) return c

        let l = 0; let r = n-1
        let ti = -1;
        while (l != r && l < n) {
            if (nums[l] == target) {
                ti = l
                break
            }
            if (nums[r] == target) {
                ti = r
                break
            }
            l++
            r--
        }

        return ti
    }
}
