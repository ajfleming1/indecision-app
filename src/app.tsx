import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

const Layout = (props: { children: React.ReactNode; }) => (
    <div>
        <p>Header</p>
        {props.children}
        <p>Footer</p>
    </div>
);

const Template = (
    <div>
        <h1>Title</h1>
        <p>This is my page.</p>
    </div>
);

ReactDOM.render(<Layout><p>This is inline. {Template}</p></Layout>, document.getElementById("appRoot"));