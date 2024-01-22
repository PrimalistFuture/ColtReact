import React, { Component } from "react";
import './Message.css';

class Message extends Component {
    // The message component lets us add consistent styling to the other components. See Message.css for the specific styling used. 
    // this.props.children lets us use the information from the nested component
    render() {
        return (
            <div className="Message">
                {this.props.children}
            </div>
        )
    }
}

export default Message;