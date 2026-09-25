class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let max = 0;
    
        for (const elem of numbers) {
            if (elem > max) {
                max = elem;
            }
        } 

        let tab = new Array(max).fill(undefined); 

        for (let i = 0; i < numbers.length; i++) {
            let target_delta = target - numbers[i];

            if (tab[target_delta] !== undefined) {
                return [tab[target_delta] + 1, i + 1]
            }
            
            tab[numbers[i]] = i;
        }
    }
}
