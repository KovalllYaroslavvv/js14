// #1
var userObj = {
    age: 20,
    firstName: 'Name',
    lastName: 'Last',
    fullName() {
        return `${userObj.firstName} ${userObj.lastName}`;
    }
};

console.log(userObj);

// #2
console.log(userObj.fullName());

// #3
function defUpperStr(str) {
    return (str || 'Default text').toUpperCase();
  }
  
  console.log(defUpperStr('My text')); // MY TEXT
  console.log(defUpperStr());

// #4
function evenFn(n) {
    let arr = [];
  
    for (let i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);
  
    return arr;
  }
  
  console.log(evenFn(10)); // [2, 4, 6, 8, 10]
  console.log(evenFn(15)); // [2, 4, 6, 8, 10, 12, 14]
  console.log(evenFn(20)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// #5
function weekFn(cond) {
    let str = '';
  
    switch (cond) {
      case 1:
        str = 'Понедельник';
        break;
      case 2:
        str = 'Вторник';
        break;
      case 3:
        str = 'Среда';
        break;
      case 4:
        str = 'Четверг';
        break;
      case 5:
        str = 'Пятница';
        break;
      case 6:
        str = 'Суббота';
        break;
      case 7:
        str = 'Воскресенье';
        break;
      default:
        str = null;
    }
  
    return str;
  }
  
  console.log(weekFn(1)); // 'Понедельник'
  console.log(weekFn(3)); // 'Среда'
  console.log(weekFn(7)); // 'Воскресенье'
  console.log(weekFn(9)); // null
  console.log(weekFn(1.5)); // null
  console.log(weekFn('2')); // null

// #6
