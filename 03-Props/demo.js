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
