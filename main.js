/******************
 * YOUR CODE HERE *
 ******************/


const indexedChars = function(str){
  let result = ''
  // let index = str[i]
  // let index = 

  for(let i= 0; i <str.length; i ++){
    result+=i+str[i] 
  }
  return result  // remeber to return
}

console.log(indexedChars("hello"))

// result += str[i]+ i  will give you char index 
//instead of index char because the str[i] is added before
// the i

const exclaim = function (str){

let result = ''
//
for (let i =0 ; i < str.length; i ++){
  if (str[i] === '?' || str[i] === '.'){
    
    result= result  +'!'
  }
  else{
    result = result + str[i]
  }
  // I had return here which prevented the full loop
}
return result // when you put the return a bit early you are going to run the function
// without it looping through every possibility
}
console.log(exclaim('hello.'))
console.log(exclaim('hey?'))




const repeatIt = function(str, num){
let repeat = ''

while (num>0){
  repeat += str
  num --
}
return repeat
}
console.log(repeatIt('hello', 3))




const truncate = function (str, num){
  if (num >3){
str = str.slice(0,num-3)
str = str.concat('...')
return str
}
else{
  str= str.slice(0,num);
  str= str.slice('...')
}

  return str
}
console.log(truncate("hello worldhfhfhjfjfjjdfhfhh",18))





/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
