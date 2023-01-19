"use strict";
let i = 2;
for (let i = 2; i < 11; i++) {
  if ((i % 2 == 0) && (i % 3 == 0)) continue;
  alert(i);
}
