'use strict'
let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

let entNum
do {
  entNum = prompt('Введите число больше 100', '');
}  while (entNum <= 100 && entNum);

if (browser == 'Edge') {
  alert( "You've got the Edge!" );
} else if (browser == 'Chrome'
  || browser == 'Firefox'
  || browser == 'Safari' 
  || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 1');
    break;

  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}

let newStr;
newStr = 'A';
alert(typeof(newStr));


function letterCase(lr1, lr2) {
  if (typeof lr1 !== 'string' || typeof lr2 !== 'string') {
    alert(-1);
  } else {
    if ((lr1.toUpperCase() === lr1) && (lr2.toUpperCase() === lr2)
    || (lr1.toLowerCase() === lr1) && (lr2.toLowerCase() === lr2)) {
      alert(1);
    } else {
      alert(0);
    }
  }
}
letterCase(8, 9);
letterCase('g', 'l');
letterCase('K','L');
letterCase('f', 'L');

let numm = 0;
while (numm < 6) {
  console.log(numm);
  numm++
}

do {
  console.log(numm);
  numm++
} while (numm < 6);

for (numm = 0; numm < 6; numm++) {
  console.log(numm)
}

let nom = 8; 
while (nom) {
  console.log(nom);
  nom--;
}

nom = 0;
while (nom < 3) {
  console.log('Число: ${nom}');
  nom++
}

stopSize: for (let num = 0; num < 2; num++) {
   for (let size = 0; size < 3; size++) {
    if (size == 1) {
      break stopSize;
    }
    console.log(size);
   }
}

simpleNum: for (let i = 2; i <= 10; i++) {
  for (let a = 2; a < i; a++) {
    if (i % a == 0) continue simpleNum;
  }
  alert(i);
}

let n = prompt('How many sheep?', '');
if (+n > 0) {
  alert(n + ' sheep...')
} else {
  alert('try again')
}

let s = prompt('How many sheep?', '');
let sheepString = ''
if (s > 0) {
  for (i = s - (s - 1); i <= s; i++) {
    sheepString = sheepString + (i + ' sheep...');
  }
  alert(sheepString);
}

let numberStairs = prompt('write a number', '');
let stairs = '';
for (i = numberStairs; i > 1; i--) {
  stairs += 'I/n '

}
alert(stairs + 'I');

function calcSum(numOne, numTwo) {
  if (numTwo === 1) {
    return numOne;
  } else {
    return numOne * calcSum(numOne, numTwo - 1);
  }
}
console.log(calcSum(2,3));

let getMessage = (text, nam) => {
  let message = text + ',' + nam + '!';
  return message
}
console.log(getMessage('Привет', 'Вася'));

let getMes = (text, nam) => text + ',' + nam + '!';
console.log(getMes('Привет', 'Вася'));

function showMess(text, name) {
  console.log(`${text}, ${name}!`);
}
setTimeout(showMess, 5000, 'Hello', 'Vasya');

function showMess(text, name) {
  console.log(`${text}, ${name}!`);
}
setInterval(showMess, 5000, 'Hello', 'Vasya');

function showMess(text, name) {
  console.log(`${text}, ${name}!`);
  setTimeout(showMess, 5000, 'Hello', 'Vasya');
}
setTimeout(showMess, 5000, 'Hello', 'Vasya');

function showNumber(num) {
    if (num < 10) {
     setTimeout(showNumber, 1000, ++ num);
     console.log(num);
  }
}
setTimeout(showNumber,1000,0);

function showName() {
  console.log('Vasya');
}
setTimeout(showName,0);
console.log('Kolya');

showMess();
function showMess() {
  console.log('mess');
}

function countNumbeer(num) {
  console.log(num);
  let timeId = setTimeout(countNumbeer,1000,++num);
  if (num === 10) {
    clearTimeout(timeId);
  }
}
setTimeout(countNumbeer,1000,1);

let res = 0;
function countNum(num) {
  res += num;
  console.log(res);
  if (res === 10) {
    clearInterval(timeId)
  }
}
let timeId = setInterval(countNum, 1000, 1);

'use strict';

if (2 > 1) {
  function showMess() {
    console.log('message');
  }
  showMess();
}
