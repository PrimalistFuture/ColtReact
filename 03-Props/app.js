class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machines!</h1>
                <Machine
                    s1="Cherry"
                    s2="Cherry"
                    s3="Banana"
                />
                <Machine
                    s1="Cherry"
                    s2="Cherry"
                    s3="Cherry"
                />
                <Machine
                    s1="Orange"
                    s2="Cherry"
                    s3="Banana"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))