const name = 'Pavel'
const age = 26

// const output = 'Привет меня зовут  '+ name + '  и мой возраст ' + age + '  лет'
const  output = `Привет , меня зовут ${name} и мой возрас ${age < 20 ? 'A' : 'B'} лет`

console.log(output)

const output1 = `
<div>This is div<div
<p>This is o</p>
`
console.log(output1)

const name1 = 'Pavel'
console.log(name1.length)
console.log(name1.toUpperCase())
console.log(name1.toLowerCase())
console.log(name1.charAt(3))
console.log(name1.indexOf('el'))
console.log(name1.toLowerCase().startsWith('pav'))
console.log(name1.startsWith('pav'))
console.log(name1.endsWith('el'))
console.log(name1.repeat(3))

const string = '         password'
console.log(string.trim())
console.log(string.trimLeft())
console.log(string.trimRight())

function logPerson(s,name1,age1){
  if (age1 < 0){
    age1 = 'еще не родился'
  }
  console.log(s,name1,age1)
  return `${s[0]}${name1}${s[1]}${age1}${s[2]}`
}
const personName = 'pavel'
const personName2 = "Maxim"
const age2 = -10
const age1 = 33
const output2 = logPerson`Имя : ${personName}, Возрос т : ${age1}`

const output3 = logPerson`Имя : ${personName2}, Возраст : ${age2}`

console.log(output3)



//TODO  Hello World  продолжай учиться))
