// Props
class Hello extends React.Component {
    render() {
        // This is how we can see what props have been passed in.
        console.log(this.props);
        let bangs = "!".repeat(this.props.bangs)
        // This is how we could access specific props. 
        return <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                {/* This is how we pass data into a component */}
                <Hello to="Ringo" from="Paul" bangs={4} data={[1, 2, 3, 4, 5]} />
                <Hello to="John" from="George" bangs={2} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// Looping
// In this example the messages are in the component, but you can imagine they might have been passed to this component via props, at which point we would have to access them with this.props.
class Messages extends React.Component {
    render() {
        const msgs = [
            { id: 1, text: "Greetings!" },
            { id: 2, text: "Goodbye!" },
        ];

        return (
            <ul>
                {msgs.map(m => <li>{m.text}</li>)}
            </ul>
        )
    }
}

// Default Props
class Greet extends React.Component {
    static defaultProps = {
        to: "Elie",
        from: "Joel",
    }
    render() {
        return (
            <div>
                <p>Hi {this.props.to} from {this.props.from}!</p>
            </div>
        )
    }
}

// Styling React Intro
class Machine extends React.Component {
    render() {
        let allTrue;
        if (this.props.s1 === this.props.s2 && this.props.s2 === this.props.s3) {
            allTrue = true;
        } else {
            allTrue = false;
        }
        // Style variable that can be passed in
        const colors = { fontSize: '50px', backgroundColor: 'purple' }
        return (
            <div>
                <p style={colors}>{this.props.s1} {this.props.s2} {this.props.s3}</p>
                {/* gives a different className depending on winner, and you can imagine that the different classNames might be styled differently in a dedicated .css file. */}
                <p className={winner ? 'win' : 'lose'}>
                    {allTrue ? 'You win' : 'You lose'}
                </p>
            </div>
        )
    }
}

