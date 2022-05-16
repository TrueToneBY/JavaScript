// Number

const num = 42  //integer
const float = 42.42  //float
const pow = 10e3  //добавляет 3 нуля


console.log('Number.MAX_SAFE_INTEGER     ', Number.MAX_SAFE_INTEGER)
console.log('Math.pow(2,53)-1    ', Math.pow(2,53)-1)
console.log('Number.MIN_SAFE_INTEGER     ',Number.MIN_SAFE_INTEGER)
console.log('Number.MAX_VALUE   ',Number.MAX_VALUE)
console.log('Number.MIN_VALUE    ',Number.MIN_VALUE)
console.log('Number.NEGATIVE_INFINITY    ',Number.NEGATIVE_INFINITY)
console.log('Number.POSITIVE_INFINITY    ',Number.POSITIVE_INFINITY)
console.log('2 / 0', 2 / 0)
console.log(Number.NaN)  // Not A Number
console.log(typeof NaN)
console.log(2 / undefined)
const weird = 2 / undefined
console.log(isNaN(weird))
console.log(Number.isNaN(42))
console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(42))

const stringInt = '42'
const stringFloat = '42.42'
console.log(Number.parseInt(stringInt) + 2)
console.log(parseInt(stringInt) + 2)
console.log(Number(stringInt) + 2)
console.log(+stringInt + 2)

console.log(parseFloat(stringFloat) + 2)
console.log(+stringFloat + 2)

console.log(0.4 + 0.2)   //0.6
console.log(+(2 / 5) + (1 / 5).toFixed(1))
console.log((0.4 + 0.2).toFixed(1)) //урезать значение
console.log(parseFloat((0.4 + 0.2).toFixed(1)))


// BigInt тип данных\

console.log(Number.MAX_SAFE_INTEGER)
console.log(90071992547409919999999n)// n   BigInt
console.log(typeof undefined)


// console.log(10n - 4)  error
console.log(parseInt(10n) - 4)
console.log(10n - BigInt(4))

//   3  Math
console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25))
console.log(Math.pow(5,3))
console.log(Math.abs(-42))
console.log(Math.max(42,100,110))
console.log(Math.min(42,100,110))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.9))
console.log(Math.random())
console.log(Math.trunc(4.9))

// 4 Example

function getRandomBetween(min,max){
  return Math.floor(Math.random() *(max - min) + min + 1)  // округляет в большую сторону
}

console.log(getRandomBetween(10, 42));
