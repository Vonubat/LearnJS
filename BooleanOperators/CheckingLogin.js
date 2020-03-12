'use strict';
// Напишите код, который будет спрашивать логин с помощью prompt.
let user=prompt ('Who is there?', '');
let pas;
if (user==null) {
  alert ('Was canceled');
} else if (user=='Admin') {
  pas=prompt ('Password:','');
} else { 
  alert ('I dont know you');
// first checking ended
} if (pas==null) {
  alert ('Was canceled');
} else if (pas=='I am BIG DADDY' || pas=='root') {
  alert ('Hello! Nice to see you');
} else { 
  alert ('Password was incorrect');
}