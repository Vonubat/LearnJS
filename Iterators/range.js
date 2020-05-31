'use strict';
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    this.last = this.to;
    return this;
  },

  next() {
    if (this.current <= this.last) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}

let arr = Array.from(range);
alert(arr); // 1,2,3,4,5