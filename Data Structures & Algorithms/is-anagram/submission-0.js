class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let len = s.length;

        if (t.length !== len) {
            return false;
        }

        let ms = new Map();
        let mt = new Map();

        for (let i = 0; i < len; i++) {
            let si = ms.get(s[i]);
            let ti = mt.get(t[i]);

            if (si !== undefined) {
                ms.set(s[i], si + 1)
            } else {
                ms.set(s[i], 1);
            }
            if (ti !== undefined) {
                mt.set(t[i], ti + 1)
            } else {
                mt.set(t[i], 1);
            }
        }

        for (const key of ms.keys()) {
            if (mt.get(key) !== ms.get(key))
                return false
        }
        return true; 
    }
}
