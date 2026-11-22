class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let finalStr = ""

        for (const str of strs) {
            finalStr += String(str.length)
            finalStr += "|"
            finalStr += str
        }
        return finalStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        //134|fjkslfjkljfslfs........21|fsjkfljsfljksf..

        let i = 0;
        let result = []

        while (i < str.length) {

            let nextSeparatorIndex = i + str.slice(i, str.length).indexOf("|")
            let nextNumberSubstring = str.slice(i, nextSeparatorIndex) 
            let lengthToRead = parseInt(nextNumberSubstring)
            let currentStr = ""
            i = nextSeparatorIndex + 1

            for (let o = 0; o < lengthToRead; o++) {
                currentStr += str[i]
                i++;
            }
            result.push(currentStr)

        }
        return result
    }
}
