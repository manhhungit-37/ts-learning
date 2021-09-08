// class Task {
//   id: number;
//   name: string;
//   state: string;

//   constructor(id: number, name: string, state: string) {
//     this.id = id;
//     this.name = name;
//     this.state = state;
//   }

//   showTaskInfo(): void {
//     console.log(`${this.id} - ${this.name} - ${this.state}`);
//   }
// }

// let task1 = new Task(1, "Coding", "Created");
// task1.showTaskInfo();
// console.log(task1);

// class Point {
//   x: number;
//   y: number;
// }

// const pt = new Point();
// pt.x = 0;
// pt.y = 0
// console.log(pt.x);
// console.log(pt.y);

// class Base {
//   k = 4;
// }

// class Derived extends Base {
//   constructor() {
//     super();
//   }
// }

// const d1 = new Derived();
// console.log(d1.k);

// let x = 0;

// class C {
//   x: string = "hello";

//   m(): void {
//     // x = "world"; // x in line 1
//     this.x = "hung";
//   }
// }

// const c = new C();
// c.m();
// console.log(c.x);

// interface Task {
//   id: number;
//   name: string;
//   state?: string;
// }

// class TaskService {
//   tasks: Task[]

//   constructor(tasks: Task[]) {
//     this.tasks = tasks;
//   }

//   getTasks(): Task[] {
//     return this.tasks;
//   }
// }

// let tasks: Task[] = [
//   { id: 1, name: "code"},
//   { id: 2, name: "study"}
// ];

// let taskObj = new TaskService(tasks);

// let taskObj2 = new TaskService([
//   { id: 1, name: "code"},
//   { id: 2, name: "study"}
// ])


// console.log(taskObj.getTasks());
// console.log(taskObj2.getTasks());

// class Course {
//   id: string;
//   name: string;
//   price: number;

//   constructor(id: string, name: string, price: number) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }

//   showCourseInfo(): void {
//     console.log(`${this.id} - ${this.name} - ${this.price}`);
//   }
// }

// class CourseMobile extends Course {
//   author: string;

//   constructor(id: string, name: string, price: number, author: string) {
//     super(id, name, price);
//     this.author = author;
//   }

//   showCourseInfo(): void {
//     return super.showCourseInfo();
//   }
// }

// const html1 = new Course("1", "html", 20);

// const html = new CourseMobile("1", "html", 20, "truong");
// console.log(html);
// console.log(html1);

// class Course {
//   private _name: string;

//   constructor(name: string) {
//     this._name = name;
//   }

//   public get name(): string {
//     return this._name
//   }

//   public set name(s: string) {
//     this._name = s;
//   }
// }

// const html = new Course("html");
// console.log(html.name);

// html.name = "css";

// console.log(html.name);

// abstract class Laptop {
//   keyword(): void {
//     console.log("Laptop.keyword");
//   }

//   abstract mainboard(abc: string): string;

//   chipset(): void {
//     console.log("Laptop.chipset");
//   }
// }

// class LapDell extends Laptop {
//   mainboard(): string {
//     console.log("LaptopDell.mainboard");
//     return "123";
//   }
// }

// const lapDell = new LapDell();

// console.log(lapDell.keyword());
// console.log(lapDell.mainboard());
// console.log(lapDell.chipset());


// interface People {
//   name: String,
//   eat(): void,
//   sleep(): void
// }

// interface Bird {
//   fly(): void
// }

// class Machine {
//   caculate(x: number, y: number):number {
//     return x + y;
//   }
// }

// class Superman extends Machine implements People, Bird {
//   name: string;

//   constructor(name: string) {
//     super();
//     this.name = name;
//   }

//   eat(): void {
//     console.log("eat");
//   }

//   sleep(): void {
//     console.log("sleep");
//   }

//   fly(): void {
//     console.log("fly");
//   }
// }

// const superman = new Superman("Hung");

// superman.sleep();
// superman.fly();
// console.log(superman.caculate(1, 2));

// function showInfo<T>(x: T): T {
//   return x;
// }

// console.log(showInfo<string>("Hung"));

// class StudyGeneric {
//   printArray<T>(params: T[]): void {
//     console.log(params);
//   }
// }

// const std = new StudyGeneric();
// std.printArray<string>(["a", "b", "c"]);
// std.printArray<number>([1, 2, 3]);
// std.printArray<any>([1, 2, 3, true, "acv", null , undefined]);
// std.printArray<unknown>([1, 2, 3, true, "acv", undefined]);

// class Product<T, K, L> {
//   id: T;
//   name: K;
//   price: L;

//   constructor(id: T, name: K, price: L) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }

//   showProduct() {
//     console.log(`${this.id} - ${this.name} - ${this.price}`);
//   }
// }

// const product1 = new Product<string, string, number>("ID1", "Omo", 23);
// const product2 = new Product<number, string, number>(1, "Omo", 23);


// product1.showProduct();
// product2.showProduct();




