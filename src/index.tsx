const initialState = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: [] as string[],
}

type IProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    addOption?: (option: string) => void,
    options?: string[],
    hasOptions?: boolean
}

type State = Readonly<typeof initialState>;
const deleteOptions = () => ({ options: [] as string[] });
const addOption = (prevState: State, option: string) => {
    return {
        options: prevState.options.concat(option)
    }
}
const pickRandom = (options: string[]) => {
    const randomNum = Math.floor(options.length * Math.random());
    const option = options[randomNum];
    alert(option);
}

class IndecisionApp extends React.Component<{options: string[]}, State> {
    static defaultProps: { options: string[]; };
    readonly state: State = {
        title: initialState.title,
        subtitle: initialState.subtitle,
        options: initialState.options.concat(this.props.options)
    };

    render() {
        const { subtitle, options } = this.state;
        return (
            <div>
                <Header subtitle={subtitle} />
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
    handlePickOption = () => pickRandom(this.state.options);
    handleAddOption = (option: string) => {
        if (!option) {
            return "Enter a valid option";
        } else if (this.state.options.indexOf(option) > -1) {
            return "Enter a unique option";
        }

        this.setState(prevState => addOption(prevState, option));
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props: { title: string, subtitle?: string }) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
);

Header.defaultProps = {
    title: "Indecision"
}

const Action = (props: IProps) => (
    <div>
        <button
            disabled={!props.hasOptions}
            onClick={props.onClick}
        >
            What should I do?
        </button>
    </div>
);

const Options = (props: IProps) => (
    <div>
        <button onClick={props.onClick}>Remove All</button>
        {
            props.options.map(o => <DecisionOption key={o} optionText={o} />)
        }
    </div>
);

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

        e.target.elements.option.value = "";
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

const DecisionOption = (props: { optionText: string }) => (
    <p>{props.optionText}</p>
);

// const User = (props: { name: string, age: number }) => (
//     <div>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//     </div>
// );

ReactDOM.render(<IndecisionApp />, document.getElementById("appRoot"));