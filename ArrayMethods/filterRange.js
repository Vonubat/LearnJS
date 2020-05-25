'use strict';
/*
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)
*/

function filter(arr, a, b) {
  let filtered = arr.filter(function (item) {
    if (+item >= a && +item <= b) return item;
  })
  alert(filtered);
}

let arr = [];
for (let index = 0; ; index++) {
  arr[index] = prompt('Введите числовой элемент массива (для завершения введите stop)', '');
  if (arr[index] == 'stop') { arr.pop(); break };
}

alert(arr);

let a = +prompt('Введите нижний порог поиска', '');
let b = +prompt('Введите верхний порог поиска', '');

filter(arr, a, b);