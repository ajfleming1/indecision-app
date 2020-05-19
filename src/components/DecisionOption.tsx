import React from "react";

const DecisionOption = (props: { optionText: string, count: number, deleteOption: (option: string) => void }) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button
            className="button button--link"
            onClick={(e) => props.deleteOption(props.optionText)}>
            Remove
        </button>
    </div>
);

export default DecisionOption;