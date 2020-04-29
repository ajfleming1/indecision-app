import * as React from "react";
import * as ReactDOM from "react-dom";

const appRoot = document.getElementById("example");
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: [] as string[]
};

const onFormSubmit = (e: any) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }
};

const removeAllOptions = () => {
    app.options = [];
    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAllOptions}>Remove All</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

renderApp();