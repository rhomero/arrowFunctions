function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
  console.log(double([1,2,3,4,5])) 
  //Refactor the above code to use two arrow functions. Turn it into a one-liner.
  /* Write an ES2015 Version */
const double2 = (arr) => arr.map(val => val *2)
console.log(double2([1,2,3,4,5]))


function squareAndFindEvens(numbers){
  var squares = numbers.map(num => num ** 2);
  var evens = squares.filter(square => square % 2 === 0)
  return evens;
}

console.log(squareAndFindEvens([1,2,3,4,5,6,7,8,9,10]));

const squareAndFindEvens2 = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)
console.log(squareAndFindEvens2([1,2,3,4,5,6,7,8,9,10]));