import validator from "validator";
import React from "react";
import ReactDom from "react-dom";

const template = React.createElement('p', {}, 'Testing 123');

console.log(validator.isEmail('test@gmail.com'));

ReactDom.render(template, document.getElementById("appRoot"));