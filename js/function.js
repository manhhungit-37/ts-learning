// function sayHello(text: string) {
//   return "Hello " + text;
// }
// document.body.textContent = sayHello("hung");
// interface Person {
//   firstName: string,
//   lastName: string,
//   age?: number
// }
// const hello = (person: Person) => {
//   return `Hello ${person.firstName} ${person.lastName}`;
// }
// const user = { firstName: "Le", lastName: "Thanh", sex: "male" };
// document.body.textContent = hello(user);
// let sum = (x: number, y: number) => {
//   return `${x + y}`;
// }
// document.body.textContent = sum(2, 33);
// const buildName = (firstName: string, middleName = "Manh", lastName?: string) => {
//   return `${firstName}${middleName}${lastName}`;
// }
// document.body.textContent = buildName("Hung", undefined, "Le");
// let greet: Function;
// greet = () => console.log("hung");
// greet();
// const myFunction: Function = (num: number) :number => {
//   return num * 2;
// }
// console.log(myFunction(5));
// function add(a: number, b: number, c?: number | string) {
//   return `${a}${b}${c}`;
// }
// console.log("add", add(1, 2));
// const addDefault = (a: number, b: number, c: number = 10) {
//   return a + b + c;
// }
// console.log("addDefault", addDefault(1, 2));
// // const minus = (a: number, b: number): number => 'a + b'; // return type string false
// function functionNoReturn(): void {
//   console.log("hung");
// }
// functionNoReturn();
// function funcReturnNumber(): number {
//   return 2;
// }
// console.log(funcReturnNumber());
// function funcReturnString(): string {
//   return "Hung";
// }
// console.log(funcReturnString());
// function funcReturnAny(): any {
//   return ["Dsa"];
// }
// console.log(funcReturnAny());
// function userInfo1(name: string, age: number): string {
//   return `My name is ${name}, ${age} years old`;
// }
// console.log(userInfo1("Hung", 23));
// //function with default params
// function userInfo2(name: string = "Hung", age: number = 23): string {
//   return `My name is ${name}, ${age} years old`;
// }
// console.log(userInfo2());
// //function with no params
// function userInfo3(name: string, age?: number): string {
//   if (!age) {
//     return "My name is " + name;
//   }
//   return `My name is ${name}, ${age} years old`;
// }
// console.log(userInfo3("hung"));
// console.log(userInfo3("hung", 24));
// function totalLength(x: (string | Array<string | number>), y: (string | string[])): number {
//   return x.length + y.length;
// }
// console.log(totalLength("Hung", ["Le", "Manh"]));
// console.log(totalLength(["Hung", "Le"], ["hung"]));
// console.log(totalLength([1, "hung"], ["hung"]));
//rest params
// function study(name: string, ...course: string[]): string {
//   console.log(course);
//   return name + " study " + course.join(",");
// }
// console.log(study("hung", "html", "css"))
// function user01(name: string, age: number): string {
//   return `My name is ${name}, ${age} years old`;
// }
// console.log(user01("Hung", 23));
// const user02 = function(name: string, age: number): string {
//   return `My name is ${name}, ${age} years old`;
// }
// console.log(user02("Hung", 23));
// const user03: (name: string, age: number) => string = function(name: string, age: number) {
//   return `My name is ${name}, ${age} years old`;
// } 
// let f3 = (x: number): number => x * x;
// console.log(f3(4));
// interface Variable {
//   name: (name: string) => string, // function type
// }
// const variable: Variable = {
//   name: (name) => {
//     return name;
//   }
// }
// console.log(variable.name("hung"))
