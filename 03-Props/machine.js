class Machine extends React.Component {
    render() {
        let allTrue;
        if (this.props.s1 === this.props.s2 && this.props.s2 === this.props.s3) {
            allTrue = true;
        } else {
            allTrue = false;
        }
        return (
            <div>
                <p>{this.props.s1} {this.props.s2} {this.props.s3}</p>
                <p>{allTrue ? 'You win' : 'You lose'}</p>
            </div>
        )
    }
}
