
/*global position*/

describe("position", function() {

  it("[1, 3, 5, 6] with target value 5, should return 2", function() {
    expect(position(5,[1, 3, 5, 6])).toEqual(2);
  });

  it("[1, 3, 5, 6] with target value 2, should return 1", function() {
    expect(position(2,[1, 3, 5, 6])).toEqual(1);

  });
  it("[1, 3, 5, 6] with target value 7, should return 4", function() {

    expect(position(7,[1, 3, 5, 6])).toEqual(4);
  });
  it("[1, 3, 5, 6] with target value 0, should return 0", function() {

    expect(position(0,[1, 3, 5, 6])).toEqual(0);
  });

});


