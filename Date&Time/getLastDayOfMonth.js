'use strict';
/*
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

function getLastDayOfMonth(year, month) {
  let date = new Date();
  date.setFullYear(year, month, 32);
  if (date.getDate() == 1) {
    return 31
  }
  if (date.getDate() == 2) {
    return 30
  }
  if (date.getDate() == 3) {
    return 29
  }
  if (date.getDate() == 4) {
    return 28
  }
}

alert(getLastDayOfMonth(2015, 1));

/*
Решение с учебника:
Создадим дату из следующего месяца, но в день передадим 0:

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28
Обычно даты начинаются с 1, но технически возможно передать любое число, и дата сама себя поправит. Так что если передать 0, то это значение будет соответствовать «один день перед первым числом месяца», другими словами: «последнее число прошлого месяца».
*/