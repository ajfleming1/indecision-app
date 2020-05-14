import { State, DefaultProps, defaultProps, initialState } from "../@types/IProps";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import React from "react";

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

    render = () => {
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

    componentDidMount = () => {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
            
        } catch(e) {;}
    }

    componentDidUpdate = (prevProps: DefaultProps, prevState: State) => {
        if (this.state.options.length !== prevState.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    componentWillUnmount = () => {
        console.log("componentWillUnmount");
    }
}

export default IndecisionApp;