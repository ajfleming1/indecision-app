class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer.</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options go Here.
                <DecisionOption />
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <p>Add Option Goes Here.</p>
        );
    }
}

class DecisionOption extends React.Component {
    render() {
        return (
            <p>Option Goes Here.</p>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("appRoot"));