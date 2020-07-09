'use strict';
/*
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

1) С использованием цикла.
2) Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
3) С использованием формулы арифметической прогрессии.
Пример работы вашей функции:

function sumTo(n) { ... ваш код ...  }
alert( sumTo(100) ); // 5050

P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
*/

function sumTo1() {
  let n = prompt('Введите n=', '');
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  alert(sum);
}

function sumTo2(n) {
  if (n == 1) {
    return n;
  } else {
    return n + sumTo2(n - 1);
  }
}

function sumTo3(n) {
  return n * (n + 1) / 2;
}

sumTo1();
alert(sumTo2(100));
alert(sumTo3(100));