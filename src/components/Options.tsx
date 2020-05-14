import IProps from "../@types/IProps";
import React from "react";
import DecisionOption from "./DecisionOption";

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

export default Options;