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