"use strict"
//Напишите условие if для проверки, что значение переменной age2 НЕ находится в диапазоне 14 и 90 включительно (с использованием оператора НЕ !).
let age2=prompt('What is your age2?','');
if (!(age2>=14 && age2<=90)) {
  alert ('Verification successful');
} else {
  alert ('Verification is failed');
}