"use strict";

// alert("hello");

/*let name = "John",
      admin = name;

    alert(admin);*/

//let ourPlanet, currentUser;

/*"" + 1 + 0; //10
    "" - 1 + 0; //0
    true + false; //1
    6 / "3"; //2
    "2" * "3"; //6
    4 + 5 + "px"; //9px
    "$" + 4 + 5; //$45
    "4" - 2; //2
    "4px" - 2; //nan
    7 / 0; //infinity
    " -9 " + 5; //-95
    " -9 " - 5; //-14
    null + 1; //1
    undefined + 1; //nan
    " \t \n" - 2; //-2*/

/*let a = 1,
      b = 1;
    let c = ++a; // 2
    let d = b++; // 1(2)*/

/*let a = 2;
    let x = 1 + (a *= 2); //a = 4, x = 5*/

/*5 > 4; //true
    "ананас" > "яблоко"; //false
    "2" > "12"; //true
    undefined == null; //true
    undefined === null; //false
    null == "\n0\n"; //false
    null === +"\n0\n"; //true*/

/*let name = prompt("your name?", "name");
    alert(`good morning, ${name}!`);*/

/*let answer = prompt("Name of this LoP?", "");

    if (answer == "ECMAScript") {
      alert("correct");
    } else {
      alert("dont know?? ecmascript!");
    }*/

/*let answer = prompt("num?", "");

    if (answer > 0) {
      alert(1);
    } else if (answer < 0) {
      alert(-1);
    } else if (answer == 0) {
      alert(0);
    } else {
      alert("invalid value");
    }*/

/*let result;
    if (a + b < 4) {
    result = 'Мало';
    } else {
    result = 'Много';
    }

    let result = (a + b < 4) ? 'malo' : 'mnogo';*/

/*let message;
    if (login == "Сотрудник") {
      message = "Привет";
    } else if (login == "Директор") {
      message = "Здравствуйте";
    } else if (login == "") {
      message = "Нет логина";
    } else {
      message = "";
    }

    message =
      login == "Сотрудник"
        ? "Привет"
        : login == "Директор"
        ? "Здравствуйте"
        : login == ""
        ? "Нет логина"
        : "";*/

// alert( null || 2 || undefined ); //2

// alert( alert(1) || 2 || alert(3) ); //2

// alert( 1 && null && 2 ); //null

// alert( alert(1) && alert(2) ); //undefined

// alert( null || 2 && 3 || 4 ); //3

/*let age = prompt("age?", 0);

    if (age >= 14 && age <= 90) {
      console.log(false);
    } else {
      console.log(true);
    }*/

/*let age = prompt("age?", 0);

    if (!(age >= 14 && age <= 90)) {
      console.log(true);
    } else {
      console.log(false);
    }*/

/*if (-1 || 0) alert("first"); //+
    if (-1 && 0) alert("second"); //-
    if (null || (-1 && 1)) alert("third"); //+*/

/*let user = prompt("user?", "");

    if (user == "boss") {
      let password = prompt("password?", "");
      if (password == "368901") {
        console.log("hello");
      } else if (password == null) {
        console.log("canceled");
      } else {
        console.log("invalid password");
      }
    } else if (user == null) {
      console.log("canceled");
    } else {
      console.log("invalid user");
    }*/

/*let i = 3;
    while (i) {
      alert(i--);
    } //3, 2, 1*/

/*let i = 0;
    while (++i < 5) alert( i ); //1, 2, 3, 4

    let i = 0;
    while (i++ < 5) alert( i ); //1, 2, 3, 4, 5*/

/*for (let i = 0; i < 5; i++) alert(i); //0, 1, 2, 3, 4
    
    for (let i = 0; i < 5; ++i) alert(i); //0, 1, 2, 3, 4*/

/*for (let i = 2; i < 10; i++) {
      if (!(i % 2 == 0)) {
        continue;
      }
      console.log(i);
    }*/

/*let i = 0;

    while (i < 3) {
      console.log(`number ${i}`);
      i++;
    }*/

/*while (true) {
      let num = prompt("num?", 100);

      if (num < 100 || num == null) {
        continue;
      }
      console.log(num);
      break;
    }*/

