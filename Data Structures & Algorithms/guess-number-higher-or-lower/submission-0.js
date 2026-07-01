/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let h = n
        let l = 0
        while (l <= h) {
            const mid = l + Math.floor((h-l) / 2)
            const res = guess(mid)
            if (res == 0) return mid
            else if (res === -1) h = mid - 1
            else l = mid + 1 
        }
        return -1
    }
}
