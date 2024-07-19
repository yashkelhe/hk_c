"use strict";
// topics here are the pick , readonly , partial , object=> records and maps
function Print(propsValue) {
    const NameAge = `${propsValue.name} & age is ${propsValue.age} `;
    return NameAge;
}
console.log(Print({ name: "yash", age: 12 }));
const userObj = {
    name: "something ",
    age: 12,
};
const obj = {
    "something ": {
        id: "soemthing",
        username: "yash",
    },
};
const simpleObj = {
    som: "some",
};
const recordObj = {
    id: { age: 22, name: "q23" },
};
