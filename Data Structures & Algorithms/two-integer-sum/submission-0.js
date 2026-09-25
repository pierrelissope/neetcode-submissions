class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0;
        let j = 0;

        while (i < nums.length) {
            j = i + 1;
            while (j < nums.length) {
                if (nums[i] + nums[j] == target)
                    return [i, j];
                j++;
            }
            i++;
        }
        return [i, j] 
    }
}
