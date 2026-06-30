class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let m = x/2
        let r = 0
        while (r < m && r * r < x) {
            r++
        }

        if (r * r > x) r--

        return r
    }
}
