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

console.log(position(5,[1, 3, 5, 6]));
console.log(position(2,[1, 3, 5, 6]));
console.log(position(7,[1, 3, 5, 6]));
console.log(position(0,[1, 3, 5, 6]));