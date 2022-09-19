/*
Практически все сущности в JS это объект
Обект - набор свойств "ИМЯ : ЗНАЧЕНИЕ"

переменные дают возможность повторного доступа к значениям!
имена переменных :
1. PascalCase для именования типов и классов
2. DB_PASSWORD когда значения известны до запуска приложения и не меняются
3. camelCase все остальные переменные
   названия переменных должны быть понятными

*/
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
