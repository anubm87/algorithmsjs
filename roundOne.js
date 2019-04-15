/**
 * Lead with Zeroes
 * @description: Returns the same array, but moves all zeroes in the array to the front.
 * Do not return a new array. It must be the same array!
 *      Ex: leadZeroes([2,2,0,1,0]) => [0,0,2,2,1]
 *
 * @param {array} arr - An array of integers
 */
function leadZeroes(arr) {
    for(var i of arr){
        if(i===0) arr.unshift(arr.splice(i,1))
        
    }
return arr;
}

/**
 * Setter
 * @description: Returns an array of unique numbers.
 *      Ex: setter([1,1,2,2,3,3]) => [1,2,3]
 *
 * @param {array} arr - An array of data
 */
function setter(arr) {
var arry=[];

for(var i of arr) if(arry.indexOf(i)<0) arry.push(i)

return arry; 
}

/**
 * Is Prime
 * @description: Return true if the given number is a prime number, false otherwise
 *      Ex: isPrime(3) => true
 *
 * Resources:
 * https://en.wikipedia.org/wiki/Prime_number
 * https://youtu.be/mIStB5X4U8M
 * @param num
 */
function isPrime(num) {

    let recursive =function(cur){
        if(cur===1) return true;
        if(num%cur===0) return false;
        return recursive(cur-1);
    }

 return recursive(num-1);
 
}

/**
 * Modulus
 * @description: Write a function that returns the remainder form dividing 2 integers WITHOUT USING %
 *      Ex: modulus(7, 3) => 1
 *
 * @param dividend
 * @param divisor
 */
function modulo(dividend, divisor) {

    if(dividend>divisor) return modulo(dividend-divisor,divisor) 
    else return dividend;
}

/**
 * Next Five
 * @description: Write a function that takes a number and returns the next
 * multiple of 5
 *      Ex: nextFive(6) => 10
 *          nextFive(25) => 30
 *
 * @param num
 */
function nextFive(num) {
    num=Math.ceil(num);
for(var i=num+1;i<num+6;i++){
    if(i%5===0)return i;
}
}

/**
 * Object Sort
 * @description: Write a function that takes an object and sorts it
 * alphabetically by key. Keys will always be alphabets (a-z or A-Z).
 *      Ex: osort({z: 3, a: 1}) => {a: 1, z: 3}
 *
 * @param obj
 */
const osort=(obj)=> obj;


module.exports = {
    leadZeroes: leadZeroes,
    setter: setter,
    isPrime: isPrime,
    modulo: modulo,
    nextFive: nextFive,
    osort: osort
};

