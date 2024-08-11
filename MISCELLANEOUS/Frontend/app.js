class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}


class Student extends Person{
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
    }
    talk(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
    talk(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

let stu1 = new Student("Mayukha", 21);
let tea1 = new Teacher("Sasha", 30);

stu1.talk();
tea1.talk();