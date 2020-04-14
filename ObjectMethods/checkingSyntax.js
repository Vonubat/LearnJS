'use strict';
// Каким будет результат выполнения этого кода?
let user = {
  name: "Медведь",
  go: function() { alert(this.name) }
}; // была пропущена ";"

(user.go)()