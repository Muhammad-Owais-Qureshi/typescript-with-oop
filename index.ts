#! /usr/bin/env node
import inquirer from "inquirer"

class Person{
   name:string

   constructor(name:string){
    this.name = name
   }
   
}
class Student{
    name:Person[] = []

    addStudent(val:Person){
        this.name.push(val)
    }
}
let contine = true
console.log("=================================================")
console.log("=================Well Come=======================")
console.log("=================================================")
let students = new Student()
const oopProgram = async (students:Student)=>{
   do{
    
   
    let ans = await inquirer.prompt(
        {
            name:"person",
            type:"list",
            message:"Select an opption",
            choices:["Self","Friends","Exit"]

        }
    )
    if(ans.person ==="Self" ){
        console.log("Hi owais")
        console.log("How are you ?")
        console.log("I am fine")
    }
    if(ans.person === "Friends"){
        let answer = await inquirer.prompt(
            {
                name:"friend",
                type:"input",
                message:"Enter your friend name"
            }
        )
        let persons = students.name.find(val => val.name === answer.friend)

        if(!persons){
            let Name = new Person(answer.friend)
            students.addStudent(Name)
            console.log(`Hi i am ${Name.name} how may i help you:`)
            console.log(students.name)
        }
        if(persons){
            console.log(`Nice to meet again${students.name}how may i help you:`)
        }
    }
    if(ans.person === "Exit"){
        contine = false
        
    }
   }while(contine)
    
}
oopProgram(students)