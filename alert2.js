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
    switch (typeof l[i]) {
      case 'number':
        arr.push(l[i]);
        break;
      default:
        break;
    }
  }
  return arr;
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

function sumTwoSmallestNumbers(numbers) {  
  let arr = numbers;
  arr.sort((a, b) => a-b);
  return +arr[0] + +arr[1];
}
sumTwoSmallestNumbers([5, 8, 12, 19, 22]);

function getSum(a, b)
{
  let res = 0;
  if (a == b) {
    res = a;
  } else if (a < b) {
    for (i = a; i <= b; i++){
      res += i;
    }
  } else {
    for (i = b; i <= a; i++) {
      res += i;
    }
  }
  return res;
}
getSum(-1,2)

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
getSum(10,2)

function maskify(cc) {
   let arr = [...cc];
   let arrMask = arr.fill('#', 0, -4);
   let res = arrMask.join('');
   return res;
}
maskify('4556364607935616')

function accum(s) {
	let sBig = s.toUpperCase();
  let res = sBig[0];
  let resLit = '';
  for (i = 1; i < s.length; i++) {
      res = '-' + sBig[i] + resLit;
      console.log(res);
      for (j = 1; j < i + 1; j++) {
      resLit += s[i].toLowerCase();
      console.log(resLit);
     }
    //  res += '-' + s[i] + resLit;
    //  console.log(res);
return res;
    }
}
accum("NyffsGeyylB")

function friend(friends){
   let arr = [];
   for (i = 0; i < friends.length; i++) {
    if (friends[i].length == 4) {
      arr.push(friends[i]);
    }
   }
   return arr; 
}
friend(["Ryan", "Kieran", "Mark"]);

function friend(friends){
  return friends.filter(n => n.length === 4)
}

function openOrSenior(data){
  let arr =[];
  let arrData = data.flat();
  for (i = 0; i < arrData.length; i += 2) {
    if (arrData[i] >= 55  && arrData[i + 1] > 7) {
      arr.push('Senior');
    } else {
      arr.push('Open');
    }
  }
return arr;
}

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])

function printerError(s) {
  let res = 0;
  let len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] > 'm') {
      res += 1;
    } else {
      res += 0;
    }
  }
  return `${res}/${len}`; 
}
printerError("aaaaaabbbbbbbbbmmmmmxyz")

function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    return (Math.sqrt(sq) + 1) ** 2;
  } else {
    return -1;
  }
}
findNextSquare(625);


function solution(number){
  let res = 0;
  if (number > 0) {
    for (let i = 1; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        res += i;
      }
    }
  }
  return res;
} 
solution(10);

function spinWords(string){
  let arr = string.split(' ');
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      let arrWord = [...arr[i]];
      let arrWordRev = arrWord.reverse();
      arr[i] = arrWordRev.join('')
    }
  } 
return arr.join(' '); 
}
spinWords("Hey fellow warriors")

function digitalRoot(n) {
  let str = String(n);
  let res = 0;
  if (n > 9) {
    for (let i = 0; i < str.length; i++) {
      res += +str[i]
    }
    if (res > 9) {
      return digitalRoot(res);
    } else {
      return res;
    }
    
  } else {
    return n;
  }
}
digitalRoot(493193)

function likes(names) {
  let sumNames = names.length - 2;
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names[0] + " likes this";
      break;
    case 2:
      return names[0] + ' and ' + names[1] + " like this";
      break;
    case 3:
      return names[0] + ', ' + names[1] + ' and ' + names[2] + " like this";
      break;
    default:
      return names[0] + ', ' + names[1] + ' and ' + sumNames + " like others this";
      break;
  }    
}
likes(["Jacob", "Alex","Alex"]);

function createPhoneNumber(numbers){
  let res = '';
  for (i = 0; i < 3; i++) {
    res += numbers[i];
  }
  let res1 = numbers.slice(3, 6);
  let res2 = numbers.slice(6, 10)
  return '(' + res + ')' + ' ' + res1.join('') + '-' + res2.join('');
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

function createPhoneNumber(numbers){
  return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}