'use strict';
/*
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
*/

// Вариант 1 (конченный, просто разбираюсь с reduce)
function sumSalaries(salaries) {
  return Object.entries(salaries).reduce((sum, [, value]) => sum + +[value], 0);
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(sumSalaries(salaries)); // 650

// Вариант 2

function sumSalaries2(salaries2) {

  let sum = 0;
  for (let salary of Object.values(salaries2)) {
    sum += salary;
  }

  return sum; // 650
}

let salaries2 = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(sumSalaries2(salaries2)); // 650