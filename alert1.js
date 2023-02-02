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


function letterCase(a,b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    alert(-1);
  } else {
    if (('a'.toUpperCase() == a) && ('b'.toUpperCase() == b)
    || ('a'.toLowerCase() == a) && ('b'.toLowerCase() == b)) {
      alert(1);
    } else {
      alert(0);
    }
  }
}
letterCase();

