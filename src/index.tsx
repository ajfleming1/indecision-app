const initialState = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: [] as string[],
}

const defaultProps = {
    options: [] as string[]
};

type State = Readonly<typeof initialState>;
type DefaultProps = Readonly<typeof defaultProps>;
type IProps = {
    buttonHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    optionHandler?: (option: string) => void | string,
    hasOptions?: boolean
} & Partial<DefaultProps>

const removeAllOptions = () => ({
    options: [] as string[]
});

const removeOption = (prevState: State, option: string) => ({
    options: prevState.options.filter(o => o !== option)
});

const addOption = (prevState: State, option: string) => ({
    options: prevState.options.concat(option)
});

const pickRandom = (options: string[]) => {
    const randomNum = Math.floor(options.length * Math.random());
    const option = options[randomNum];
    alert(option);
};

class IndecisionApp extends React.Component<DefaultProps, State> {
    static defaultProps = defaultProps;

    readonly state: State = {
        title: initialState.title,
        subtitle: initialState.subtitle,
        options: this.props.options
    };

    render() {
        const { subtitle, options } = this.state;
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={options.length > 0}
                    buttonHandler={this.handlePickOption}
                />
                <Options
                    buttonHandler={this.handleDeleteOptions}
                    optionHandler={this.handleDeleteOption}
                    options={options} />
                <AddOption
                    optionHandler={this.handleAddOption}
                />
            </div>
        );
    }

    handleDeleteOptions = () => this.setState(removeAllOptions);
    handleDeleteOption = (option: string) => { this.setState(prevState => removeOption(prevState, option)); }
    handlePickOption = () => pickRandom(this.state.options);
    handleAddOption = (option: string) => {
        if (!option) {
            return "Enter a valid option.";
        } else if (this.state.options.indexOf(option) > -1) {
            return "Enter a unique option.";
        }

        this.setState(prevState => addOption(prevState, option));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
            
        } catch(e) {;}
    }

    componentDidUpdate(prevProps: DefaultProps, prevState: State) {
        if (this.state.options.length !== prevState.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
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
            onClick={props.buttonHandler}
        >
            What should I do?
        </button>
    </div>
);

const Options = (props: IProps) => (
    <div>
        {props.options.length === 0 && <p>Please Add an Option to Get Started.</p>}
        <button onClick={props.buttonHandler}>Remove All</button>
        {
            props.options.map(o =>
                <DecisionOption
                    key={o}
                    deleteOption={props.optionHandler}
                    optionText={o}
                />)
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
        const error = this.props.optionHandler(option);
        this.setState(() => ({ error }));
        console.log(error);
        if(!error) {
            e.target.elements.option.value = "";
        }
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

const DecisionOption = (props: { optionText: string, deleteOption: (option: string) => void }) => (
    <div>
        {props.optionText}
        <button
            onClick={(e) => props.deleteOption(props.optionText)}>
            Remove Option
        </button>
    </div>
);

// const User = (props: { name: string, age: number }) => (
//     <div>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//     </div>
// );

ReactDOM.render(<IndecisionApp />, document.getElementById("appRoot"));