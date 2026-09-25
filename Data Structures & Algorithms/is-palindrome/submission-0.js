class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str) {
        let s = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            if (s[i] !== s[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
