class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let major = {}
        for (const num of nums) {
            if (num in major) {
                major[num]++;
            } else {
                major[num] = 1;
            }
        }

        let keys = Object.entries(major).sort((a,b)=> b[1]-a[1])

        return keys[0][0]
    }
}
