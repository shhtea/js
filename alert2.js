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
    arr.push = str[i];
    console.log(arr);
  }
}