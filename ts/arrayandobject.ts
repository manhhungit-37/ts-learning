// ARRAY & OBJECT

// let names: string[] = ['mai', 'nam', 'hung']; // String []
// let arrNumber: Array<number> = [1, 4, 5]; // number []

// names.push("anh");
// names.push(4);  //Since it is a string array, numbers cannot be added to the array
// console.log(names);

// arrNumber.push(12);
// console.log(arrNumber);

// let mixed = [1, "henry", false];
// mixed.push(4);
// mixed.push("hung");
// mixed.push(true);
// // mixed.push({ a: 2, b: 3 }) //Argument of type '{ a: number; b: number; }' is not assignable to parameter of type 'string | number | boolean'

// console.log(mixed);

// interface Person {
//   name: string,
//   age: number,
//   isStudent: boolean,
// }

// let person: Person = {
//   name: "hung",
//   age: 23,
//   isStudent: false,
// }

// // person.name = 4 // false because typeof person.name is string

// person = {
//   name: "hung",
//   age: 23,
//   isStudent: true,
// }

// console.log(person);

// interface CourseInterface {
//   name: string,
//   time: string,
//   free?: boolean
// }

// const htmlCourse: CourseInterface = {
//   name: "HTML",
//   time: "10h",
//   free: false
// }

// console.log(htmlCourse);

// const cssCourse: CourseInterface = {
//   name: "CSS",
//   time: "20h"
// }

// console.log(cssCourse);
interface Hung {
  name: string;
  id: number;
}

const hung: Hung[] = [
  { name: 'asda', id:1 },
  { name: "dasd", id: 2}
]