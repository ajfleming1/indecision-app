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
    render() {
        return (
            <div>
                <button>
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component<{ options: string[] }> {
    render() {
        return (
            <div>
                {
                    this.props.options.map(o => <DecisionOption key={o} optionText={o} />)
                }
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <p>Add Option Goes Here.</p>
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