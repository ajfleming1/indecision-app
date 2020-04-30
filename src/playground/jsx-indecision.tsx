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
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }
};

const removeAllOptions = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(app.options.length * Math.random());
    const option = app.options[randomNum];
    alert(option);
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAllOptions}>Remove All</button>
            <ol>
                {
                    app.options.map(_ => <li key={_}>{_}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();