/*let n = prompt('num?',10);
    nextPrime: for (let i = 2; i <= n; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          continue nextPrime;
        }
      }
      console.log(i);
    }*/

/*switch (browser) {
      case "Edge":
        alert("You've got the Edge!");
        break;
      case "Chrome":
      case "Firefox":
      case "Safari":
      case "Opera":
        alert("Okay we support these browsers too");
        break;
      default:
        alert("We hope that this page looks ok!");
    }

    if (browser === "Edge") {
      console.log("exemple 1");
    } else if (
      browser === "1" ||
      browser === "2" ||
      browser === "3" ||
      browser === "4"
    ) {
      console.log("example 2");
    } else {
      console.log("example 3");
    }*/

/*const number = +prompt("Введите число между 0 и 3", "");
    if (number === 0) {
      alert("Вы ввели число 0");
    }
    if (number === 1) {
      alert("Вы ввели число 1");
    }
    if (number === 2 || number === 3) {
      alert("Вы ввели число 2, а может и 3");
    }

    let number = +prompt("num?", "");

    switch (number) {
      case 0:
        console.log("0");
        break;
      case 1:
        console.log("1");
        break;
      case 2:
      case 3:
        console.log("2 or 3");
        break;
    }*/

/*function checkAge(age) {
      if (age > 18) {
        return true;
      } else {
        return confirm("Parents confirm?");
      }
    }

    function checkAge(age) {
      return age > 18 ? true : confirm("Parents confirm?");
    }

    function checkAge(age) {
      return age > 18 || confirm("Parents confirm?");
    }*/

/*function min(a, b) {
      return a > b ? b : a < b ? a : "=";
    }

    console.log(min(2, 5));
    console.log(min(3, -1));
    console.log(min(1, 1));*/

/*let x = prompt("x?", 0),
      n = prompt("n?", 0);

    function pow(x, n) {
      if (x < 0 || n < 0) {
        return false;
      }
      return x ** n;
    }

    console.log(pow(x, n));*/

/*function ask(question, yes, no) {
      if (confirm(question)) yes();
      else no();
    }
    ask(
      "Вы согласны?",
      function () {
        alert("Вы согласились.");
      },
      function () {
        alert("Вы отменили выполнение.");
      }
    );

    let ask = (question, yes, no) => {
      return confirm(question) ? yes() : no();
    };

    ask(
      "вы согласны?",
      () => alert("вы согласились"),
      () => alert("отмена")
    );*/

/*let user = {};

    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;*/

/*function isEmpty(obj) {
      for (let key in obj) {
        if (obj.key === undefined) {
          return false;
        }
      }
      return true;
    }
    let user = {};

    console.log(isEmpty(user));

    user.name = "John";

    console.log(isEmpty(user));*/

/*let pays = {
      me: 150,
      dimon: 10,
      lexa: 150,
    };

    let sum = pays.me + pays.dimon + pays.lexa;

    console.log(sum);*/

/*let pays = {
      me: 150,
      dimon: 10,
      lexa: 150,
    };

    let sum = 0;

    for (let i in pays) {
      sum += pays[i];
    }

    console.log(sum);*/

/*function multiplyNumeric(obj) {
      for (let key in obj) {
        if (typeof obj[key] == "number") {
          obj[key] *= 2;
        }
      }
    }

    let menu = {
      sup: 200,
      kasha: 400,
      restoran: "hello world",
    };

    multiplyNumeric(menu);

    console.log(menu.sup, menu.kasha, menu.restoran);*/

/*let user = {
      name: "Джон",
      go: function () {
        alert(this.name);
      },
    };

    user.go();*/

/*function makeUser() {
      return {
        name: "Джон",
        ref() {
          return this;
        },
      };
    }
    let user = makeUser();
    alert(user.ref().name);*/

/*let calculator = {
      sum() {
        return this.first + this.second;
      },

      mul() {
        return this.first * this.second;
      },
      read() {
        this.first = +prompt("num1", 0);
        this.second = +prompt("num2", 0);
      },
    };

    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());*/

/*let ladder = {
      step: 0,
      up() {
        this.step++;
        return this;
      },
      down() {
        this.step--;
        return this;
      },
      showStep() {
        alert(this.step);
        return this;
      },
    };*/

