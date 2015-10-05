
/**
 * Implemented the position function as described in:
 * https://blog.svpino.com/2015/05/24/programming-challenge-the-position-of-the-element
 * Created by sora1234 on 9/22/2015.
 */

/**
 * Find the position in the array of nums where num should be
 * inserted.
 * @param nums The array of number.
 * @param num The number to be inserted.
 * @return The position where num should be inserted.
 */

/*exported position*/
function position(num,nums){
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

