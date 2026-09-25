class Solution {

    isAlphaNum(a) {
        return (
            (a >= 'a' && a <='z') || (a >= 'A' && a <='Z') || (a >= '0' && a <= '9')
        )
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str) {
        let s = str.toLowerCase();

        let i = 0;
        let j = s.length - 1;

        while (i < j) {

            while (i < j && !this.isAlphaNum(s[i])) {
                i++
            }
            while (i < j && !this.isAlphaNum(s[j])) {
                j--
            }

            if (s[i] !== s[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
