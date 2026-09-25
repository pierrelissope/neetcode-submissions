class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0;
        let map = new Map()  

        while (i < nums.length) {
            let target_delta = target - nums[i];
            let delta_index = map.get(target_delta);  
            if (delta_index !== undefined) {
                return [delta_index, i] 
            }
            map.set(nums[i], i);
            i++;
        }
    }
}