/*ladder.up();
    ladder.up();
    ladder.down();
    ladder.showStep();*/

// ladder.up().up().down().showStep();

/*function Calculator() {
      this.read = () => {
        this.first = +prompt("numF?", 0);
        this.second = +prompt("numS?", 0);
      };
      this.sum = () => {
        return this.first + this.second;
      };
      this.mul = () => {
        return this.first * this.second;
      };
    }

    let calculator = new Calculator();
    calculator.read();
    alert("Sum=" + calculator.sum());
    alert("Mul=" + calculator.mul());*/

/*function Accumulator(startingValue) {
      this.value = startingValue;

      this.read = () => {
        this.num = +prompt("num?", 0);
        this.value += this.num;
      };
    }

    let accumulator = new Accumulator(1);

    accumulator.read();
    accumulator.read();

    alert(accumulator.value);*/

/*let a = +prompt("?", 0),
      b = +prompt("?", 0),
      res = a + b;

    console.log(res);*/

/*function readNumber() {
      let num;

      do {
        num = +prompt("?", 0);
      } while (!isFinite(num));

      if (num == null || num == "") return null;

      console.log(num);

      return num;
    }

    readNumber();*/

/*function random(min, max) {
      let res = +(Math.random() * (max - min)).toFixed(0); //for float value .toFixed(>0)

      console.log(res);

      return res;
    }

    random(1, 5);
    random(1, 8);
    random(1, 3);*/

/*function ucFirst(str) {
      return console.log(str[0].toUpperCase() + str.slice(1));
    }

    ucFirst("вася");*/

/*function checkSpam(str) {
      let someString = str.toLowerCase();

      if (someString.includes("xxx") || someString.includes("viagra")) {
        return false;
      } else {
        return true;
      }
    }

    console.log(checkSpam("buy ViAgRA now"));
    console.log(checkSpam("free xxxxx"));
    console.log(checkSpam("innocent rabbit"));*/

/*function truncate(str, maxLength) {
      if (str.length > maxLength) {
        str = str.slice(0, maxLength - 1) + "…";
        console.log(str);
      } else {
        console.log(str);
      }
    }

    truncate("Something text for test this function:", 20);
    truncate("Hello World!", 20);*/

/*function extractCurrencyValue(str) {
      return +str.slice(1);
    }

    console.log(extractCurrencyValue("$120"));*/

/*let styles = ["Джаз", "Блюз"];

    styles.push("Рок-н-ролл");

    styles[Math.floor((styles.length - 1) / 2)] = "Классика";

    alert(styles.shift());

    styles.unshift("Рэп", "Рэгги");*/

/*function sumInput() {
      let num,
        sum,
        list = [];

      do {
        num = +prompt("What is your number?", 0);
        list.push(num);
      } while (isFinite(num));

      list.pop();
      list.push(0);

      if ((num = null || 0)) return null;

      for (let item of list) {
        sum = list[item] + list[item + 1];
      }
      console.log(sum);
      return sum;
    }

    sumInput();*/

/*function getMaxSubSum(list) {
      let maxSum = 0,
        timeMaxSum = 0;

      for (let item of list) {
        timeMaxSum += item;
        maxSum = Math.max(maxSum, timeMaxSum);
        if (timeMaxSum < 0) timeMaxSum = 0;
      }
      console.log(maxSum);

      return maxSum;
    }

    getMaxSubSum([-1, 2, 3, -9]);*/

/*function camelize(str) {
      let newStr = str.split("");

      newStr.forEach((item, index, array) => {
        let searchedIndex = newStr.indexOf("-"),
          upperLetter = searchedIndex + 1;

        if (item == "-") {
          newStr.splice(upperLetter, 1, array[upperLetter].toUpperCase());
          newStr.splice(searchedIndex, 1);
        }
        return newStr;
      });

      return newStr.join("");
    }

    console.log(camelize("background-color"));
    console.log(camelize("list-style-image"));
    console.log(camelize("-webkit-transition"));*/

/*let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function filterRange(arr, a, b) {
      let lastArray = arr.map(function (item, index, array) {
        if (item >= a && item <= b) {
          return item;
        }
      });
      lastArray = lastArray.filter(Boolean);

      return lastArray;
    }

    console.log(filterRange(newArray, 3, 8));*/

