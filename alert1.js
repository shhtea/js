

let newStr;
newStr == 2;
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


