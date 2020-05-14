import React from "react";
import IProps from "../@types/IProps";

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

export default Action;