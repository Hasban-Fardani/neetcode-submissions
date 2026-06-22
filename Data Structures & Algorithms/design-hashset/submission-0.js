class MyHashSet {
    constructor() {
        this.arr = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.arr.push(key)
        // console.log('[ADD] key : ', key, 'arr', this.arr)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.arr = this.arr.filter(v => v != key)
        // console.log('[REMOVE] key : ', key, 'arr', this.arr)
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let c = this.arr.includes(key)
        // console.log('[CONTAINS] key : ', key, 'arr', this.arr, 'contain',c)
        return c
    }
}


var obj = new MyHashSet()
obj.add(1)
obj.remove(1)
var param_3 = obj.contains(1)

