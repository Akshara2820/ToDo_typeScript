import React from 'react'

let name:string;
let age:number | string;
let isStudent:boolean;
let hobbies : string[];


type Person = {
  name:string,
  age?:number,
}

let person: Person={
  name:'Ak',
}

function Print(name:string){
  console.log('function',name)
}
Print("Yashika")
name = 'Akshara'
age = 'twenty'
isStudent = true
hobbies=['ak','hii','hello']

console.log(name)
console.log(age)
console.log(isStudent)
console.log(hobbies)
console.log(person)

function Variable() {
  return (
    <div>
      
    </div>
  )
}

export default Variable
