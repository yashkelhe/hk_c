const a: number = 1;
console.log("the a in ts is ", a);

function greet(firstName: string) {
  console.log(firstName);
}

greet("yash");

// : number that it wil only return the number
function sum(a: number, b: number): number {
  return a + b;
}
const result = sum(1, 3);
console.log(result);

// u can also give the any type over here
function Run(fn: () => void) {
  setTimeout(fn, 1000);
}

Run(() => {
  console.log("hello");
});
//////////////////////////////////////////////////////////////////////////////////////////
// interfaces allow u to give the type to the object
interface User {
  firsName: string;
  lastNamae: string;
  age: number;
  RollNumber?: number; // now here u can see this question mark mean that user can provide RollNumber or not like optional
}

function objectType(user: User) {
  console.log(
    "here u can see the how to give the typw to the object ",
    user.firsName
  );
}

objectType({
  firsName: "yash",
  lastNamae: "kelhe",
  age: 20,
  RollNumber: 26,
});
objectType({
  firsName: "rohan",
  lastNamae: "rama",
  age: 20,
});

//////////////////////////////////////////////////////////////////////////////////////////
// interface using the classs
interface Person {
  name: string;
  age: number;
  greet(something: string): number;
}

class Employe implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(something: string) {
    console.log(something, this.name, this.age);
    return 1;
  }
}

const e = new Employe("name", 12);
console.log(e);
console.log(e.name);
console.log(e.age);

//////////////////////////////////////////////////////////////////////////////////////////
// types
// most ask quetion in the interview that what is difference between the type and interface

type user1 = {
  name: string;
  age: number;
  greet(something: string): string;
};

function TypeFunction(props: user1) {
  console.log(props.name, props.age);
  const greeting = props.greet("value");
  console.log(greeting);
}

TypeFunction({
  name: "yash",
  age: 12,
  greet: (something: string) => {
    console.log({ something });
    return `hel lo ${something}`;
  },
});

type num = number | string;

function numRe(a: num) {
  console.log(a);
}

numRe(1);
numRe("1");

//////////////////////////////////////////////////////////////////////////////////////////

interface emp {
  name: string;
  startDate: number;
}
type manager = {
  name: string;
  dapartName: string;
};

type TechName = emp & manager;

function allInOne(props: TechName) {
  console.log(props.name, props.dapartName, props.startDate);
}

allInOne({
  name: "yash",
  startDate: 234,
  dapartName: " ad",
});

//////////////////////////////////////////////////////////////////////////////////////////
// one way to define the array
function arry(n: number[]) {
  console.log(n);
}

// and another way is using the type
type arr1 = number[];

function ar(numm: arr1) {
  console.log();
}

//////////////////////////////////////////////////////////////////////////////////////////
interface i1 {
  name: number | string;
}
interface i2 extends i1 {
  name: string;
}

class som implements i1 {
  name: string | number;

  constructor(n: string | number) {
    this.name = n;
  }
}

const so = new som("name");
console.log(so);
//////////////////////////////////////////////////////////////////////////////////////////

// Enum
// we use when we know the set of inputs
enum Direction {
  up, //0
  down, //1
  Left, //2
  Right, //3
}

function game(direction: Direction) {
  if (direction == Direction.Left) {
  }
}

game(Direction.Left);
game(Direction.up);

//////////////////////////////////////////////////////////////////////////////////////////

// Generic

// take example
/*
type input = number | string;

function indentity(arg: input[]) {
  return arg;
}

// here u will find that the result doesnot have the  one type
// and hence u want able to make it toUpperCase becouse it only work on the string not on the number

let ree = indentity(["yash", "kelhe"]);
ree.toUpperString()

*/

// so for that there is in way we can make it only string or number

function indentity<T>(arg: T): T {
  return arg;
}

const res = indentity<string>("string");
console.log(res.toUpperCase());
const res1 = indentity<number>(1);
console.log(typeof res1);
