/******************
 * YOUR CODE HERE *
 ******************/

const { TestScheduler } = require("jest")


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




const truncate = function (str){
  let result =''
  if (str.length <=18){
    return str // if the str is 18 or greater then just return the str without the concat "..."
  }
  for (let i=0; i < 15; i++){ // we started the str to loop to the 15th char and after we follow with the  '...'
    result = result + str[i]
    
}
return result+ '...'
}
console.log(truncate("hello worldhfhfhjfjfjjdfhfhh"))


// const ciEmailify= function (name){
  
//   // let email= '@codeimmersives.com'
//   let result = ''
//   for(let i=0; i < name.lenght;i++ ){
//   if (name[i] === ' '){
//     result= result + '.'
//   }  else{
//     result = result + name[i]
//   }
// }
// return result  + '@codeimmersives.com'
// }
// console.log(ciEmailify('Jumary Sanchez'))// what was wrong with this code

const ciEmailify= function(name) {
  let result = '';
  let email= '@codeimmersives.com'
  for (let i = 0; i < name.length; i++){
    if(name[i] === ' '){
      result = result + '.';
    }else {
      result = result + name[i];
    }
  }
  return result.toLocaleLowerCase() + email;
}
console.log(ciEmailify("jumary Sanchez"))


const reverse = function(str){
 let reverse= ''
for(let i=str.length-1; i>=0; i--){
  reverse = reverse+str[i]
}return reverse

}
function onlyVowels(vowels) {
  let result = '' 

  for (i = 0; i <= vowels.length; i++) {
    if ('aeiouAEIOU'.includes(vowels[i])) {

      result = result + vowels[i];}
  }
  return result;
  }
  


  function titleCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++){
      let indexMinus = str[i -1]
      // let index= [i]

      if (indexMinus === ' ' || i === 0){
      result = result + str[i].toUpperCase();
    }
    else {
      result = result + str[i].toLowerCase();
    }
  }
  return result;
  }









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
