let fls = 'фрилансер';
let text = `Привет! Я ${fls}`;
console.log(text);
console.log(text[2]);
console.log(text.toUpperCase());
console.log(fls.slice(3,6));
console.log(fls.includes('лан',4));

function getCount(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
      switch (str[i]) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'u':
        case 'U':
        case 'o':
        case 'O':

          break;
      default:
        res += str.slice(i, i + 1);
      }
    }
    return res;
  }
getCount('LOL');

function squareDigits(num){
    let res = '';
    let str = '' + num;
    console.log(str);
    for (let i = 0; i < str.length; i++) {
      res += str[i]**2;
      console.log(str[i]);
      console.log(res);
    }
    return +res;
  }
  squareDigits(9119);

function highAndLow(numbers){
    let str = numbers;
    let arr = str.split(' ');
    arr.sort((a, b) => a - b);
    let res = arr[arr.length - 1] + ' ' +  arr[0];
    return res;
    }
    
highAndLow("1 2 -3 4 5");


function descendingOrder(n){
  let str = '' + n;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  arr.sort((a, b) => a - b);
  arr.reverse();
  let res = arr.join('');
  return +res;
}
descendingOrder(876543);

function getMiddle(s)
{
  console.log(s.length);
  let str = s.length / 2;
  let res = '';
  if (str == Math.floor(str)) {
     res = res + s[str - 1] + s[str];
  } else {
    res += s[Math.floor(str)];
  }
  return res;
}
getMiddle("testing");

function accum(s) {
  let res = '';
	for (let i = 0; i < s.length; i++) {
    res += s[i].toUpperCase() + s[i].toLowerCase(); 
  }
  return res;
}
accum("abcd");

function filter_list(l) {
  let arr = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] == 'number') {
      arr.push(l[i]);
    }else {
      arr == arr;
    }
  return arr;
}
}
filter_list([1,2,'a','b']);

function findShort(s) {
  let arr = s.split(' ');
  let arrLength = arr.map(item => item.length);
  arrLength.sort((a, b) => a - b);
  return arrLength[0];
  
}
findShort("bitcoin take over the world maybe who knows perhaps");

function XO(str) {
  let resX = 0;
  let resO = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'x':
      case 'X':
        resX += 1;
        break;
      case 'o':
      case 'O':
        resO += 1;
        break;
      default:
        break;
    }
  }
  if (resO == resX) {
    return true;
  } else {
    return false;
  }
}
XO("xxxooom");


function isIsogram(str){
  let str1 = str.toLowerCase();
  let arr = [];
  for (i = 0; i < str1.length; i++) {
    arr.push(str1.codePointAt(i));
  }
  let res = 0;
  arr.sort((a, b) => a - b);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] == arr[i + 1]) {
      res += 1;
    }else{
      res += 0;
    }
  }
   return res == 0 ? true : false;
}
isIsogram ("aba");

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}
isIsogram ("aba");

var isSquare = function(n){
  if ((n ** (1/2)) == Math.trunc(n ** (1/2))) {
    return true;
  } else{
    return false; // fix me
  }
}
isSquare(3)

function isSquare(n) {
  console.log(Math.sqrt(n) % 1);
  console.log(2,45 % 1);
  return Math.sqrt(n) % 1 === 0;
  
}
isSquare(4)

function DNAStrand(dna){
  let newDna = '';
  for (i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'A':
        newDna += 'T';
        break;
      case 'T':
        newDna += 'A';
        break;
      case 'C':
        newDna += 'G';
        break;
      case 'G':
        newDna += 'C';
        break;
    }
  }
  return newDna;
}
DNAStrand("ATTGC")