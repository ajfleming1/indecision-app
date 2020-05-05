const initialState = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: [] as string[]
}

type IProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    addOption?: (option: string) => void,
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
                <AddOption
                    addOption={this.handleAddOption}
                />
            </div>
        );
    }

    handleDeleteOptions = () => this.setState(deleteOptions);
    handlePickOption = () => {
        const randomNum = Math.floor(this.state.options.length * Math.random());
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption = (option: string) => {
        if (!option) {
            return "Enter a valid option";
        } else if (this.state.options.indexOf(option) > -1) {
            return "Enter a unique option";
        }

        this.setState((prevState: State) => {
            return {
                options: prevState.options.concat(option)
            }
        });
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

class AddOption extends React.Component<IProps> {
    state = {
        error: undefined as string
    };

    onFormSubmit = (e: any) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);

        this.setState(() => (
            { error }
        ));
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
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