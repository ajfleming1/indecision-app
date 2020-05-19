import IProps from "../@types/IProps";
import React from "react";
import DecisionOption from "./DecisionOption";

const Options = (props: IProps) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                className="button button--link"
                onClick={props.buttonHandler}
            >Remove All
            </button>
        </div>

        {props.options.length === 0 && <p className="widget__message">Please add an option to get started.</p>}
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

export default Options;