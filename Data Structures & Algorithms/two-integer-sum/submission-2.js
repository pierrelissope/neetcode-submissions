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
            console.log("processing: ", nums[i]);
            console.log("looking for:", target_delta)
            let delta_index = map.get(target_delta);  
            if (delta_index !== undefined) {
                console.log("exist at index: ", delta_index);
                return [delta_index, i] 
            }
            console.log("does not exist yet");
            map.set(nums[i], i);
            console.log("stored: ", nums[i]);
            console.log("-------------------")
            i++;
        }
    }
}
