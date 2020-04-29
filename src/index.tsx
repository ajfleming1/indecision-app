import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

let count:number = 0;

const updateCount = (i: number) => {
    console.log(`Adding ${i} to count.`);
    count += i;
    renderApp();
};

const renderApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => updateCount(1)}>+1</button>
            <button onClick={() => updateCount(-1)}>-1</button>
            <button onClick={() => updateCount(count * -1)}>Reset</button>
        </div>
    );

    ReactDOM.render(
        templateTwo,
        document.getElementById("example")
    );
}

renderApp();