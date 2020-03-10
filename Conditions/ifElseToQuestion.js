'use strict';
let login=prompt('Введите свою должность','');
let message = 
(login=='Сотрудник')?'Привет':
(login=='Директор')?'Здравствуйте':
(login=='')?'Нет логина':'В доступе отказано';
alert(message);