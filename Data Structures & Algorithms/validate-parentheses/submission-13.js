class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const count = s.length
        if (count % 2 != 0) return false

        const start = ['{','[','('];
        const end   = ['}', ']', ')'];
        let arrStr = s.split('');

        if (start.indexOf(arrStr[count-1]) != -1) {
            return false
        }

        while (arrStr.length > 1) {
            let sI = start.indexOf(arrStr[0]);
            let sL = start[sI];
            let eL = end[sI];
            let sLI = arrStr.indexOf(sL);
            let eLI = arrStr.indexOf(eL);

            if (sLI > eLI || Math.abs(sLI - eLI) % 2 == 0) return false;

            arrStr.splice(eLI, 1);
            arrStr.splice(sLI, 1);
        }

        return arrStr.length == 0
    }
}
