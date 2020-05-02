class IndecisionApp extends React.Component {
    render() {
        const title: string = "Indecision";
        const subtitle: string = "Put your life in the hands of a computer.";
        const options: string[] = ["Thing One", "Thing Two", "Thing Four"];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component<{ title: string, subtitle: string }> {
    title: string;
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handleClick = () => {
        alert("Action Button Clicked.")
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component<{ options: string[] }> {
    handleRemoveAll = () => {
        console.log(this.props.options);
        alert("Remove All Button Clicked.");
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map(o => <DecisionOption key={o} optionText={o} />)
                }
            </div>
        );
    }
}

class AddOption extends React.Component {
    onFormSubmit = (e: any) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        );
    }
}

class DecisionOption extends React.Component<{ optionText: string }> {
    render() {
        return (
            <p>{this.props.optionText}</p>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("appRoot"));