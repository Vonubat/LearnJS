"use strict"
//Напишите условие if для проверки, что значение переменной age3 НЕ находится в диапазоне 14 и 90 включительно (без использования оператора НЕ !).
let age3=prompt('What is your age3?','');
if (age3<14 || age3>90) {
  alert ('Verification successful');
} else {
  alert ('Verification is failed');
}