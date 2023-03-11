function narcissistic(value) {
    let res = 0;
    if (value < 10) {
        res = value;
    } else {
        let str = value + '';
        for (let i = 0; i < str.length; i++) {
            res += str[i] ** (str.length);
        }
    }
    if (res == value) {
        return true;
    } else {
        return false;
    }
  }
  narcissistic(153)

  var uniqueInOrder=function(iterable){
    let arrRes = [iterable[0]];
    for (let i = 0; i < iterable.length; i++) {
        switch (iterable[i]) {
            case iterable[i + 1]:
            break;
            default:
               arrRes.push(iterable[i + 1]); 
               break;
        }
    }
    arrRes.pop(-1);
    return arrRes;
  }
  uniqueInOrder([1,2,2,3,3])

  function longest(s1, s2) {
    let str = s1 + s2;
    let arr = str.split('');
    let set = new Set(arr);
    let res = [...set];
    return res.join('');
  }
  longest("aretheyhere", "yestheyarehere")

  function longest(s1, s2) {
    let str = '';
    for (let i = 0; i < s2.length; i++) {
        if (s1.indexOf(s2[i]) == -1) {
          str += 
        }
    }
}

function tribonacci(signature,n){
    let resN = signature.flat();
    let [n1, n2, n3, num] = resN;
    let resSum = resN.slice(0, 3);
    let res = [];
    let n4 = 0;
    if (num == 0) {
        return res;
    }else if (+num > 2) {
        for (let i = 0; i < num - 3; i++) {
          n4 = n1 + n2 + n3;
          resSum.push(n4);
          [n1, n2, n3] = [n2, n3, n4];
        }
        return resSum;
    } else if (num <= 2) {
        return resSum.slice(0, num);
    } 
  }
 tribonacci([[1, 2, 1], 2])

 let count = 0;
 function persistence(num) {
    let res = 1;
    let str = ''+ num;
    if (num > 9) {
        count++;
        for (i = 0; i < str.length; i++) {
        res *= str[i];
        console.log(res)
        }
        if (res > 9) {
               return persistence(res);
            } else {
                return count;
            } 
        } else {
            return 0;
        }
   }
 persistence(2629193)

 function century(year) {
    if (year % 100 == 0) {
        return (year/100);
    }else{
        return (Math.ceil(year/100));
    }
    
  }
  century(1900)

  function litres(time) {
    return Math.floor(time * 0.5);
  }
  litres(11.8)

  function basicOp(operation, value1, value2)
{
    let arr = [value1, operation, value2];
    console.log(arr);
    let res = (`${value1} ${operation} ${value2}`)
    return res;
}
basicOp('+', 4, 7)

function abbrevName(name){
   let arr = [];
   arr = name.split(' ');
   let res = ''
   for (let i = 0; i < arr.length; i++) {
     res += arr[i].slice(0, 1) + '.';
   }
return res.toUpperCase().slice(0, -1);
}
abbrevName("david Mendieta fghjj")

function isTriangle(a,b,c)
{
  if ((a + b) > c && (a + c) > b && (b + c) > a) {
    return true;
  } else {
    return false;
  }
}
isTriangle(1,2,2)

function addBinary(a,b) {
  let num1 = parseInt((a + b), 2);
  console.log(num1)
}
addBinary(1, 1)