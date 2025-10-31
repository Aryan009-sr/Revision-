// function Person (naam, age, work){
//     this.name = naam;
//     this.age = age;
//     this.work = work;
// }
// Person.prototype.greet = function (){
//     console.log("Hello from Polynomial");
// }
// let person1 = new Person("Prakhar", 28, "Software Engineer");
// let person2 = new Person ("John", 38, "manager");
// console.log(person1);
// console.log(person2);
// 
// -------------------------------
// class Person{
//     constructor(name, age, work){
//         this.name = name;
//         this.age = age;
//         this.work = work;
//     }
//     greet(){
//         console.log("Hello from panIndia");
//     }
// }

// let newPerson = new Person("Prakhar", 23, "Software Engineer")
// let newPerson1 = new Person("John monkey", 40, "Manager");
// console.log(newPerson);
// console.log(newPerson1);

//Classes and super and extends.
// class company{
//     constructor(naam, jagah, saal){
//         this.name = naam;
//         this.location = jagah;
//         this.year = saal;
//     }
// }
// class employee extends company{
//     constructor(naam, designation, age){
//         super("Google", "USA", 1998);
//         this.name = naam;
//         this.designation = designation;
//         this.age = age;
//     }
// }

// let company1 = new company("Google", "USA", 1998);
// console.log(company1);
// let employee1 = new employee("Prakhar", "Software Engineer", 28);
// console.log(employee1);
// 


//Exercise given for claases.
// class Person{
//     constructor(a,b,c){
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
// }
// class human extends Person{
//     constructor(a,b,c,d){
//         super(a,b,c)
//         this.d = d;
//     }
// }
// let person1 = new Person(100, 200, 'Sam');
// console.log(person1);
// let newPerson = new human('lol', 200, "Mav", 420);
// console.log(newPerson);