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
        return `Hi. I'm ${this.name}.`;
    }

    getDescription(): string {
        return `${this.name} is ${this.age} years old.`;
    }
};

class Student extends Person {
    major: string;
    constructor(name?: string, age?: number, major?: string) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription():string {
        return `${super.getDescription()} They studied ` +
               `${this.hasMajor() ? this.major : "something"}.`;
    }
};

class Traveler extends Person {
    homeLocation: string;
    constructor(name?: string, age?: number, location?: string) {
        super(name, age);
        this.homeLocation = location;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            greeting += ` I am currently visting ${this.homeLocation}.`
        }

        return greeting;
    }
}

const me = new Student("Drew Fleming", 36, "Computer Science");
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const traveler = new Traveler("Waldo", 40, "the moon");
console.log(traveler.getGreeting());

ReactDOM.render(
    <h1>{`Name: ${me.name}. Age: ${me.age}`}</h1>,
    document.getElementById("appRoot")
);