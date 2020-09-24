/*
Для страницы:

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>
Напишите код, как получить…

элемент <div>?
<ul>?
второй <li> (с именем Пит)?
*/

alert(document.body.firstElementChild);
// или
alert(document.body.children[0]);
// или (первый узел пробел, поэтому выбираем второй)
alert(document.body.childNodes[1]);

alert(document.body.lastElementChild);
// или
alert(document.body.children[1]);

// получаем <ul>, и его последнего ребёнка
alert(document.body.lastElementChild.lastElementChild);