/*let newArray = [5, 3, 8, 1];

    function filterRangeOnPlace(arr, a, b) {
      newArray.forEach(function (item, index, array) {
        console.log(newArray);
        if (!(item >= a && item <= b)) {
          array.splice(index, 1);
        }
      });

      return newArray;
    }

    console.log(filterRangeOnPlace(newArray, 1, 4));*/

/*let array = [5, 2, 1, -10, 8];

    function sorted(arr) {
      arr.sort((a, b) => b - a);

      return arr;
    }

    console.log(sorted(array));*/

/*let oldArray = ["HTML", "JavaScript", "CSS"];

    function copySorted(arr) {
      let sorted = arr.slice(0);

      sorted.sort();

      return sorted;
    }

    console.log(copySorted(oldArray));
    console.log(oldArray);*/

/*let calculator = {
      calculate: (str) => {
        str = str.split(" ");

        str = str.map(function (item, index, array) {
          if (
            typeof item == "string" &&
            item !== "+" &&
            item !== "-" &&
            item !== "*" &&
            item !== "/"
          ) {
            item = parseInt(item);

            array.splice(index, 1, item);
          }
          return item;
        });

        let result;

        if (str.includes("+")) {
          str = str.filter(function (element) {
            return element !== "+";
          });

          result = str[0] + str[1];
        } else if (str.includes("-")) {
          str = str.filter(function (element) {
            return element !== "-";
          });

          result = str[0] - str[1];
        } else if (str.includes("*")) {
          str = str.filter(function (element) {
            return element !== "*";
          });

          result = str[0] * str[1];
        } else if (str.includes("/")) {
          str = str.filter(function (element) {
            return element !== "/";
          });

          result = str[0] / str[1];
        }

        if (str.length > 2) {
          str.splice(0);
          result = "too much numbers";
        }
        return result;
      },
    };

    console.log(calculator.calculate("10 + 4"));*/

/*let vasya = { name: "Вася", age: 25 },
      petya = { name: "Петя", age: 30 },
      masha = { name: "Маша", age: 28 };

    let users = [vasya, petya, masha];

    let names = users.map(function (item, index, array) {
      return array[index].name;
    });

    console.log(names);*/

/*let vasya = { name: "Вася", surname: "Пупкин", id: 1 },
      petya = { name: "Петя", surname: "Иванов", id: 2 },
      masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [vasya, petya, masha];

    let usersMapped = users.map(function (item, index, array) {
      let fullname = `${array[index].name} ${array[index].surname}`;

      item.name = fullname;

      delete array[index].surname;

      console.log(item);
    });*/

/*let vasya = { name: "Вася", age: 25 },
      petya = { name: "Петя", age: 30 },
      masha = { name: "Маша", age: 28 };

    let list = [vasya, petya, masha];

    function sortByAge(arr) {
      let newArray = arr.sort((a, b) => a.age - b.age);

      return newArray;
    }

    console.log(sortByAge(list));*/

/*let list = [1, 2, 3];

    function shuffle(arr) {
      let newArr = arr.sort(() => Math.random() - 0.5);

      return newArr;
    }

    console.log(shuffle(list));*/

/*let vasya = { name: "Вася", age: 25 },
      petya = { name: "Петя", age: 30 },
      masha = { name: "Маша", age: 29 };

    let list = [vasya, petya, masha];

    function getAverageAge(arr) {
      let newArr = arr.map((item) => {
        return item.age;
      });

      let initialValue = 0,
        result = newArr.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          initialValue
        );

      return result / newArr.length;
    }

    console.log(getAverageAge(list));*/

/*let list = [
      "alpha",
      "alpha",
      "bravo",
      "bravo",
      "bravo",
      "alpha",
      "alpha",
      "delta",
    ];

    function unique(arr) {
      let result = [];

      for (let str of arr) {
        if (!result.includes(str)) {
          result.push(str);
        }
      }

      return result;
    }

    console.log(unique(list));*/

/*let list = [
      "alpha",
      "alpha",
      "bravo",
      "bravo",
      "bravo",
      "alpha",
      "alpha",
      "delta",
    ];

    console.log(list);

    let set = new Set(list);

    console.log(set);*/

