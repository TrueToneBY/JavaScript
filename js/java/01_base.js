alert(6)
//1 variable
//var name = 'Pavel'
const firstName = 'Pavel'
const lastName = 'Litvinenko'
let  age = 33

console.log(firstName,lastName,'age :  ' + age)

//2 мутирование
console.log('Lest name :  ' + lastName)
console.log(age)

const lastName2 = prompt('Vvod lastName')
alert(firstName  + '  ' + lastName2)

//3 Операторы

const currentYear = 2022
const birthYear = 1989

//const age2 = currentYear - birthYear

const a = 10
const b = 5

let c = 33
//c = c + a
c += a
c -= a
c /= a
c *= a

age2 = a * b
console.log(a + b)
console.log(a - b)
console.log(a / b)
console.log(a * b)
console.log(a % b)
console.log(++age2)
console.log(c)

// 4 типы данных   google.com mdn operator precedence

const isProgrammer = true
const name = 'Pavel'
let age3 = 33

console.log(typeof isProgrammer)
console.log(typeof name)
console.log(typeof age3)
console.log(null)

// 5 приоритет оператора

const fillAge1 = 26
const birthYear1 = 1993
const  currentYear1 = 2020

const isFullAge = currentYear1 - birthYear >= fillAge1
console.log(isFullAge)

// 6 условные операторы
const courseStatus = 'fail' // ready,fail, pending

if (courseStatus === 'ready'){
  console.log('Курс уже готов и его можно проходить')
}else if(courseStatus === 'pending'){
  console.log('Курс находится в процессе разработки')
}else {
  console.log('Курс не получился')
}
const isReady = true
if (isReady === true){
  console.log('ВсЕ готово')
}else {
  console.log(' все не готово')
}

isReady ? console.log('ВсЕ готово!') : console.log('ВсЕ не готово')  //тернарное выражения

const num2 = 42 // number
const num3 = '42' // string

console.log(num2 == num3)


//  7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators


//  8 Функция

function calculateAge(year){
  return 2020 - year
}

const myAge = calculateAge(1993)
console.log(myAge)

function logInfoAbout(name, year){
  const  age = calculateAge(year)

  if(age > 0){
    console.log('Человек по имени  '+ name + '  сейчас имеет возраст  ' + year)
  }else {
    console.log('Вообще-то это будущее')
  }


}
logInfoAbout('Pavel',1989)
logInfoAbout("Anastasiya",1989)
logInfoAbout('Pavel',2023)

// 9 Массивы
 const  cars = ['Мазда',  'Мерседес' , 'BMW']

const  cars1 = new Array('Мазда',  'Мерседес' , 'BMW')
console.log(cars)
console.log(cars1)

console.log(cars1[0])
console.log(cars[2])
console.log(cars.length)

cars[0] = 'Porsche'
console.log(cars)
cars[3] = 'Mazda'
console.log(cars)
cars[cars.length] = 'Volvo'
console.log(cars)

// 10 Циклы
const cars3 = ['Мазда',  'Мерседес' , 'BMW']

for (let i = 0;i < cars3.length;i++){
  const car = cars3[i]
  console.log(car)
}

for (let car of cars3){
  console.log(car)
}

// 11 Объекты

const person = {
  firstName1: 'Pavel',
  lastName1:  'Litvinenka',
  year:  '1989',
  languages: ['Rus','En','De'],
  hasWife: false,
  greet : function (){
    console.log('greet of function')
  }
}

console.log(person.firstName1)
person.greet()
console.log(person['lastName1'])
const key = 'yaer'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true

console.log(person)



