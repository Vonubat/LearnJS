'use strict';
/*
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};
*/

let user = {
  name: "Василий Иванович",
  age: 35
};
let json = JSON.stringify(user);
alert(json);
let simpleObj = JSON.parse(json);
alert(simpleObj.name);
alert(simpleObj.age);