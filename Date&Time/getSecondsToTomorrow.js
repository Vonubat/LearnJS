'use strict';
/*
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToTomorrow() {
  let date = new Date();
  let sumSecDay = 24 * 60 * 60;
  alert(sumSecDay - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()));
}

getSecondsToTomorrow();