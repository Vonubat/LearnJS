'use strict';
/*
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
*/

function sum() {
  let a = +prompt('Write number a=', '');
  let b = +prompt('Write number b=', '');
  alert(a + b);
}
sum();