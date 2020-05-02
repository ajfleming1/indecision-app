class Counter extends React.Component {
    handleAddOne = () => {
        console.log("handleAddOne clicked.");
    };

    handleMinusOne = () => {
        console.log("handleMinusOneClicked");
    };

    handleReset = () => {
        console.log("handleRest Clicked");
    };

    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

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