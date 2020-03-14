'use strict';
/*Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}*/

let x=prompt('Write your browser','');
if (x=='Edge') {
  alert (`You've got the Edge!`);
} else if (x=='Chrome'||x=='Firefox'||x=='Safari'||x=='Opera') {
  alert (`Okay we support these browsers too`);
} else {
  alert (`We hope that this page looks ok`);
}