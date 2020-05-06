export {};
import * as React from "react";
import * as ReactDOM from "react-dom";

const initialState = {
    count: 0
};
const defaultProps = {
    count: 0
};
type State = Readonly<typeof initialState>;
type DefaultProps = Readonly<typeof defaultProps>;
class Counter extends React.Component<DefaultProps, State> {
    static defaultProps = defaultProps;

    readonly state: State =  { count: initialState.count + this.props.count };
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }

    handleAddOne = () => this.setState(incrementCount);
    handleMinusOne = () => this.setState(decrementCount);
    handleReset = () => this.setState(resetCount);
}

const incrementCount = (prevState: State) => ({ count: prevState.count + 1});
const decrementCount = (prevState: State) => ({ count: prevState.count - 1});
const resetCount = () => ({ count: 0});

ReactDOM.render(<Counter />, document.getElementById("appRoot"));

/*
let count:number = 0;
const appRoot = document.getElementById("appRoot");
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
        appRoot
    );
}

renderApp();
*/