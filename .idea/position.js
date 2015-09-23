
/**
 * Created by sora1234 on 9/22/2015.
 */

function position(target,list){
  var i = 0;
  for(;i<list.length;i++){
    if(list[i] === target) return i;

    if( target < list[i]){
      return i;
    }
  }
  return i

}

/*
console.log(position(5,[1, 3, 5, 6]));
console.log(position(2,[1, 3, 5, 6]));
console.log(position(7,[1, 3, 5, 6]));
console.log(position(0,[1, 3, 5, 6]));
*/

// Professor Johnson's solution

function position2(num,nums){
  var cursor = 0;
  while((nums[cursor] <= num) && (cursor < nums.length))
  {
    if(nums[cursor] === num) {
      return cursor;
    }
    cursor = cursor +1;
  }
  return cursor;
}

console.log(position2(5,[1, 3, 5, 6]));
console.log(position2(2,[1, 3, 5, 6]));
console.log(position2(7,[1, 3, 5, 6]));
console.log(position2(0,[1, 3, 5, 6]));