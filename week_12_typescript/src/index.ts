// topics here are the pick , readonly , partial , object=> records and maps

interface User {
  name: string;
  age: Number;
  roll: number;
  lastname: string;
  firstName: string;
}
// if u want a only two argumenet form the  user interface the we use the pick
// pick lets u select a particular value form the interface and type
type propsValue = Pick<User, "name" | "age">;

// partial lets u to make the values partial means that u no need to give values or give the values
type partialVlaue = Partial<propsValue>;

function Print(propsValue: partialVlaue) {
  const NameAge = `${propsValue.name} & age is ${propsValue.age} `;
  return NameAge;
}

console.log(Print({ name: "yash", age: 12 }));
console.log(Print({}));
///////////////////////////////////////////////////////////////////////////////////////////////////////

// Readonly

type user = {
  readonly name: string;
  readonly age: number;
};

const userObj: user = {
  name: "something ",
  age: 12,
};

///////////////////////////////////////////////////////////////////////////////////////////////////////
// and now if u try to make the changes it wont allow u to make the changes
// userObj.name = "newName";

// how the complex object is created
type useris = {
  id: string;
  username: string;
};

type Userhas = {
  [key: string]: useris;
};

const obj: Userhas = {
  "something ": {
    id: "soemthing",
    username: "yash",
  },
};
// and simple obj
type simpleUser = {
  // [key is string ] : value is string
  [key: string]: string;
};

const simpleObj = {
  som: "some",
};

// but if u see the upper object is not good to write so we have the " record and maps "

// type recordValue = Record<string, string | number>;
type recordValue = Record<string, { age: number; name: string }>;

const recordObj: recordValue = {
  id: { age: 22, name: "q23" },
};

// now here if u have to assign the  value to age u have to wite the ugly syntax

recordObj["id"].age = 2;

// for the object
type some = {
  id: {
    name: string;
    age: number;
  };
};

// so to avoid this there is an maps
// u can also give the generic to the map
const mapsUser = new Map<string, { age: number; name: string }>();
mapsUser.set("id", { age: 12, name: "asj" });
// and to get the value from the map we use the get

const mapValue = mapsUser.get("id");
console.log(mapValue);

mapsUser.delete("id");

// u can also give the generic to the map
interface uu {
  user: string;
  age: number;
}
const mapp = new Map<string, uu>();

mapp.set("something", { age: 3, user: " sdf" });

///////////////////////////////////////////////////////////////////////////////////////////////////////

// exclude something that u dont want to see

type eventType = "click" | "type" | "mouseRemove";
// only  this things , and dont want the things
type value = Exclude<eventType, "click">;

function value(valueppp: value) {
  console.log(valueppp);
}
value("type");

///////////////////////////////////////////////////////////////////////////////////////////////////////

// zod inferance is bqasically lets u take the type of the define zod object
// ex

/*

import z from "zod"

const ZodObject = z.object({
  name : string().min(10).max(21),
  age : number().min(1).max(2),
  username : string()
  lastName: string  ()
})


type inferType  = z.infer<typeof ZodObject> 

// basically it will give u a interfac4e which u can use in the frontend 
// by  just importiing a "inferType "
iterface inferType {
  name : string;
  age : number ;
  username: string;
  lastName : string;
}



*/
