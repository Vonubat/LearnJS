'use strict';
/*
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
*/

function ucFirst() {
  let str = prompt('Введите str = ', '');

  if (!str) return alert('Вы не ввели значение');

  return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst()); 