import React from "react";

const DecisionOption = (props: { optionText: string, deleteOption: (option: string) => void }) => (
    <div>
        {props.optionText}
        <button
            className="button button--link"
            onClick={(e) => props.deleteOption(props.optionText)}>
            Remove Option
        </button>
    </div>
);

export default DecisionOption;