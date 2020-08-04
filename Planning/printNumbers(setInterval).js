'use strict';
/*
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте решение используя setIntertval
*/

function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function () {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

printNumbers(5, 10);