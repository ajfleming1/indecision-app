const initialState = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ["Item One", "Item Two", "Item Three"]
}

type IProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    options?: string[],
    hasOptions?: boolean
}

type State = Readonly<typeof initialState>;
const deleteOptions = () => ({ options: [] as string[] })

class IndecisionApp extends React.Component<object, State> {
    readonly state: State = initialState;
    render() {
        const { title, subtitle, options } = this.state;
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={options.length > 0} 
                    onClick={this.handlePickOption}
                />
                <Options
                    onClick={this.handleDeleteOptions}
                    options={options} />
                <AddOption />
            </div>
        );
    }

    handleDeleteOptions = () => this.setState(deleteOptions);
    handlePickOption = () => {
        const randomNum = Math.floor(this.state.options.length * Math.random());
        const option = this.state.options[randomNum];
        alert(option);
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

class Action extends React.Component<IProps> {
    render() {
        return (
            <div>
                <button
                    disabled={!this.props.hasOptions}
                    onClick={this.props.onClick}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component<IProps> {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>Remove All</button>
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