import IProps from "../@types/IProps";
import React from "react";
import DecisionOption from "./DecisionOption";

const Options = (props: IProps) => (
    <div>
        <button
         className="button button--link" 
         onClick={props.buttonHandler}>Remove All</button>
        {
            props.options.map(o =>
                <DecisionOption
                    key={o}
                    deleteOption={props.optionHandler}
                    optionText={o}
                />)
        }
        {props.options.length === 0 && <p>Please add an option to get started.</p>}
    </div>
);

export default Options;