// Colt ran create-react-app and material ui
// he is also alternating between class based and functional components

import React, { Component } from 'react';
// colt imports AppBar, Toolbar, IconButton, Typography, InputBase, SearchIcon, Switch, {withStyles}.
// the classes.x are defined in another file theoretically.
class Navbar extends Component {
    render() {
        return (
            <div classname={classes.root}>
                <AppBar position="static" color="primary">
                    <Tollbar>
                        <IconButton className={classes.menuButton} color='inherit'>
                            <span>
                                {/* Flag emoji */}
                            </span>
                        </IconButton>
                        <Typography className={classes.title}
                            variant="h6" color="inherit">
                            App Title
                        </Typography>
                        <Switch />
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className="classes SearchIcon">
                                <SearchIcon />
                            </div>
                        </div>
                    </Tollbar>
                </AppBar>
            </div>
        )
    };
};


class PageContent extends Component {
    render() {
        const styles = { backgroundColor: "white", height: "100vh", width: "100vw" }
        return (
            <div style={styles}>
                {this.props.children}
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <ThemeProvider>
                <PageContent>
                    <Navbar />
                    <Form />
                </PageContent>
            </ThemeProvider>
        )
    }
}

// usually contexts go in their own folder

import React, { createContext } from "react";

const ThemeContext = createContext();

class ThemeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { isDarkMode: true }
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}