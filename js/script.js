/*
Практически все сущности в JS это объект
Обект - набор свойств "ИМЯ : ЗНАЧЕНИЕ"

переменные дают возможность повторного доступа к значениям!
имена переменных :
1. PascalCase для именования типов и классов
2. DB_PASSWORD когда значения известны до запуска приложения и не меняются
3. camelCase все остальные переменные
   названия переменных должны быть понятными


const objectA = {
   a: 10,
   b: true
}

const copyOfA = objectA
console.log(copyOfA);

copyOfA.a = 20;
console.log(objectA);

copyOfA.c = 'abc'
console.log(copyOfA);
console.log(objectA);




Динамическая типизация в JS

let a  = 10
a = true
a = 'Nar'

function fn() {
   console.log('hello!');
}
fn(); // hello!

fn = 'bye!'

fn() // TypeError: fn is not a function


Стрелочная функция
const fn = () => {
   console.log('Hello!');
}
fn(); // Hello!
fn = 10 // TypeError: assignment to constant variable

fn();
   Правила работы с переменными:
   
   1. Все переменные объявлять перед их использованием
   
   2. Стараться использовать const везде, где это возможно

*/