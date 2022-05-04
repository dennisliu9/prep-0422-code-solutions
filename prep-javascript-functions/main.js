function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertHoursToMinutes(2);
console.log('Convert Hours to Minutes: ', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

const greeting = getGreeting('World');
console.log('Get greeting: ', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const addMultiplyResult = addAndMultiplyBy5(10, 5);
console.log('Add and Multiple Result: ', addMultiplyResult);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const multiplyDivideResult = multiplyAndDivideBy5(35, 10);
console.log('Multiply and Divide Result: ', multiplyDivideResult);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const subtractResult = subtractTwoNumbers(22, 7);
console.log('Subtract result: ', subtractResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

const circleCircumference = getCircleCircumference(5);
console.log('Circle circumference: ', circleCircumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = getFullName('Juan', 'Ramirez');
console.log('Full name: ', fullName);

function cube(number) {
  return number ** 3;
}

const cubeResult = cube(5);
console.log('Cube result: ', cubeResult);
