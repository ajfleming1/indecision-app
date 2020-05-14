import React from "react";
import IProps from "../@types/IProps";

export default class AddOption extends React.Component<IProps> {
    state = {
        error: undefined as string
    };

    onFormSubmit = (e: any) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.optionHandler(option);
        this.setState(() => ({ error }));
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