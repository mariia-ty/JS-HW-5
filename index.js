//Завдання 1: Визначення дня тижня Напиши програму, яка запитує у користувача номер дня тижня (від 1 до 7)
//і виводить назву відповідного дня (1 — понеділок, 2 — вівторок і т.д.). Використай switch case.

let day = parseInt(prompt("Enter a number 1-7: "));

switch (day) {
  case 1:
    alert("понеділок");
    break;

  case 2:
    alert("вівторок");
    break;

  case 3:
    alert("середа");
    break;

  case 4:
    alert("четверг");
    break;

  case 5:
    alert("п'ятниця");
    break;

  case 6:
    alert("субота");
    break;

  case 7:
    alert("неділя");
    break;

  default:
    alert("Unknown");
    break;
}

//Завдання 2: Визначення пори року Напиши програму, яка запитує у користувача номер місяця(від 1 до 12)
//і виводить пору року(1 - 3 — зима, 4 - 6 — весна, 7 - 9 — літо, 10 - 12 — осінь).Використай switch case.

let season = parseInt(prompt("Enter a number 1-12:"));

switch (season) {
  case 1:
  case 2:
  case 3:
    alert("зима");
    break;

  case 4:
  case 5:
  case 6:
    alert("весна");
    break;

  case 7:
  case 8:
  case 9:
    alert("літо");
    break;

  case 10:
  case 11:
  case 12:
    alert("осінь");
    break;

  default:
    break;
}

//Завдання 3: Визначення категорії віку Напиши програму, яка запитує у користувача вік і визначає категорію: дитина(0 - 12),
//підліток(13 - 17), дорослий(18 - 64), пенсіонер(65 і більше).Використай switch case.

let age = parseInt(prompt("Enter your age: "));

switch (true) {
  case age >= 0 && age <= 12:
    console.log("Категорія: Дитина");
    break;
  case age >= 13 && age <= 17:
    console.log("Категорія: Підліток");
    break;
  case age >= 18 && age <= 64:
    console.log("Категорія: Дорослий");
    break;
  case age >= 65:
    console.log("Категорія: Пенсіонер");
    break;
  default:
    console.log("Некоректне значення віку");
}


//Завдання 4: Вибір математичної операції Напиши програму, яка запитує у користувача операцію(+, -, *, /) і два числа.
//Використай switch case для виконання обраної операції та виводу результату.

let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));
let sign = prompt("Enther an operator (+, -, *, /): ");

switch (sign) {
  case "+":
    console.log(`${num1} + ${num1} =  ${num1 + num2}`);
    break;
  case "-":
    console.log(`${num1} - ${num1} =  ${num1 - num2}`);
    break;
  case "*":
    console.log(`${num1} * ${num1} =  ${num1 * num2}`);
    break;
  case "/":
    console.log(`${num1} / ${num1} =  ${num1 / num2}`);
    break;
  default:
    break;
}

//Завдання 5: Визначення місяця за назвою Напиши програму, яка запитує у користувача назву місяця(наприклад, "Січень")
//і виводить його порядковий номер(1 для Січня, 2 для Лютого і т.д.).Використай switch case.

let month = prompt("Enter the name of a month: ");

switch (month) {
  case "january":
    alert("1");
    break;

  case "february":
    alert("2");
    break;

  case "march":
    alert("3");
    break;

  case "april":
    alert("4");
    break;

  case "may":
    alert("5");
    break;

  case "june":
    alert("6");
    break;

  case "july":
    alert("7");
    break;

  case "aughust":
    alert("8");
    break;

  case "september":
    alert("9");
    break;

  case "october":
    alert("10");
    break;

  case "november":
    alert("11");
    break;

  case "december":
    alert("12");
    break;

  default:
    break;
}

//Завдання 6: Калькулятор чайових Напиши програму, яка запитує у користувача рейтинг обслуговування("відмінно", "добре", "задовільно")
//і нараховує відсоток чайових: 20 % для "відмінно", 15 % для "добре", 10 % для "задовільно". Використай switch case.

let sum = parseFloat(prompt("Enter the sum of your service: "));
let tipType = prompt("Enter the rating for the service: ");
let total = 0;

switch (tipType) {
  case "відмінно":
    total = sum + sum * 0.2;
    alert(`Your total is: $${total}`);
    break;
  case "добре":
    total = sum + sum * 0.15;
    alert(`Your total is: $${total}`);
    break;
  case "задовільно":
    total = sum + sum * 0.1;
    alert(`Your total is: $${total}`);
    break;
  default:
    break;
}
