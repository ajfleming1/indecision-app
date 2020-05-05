const counterInitialState = {count: 0};
type CounterState = Readonly<typeof counterInitialState>;

class Counter extends React.Component<object, CounterState> {
    readonly CounterState: CounterState = counterInitialState;
    render() {
        return (
            <div>
                <h1>Count: {this.CounterState.count}</h1>
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

const incrementCount = (prevCounterState: CounterState) => ({ count: prevCounterState.count + 1});
const decrementCount = (prevCounterState: CounterState) => ({ count: prevCounterState.count - 1});
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