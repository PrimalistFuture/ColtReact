import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from "uuid";

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                { width: '100px', height: '150px', backgroundColor: 'red', id: uuid() },
                { width: '100px', height: '150px', backgroundColor: 'green', id: uuid() }
            ]
        }
        this.addBox = this.addBox.bind(this);
    }
    addBox(box) {
        let newBox = { ...box, id: uuid() };
        this.setState(state => ({
            boxes: [...state.boxes, newBox]
        }))
    }

    removeBox(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }

    render() {
        return (
            <div>
                <h1>Box List</h1>
                <NewBoxForm addBox={this.addBox} />
                <ul>
                    {this.state.boxes.map(box => (
                        <li key={box.id}>
                            <Box width={box.width} height={box.height} backgroundColor={box.backgroundColor} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default BoxList;