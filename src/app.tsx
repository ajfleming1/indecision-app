import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById("appRoot"));

class OldSyntax  {
    name: string;
    constructor() {
        this.name = "Drew";
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting() {
        return `Hi my name is ${this.name}`;
    }
}

var old = new OldSyntax();
var getGreeting = old.getGreeting;
console.log(getGreeting());

// -----------

class NewSyntax {
    name = "Drew";
    getGreeting = () => {
        return `Greetings my name is ${this.name}`;
    }
}

var newSyntax = new NewSyntax();
var newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());