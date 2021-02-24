var check = function(nums) {
    let min = nums[0]; 
    let mindex = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] <= min && nums[i-1] > nums[i]){
            min = nums[i];
            mindex = i;
        }
    }
    let end = mindex+nums.length-1;
    for(let i=mindex;i<end;i++){
        
        let point = i+1;
        let prevPoint = i;
        if(point >= nums.length-1){
            point = (point % nums.length);
        }
        if(prevPoint >= nums.length-1){
            prevPoint = (prevPoint % nums.length)
        }
        console.log(point, nums[point], nums[prevPoint]);
        if(nums[prevPoint] > nums[point]){
            console.log(false);
            return false;
        }
    }
    return true;
};