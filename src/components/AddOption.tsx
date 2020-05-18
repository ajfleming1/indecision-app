import React, { FormEvent } from "react";
import IProps from "../@types/IProps";

export default class AddOption extends React.Component<IProps> {
    state = {
        error: undefined as string
    };

    onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const option = (e.currentTarget.elements[0] as HTMLInputElement).value
        const error = this.props.optionHandler(option);
        this.setState(() => ({ error }));
        if(!error) {
            (e.currentTarget.elements[0] as HTMLInputElement).value = "";
        }
    }

    render = () => {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}