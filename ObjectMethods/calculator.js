'use strict';
/*
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/


let calculator = {
  read () {
    
    let a = prompt (`a?`,);
    let b = prompt (`b?`,);
    return (calculator.a=+a, calculator.b=+b);
    
  },
  sum () { return (calculator.a + calculator.b); },
  mul () { return (calculator.a * calculator.b); }  
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// Решение с учебника ниже:
/*
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/