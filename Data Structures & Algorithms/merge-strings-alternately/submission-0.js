class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let r = ''
        let i = 0
        while (i < word1.length || i < word2.length) {
            if (i < word1.length) {
                r += word1[i]
            } 
            if (i < word2.length) {
                r += word2[i]
            }

            i++
        }

        return r
    }
}
