'use strict';
/*
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"
*/

function getWeekDay(date) {
  let arrDate = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return arrDate[date.getDay()];
}

let date = new Date(2012, 0, 3);
alert(getWeekDay(date));