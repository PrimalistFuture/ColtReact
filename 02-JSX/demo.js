function getMood() {
    const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My current mood is: {getMood()}</h1>

            </div>
        )
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));

function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        // another pattern for conditional logic
        let msg;
        if (num === 7) {
            msg = 'Congrats';
        } else {
            msg = 'Darn';
        }
        return (
            <div>
                <h1>Your number is ... {num}</h1>
                {/* Ternary */}
                <p>{num === 7 ? 'Congrats' : 'Unlucky'}</p>
                {/* Ternary with msg */}
                <p>{msg}</p>
                {/* Ternary with display nothing in else */}
                {
                    num === 7
                        ? <img src='whatever' />
                        : null
                }
                {/* Ternary with logical shorcurcuiting */}
                {
                    num === 7 &&
                    <img src='whatever2' />
                }
            </div>
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));