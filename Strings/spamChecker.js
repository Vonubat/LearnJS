'use strict';
/*
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

function checkSpam() {
  let str = prompt('Income message=', '');
  let newStr = str.toLowerCase();

  if (newStr.includes('viagra') || newStr.includes('xxx')) {
    return true;
  }
  return false;
}

alert(checkSpam());

/*
Решение с учебника:
function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
*/

