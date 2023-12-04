import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            width: '',
            backgroundColor: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addBox(this.state);
        this.setState({
            height: '',
            width: '',
            backgroundColor: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='height'>Height:</label>
                <input
                    id='height'
                    name='height'
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <label htmlFor='width'>Width:</label>
                <input
                    id='width'
                    name='width'
                    value={this.state.width}
                    onChange={this.handleChange}
                />
                <label htmlFor='backgroundColor'>Color:</label>
                <input
                    id='backgroundColor'
                    name='backgroundColor'
                    value={this.state.backgroundColor}
                    onChange={this.handleChange}
                />
                <button>Add Box!</button>
            </form>
        )
    }
}

export default NewBoxForm;