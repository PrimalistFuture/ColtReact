import React, { Component } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";


// Fake Client-Side Routing
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'component1'
        }
    }

    changePage(newPage) {
        this.setState({
            page: newPage
        })
    }

    renderPage() {
        if (this.state.page === 'component1') {
            return <Component1 />
        } else if (this.state.page === 'component2') {
            return <Component2 />
        } else if (this.state.page === 'component3') {
            return <Component3 />
        }
    }
    renter() {
        return (
            <div className="App">
                <nav>
                    <a onClick={() => this.changePage('component1')}>Component1</a>
                    <a onClick={() => this.changePage('component2')}>Component2</a>
                    <a onClick={() => this.changePage('component3')}>Component3</a>
                </nav>
                {this.renderPage()}
            </div>
        )
    }
}

// React Router
// should be in the index.js file
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // its made because there is no document here, but in the index.js file there will be
    document.getElementById('root')
);

// in App Component

import { Route, Switch } from "react-router-dom";

const Info = () => <h1>Info about Component1</h1>

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* the path prop is the url path you are replicating, the component prop is what component is being rendered */}
                {/* the more detailed routes go first to avoid duplicate matches */}
                {/* the exact prop will only count a match if it is an exact match. Now the order won't matter anymore */}
                {/* As a rule of thumb, all of your routes should have the exact prop unless they have a reason not to */}
                <Switch>
                    {/* The Switch ensures that multiple paths don't match and only one component is rendered at a time. In our case it is redundant with exact */}
                    <Route exact path="/component1/info" component={Info} />
                    <Route exact path="/component1" component={Component1} />
                    <Route exact path="/component2" component={Component2} />
                    <Route exact path="/component3" component={Component3} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        )
    }
}