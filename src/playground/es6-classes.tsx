import * as React from "react";
import * as ReactDOM from "react-dom";

class Person {
    name: string;
    age: number;

    constructor(name: string = "Anon", age: number = 0) {
        this.name = name;
        this.age = age;
    };

    getGreeting(): string {
        return `Hi ${this.name}.`;
    }

    getDescription(): string {
        return `${this.name} is ${this.age} years old.`;
    }
};

const me = new Person("Drew Fleming", 36);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());

ReactDOM.render(
    <h1>{`Name: ${me.name}. Age: ${me.age}`}</h1>,
    document.getElementById("appRoot")
);