/*let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    let map = new Map();

    function aclean(arr) {
      for (let word of arr) {
        let sorted = word.split("").sort().join("");
        map.set(sorted, word);
      }

      return Array.from(map.values());
    }

    console.log(aclean(arr));*/

/*let map = new Map();
    map.set("name", "John");
    let keys = map.keys();
    keys = Array.from(keys);
    keys.push("more");
    console.log(keys);*/

/*let salaries = {
      John: 100,
      Pete: 300,
      Mary: 250,
    };

    function sum(obj) {
      let arr = Object.entries(obj);

      let initialValue = 0;
      let sumWithInitial = arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue[1],
        initialValue
      );
      return sumWithInitial;
    }

    console.log(sum(salaries));*/

/*let user = {
      name: "John",
      age: 30,
    };

    function count(user) {
      let arr = Object.entries(user);
      return arr.length;
    }

    console.log(count(user));*/

/*let user = { name: "John", age: 30, isAdmin: true },
      { name, age, isAdmin = false } = user;

    console.log(name, age, isAdmin);*/

/*let salaries = {
      John: 100,
      Pete: 300,
      Mary: 250,
    };

    function topSalary(salaries) {
      let max = 0,
        maxName = null;

      for (let [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
          max = salary;
          maxName = name;
        }
      }
      return maxName;
    }

    console.log(topSalary(salaries));*/

/*let today = new Date(Date.UTC(2012, 1, 20, 3, 12));
    alert(today);*/

/*let date = new Date(2012, 0, 3);

    function getWeekDay(date) {
      switch (date.getDay()) {
        case 0:
          return "ВС";
        case 1:
          return "ПН";
        case 2:
          return "ВТ";
        case 3:
          return "СР";
        case 4:
          return "ЧТ";
        case 5:
          return "ПТ";
        case 6:
          return "СБ";
      }
    }

    console.log(getWeekDay(date));*/

/*let date = new Date(2012, 0, 3);

    function getWeekDay(date) {
      let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
      return days[date.getDay()];
    }

    console.log(getWeekDay(date));*/

/*let date = new Date(2015, 0, 2);

    function getDateAgo(date, days) {
      let copyDate = date;

      copyDate.setDate(copyDate.getDate() - days);
      copyDate = new Date(copyDate);
      return copyDate;
    }

    console.log(getDateAgo(date, 1));*/

/*function getLastDayOfMonth(year = 2012, month = 1) {
      let date = new Date(year, month + 1);

      date.setDate(0);
      console.log(date);
    }

    getLastDayOfMonth();*/

/*function getSecondsToday() {
  let today = new Date(),
    tomorrow = new Date(2022, 6, 9, 0, 0, 0, 0),
    seconds = (tomorrow - today) / 1000,
    result = 86000 - seconds;

  return +result.toFixed(0);
}
console.log(getSecondsToday());*/

/*function getSecondsToday() {
  let today = new Date(),
    tomorrow = new Date(2022, 6, 9, 0, 0, 0, 0),
    seconds = (tomorrow - today) / 1000;

  return +seconds.toFixed(0);
}

console.log(getSecondsToday());*/

/*let date = new Date(2022, 6, 9, 12, 0, 0, 0),
  sendDate = new Date(2022, 6, 9, 12, 0, 0, 0);

function formatDate() {
  let difference = (date - sendDate) / 1000;

  if (difference <= 3) {
    difference = "Только что";
  } else if (difference <= 60) {
    difference = `${difference} секунд назад`;
  } else if (difference <= 60 * 60) {
    difference = `${difference / 60} минут назад`;
  } else {
    let datesList = [
      sendDate.getDate(),
      sendDate.getMonth() + 1,
      sendDate.getFullYear(),
      sendDate.getHours(),
      sendDate.getMinutes(),
    ];

    for (let i = 0; i < datesList.length; i++) {
      if (datesList[i] < 10) {
        datesList.splice(i, 1, `0${datesList[i]}`);
      }
    }

    difference =
      `${datesList[0]}.${datesList[1]}.${datesList[2]}` +
      ` ${datesList[3]}:${datesList[4]}`;
  }
  return difference;
}

console.log(formatDate());*/
