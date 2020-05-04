'use strict';
/*
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
*/

function truncate() {
  let str = prompt('Введите строку', '');
  let maxlength = +prompt('Введите максимальную длину строки', '');
  if (str.length > maxlength) {
    let newStr = str.slice(0, maxlength) + '...';
    return newStr;
  }
  return str;
}

alert(truncate());