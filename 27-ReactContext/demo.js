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

import React, { Component, createContext } from "react";

//export this
const ThemeContext = createContext();

// export this
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

// class-based Context Consumer 
// import {ThemeContext}

class NavbarWithContext extends Component {
    //this tells this class to look up and see if it is wrapped in a Context Provider. What it finds will be called 'context'. 
    static contextType = ThemeContext;
    render() {
        console.log(this.context);
        const { isDarkMode } = this.context;
        return (
            <Appbar position='static' color={isDarkMode ? "black" : "white"}>
                {/* Whatever */}
            </Appbar>
        )
    }
}

// Language Context

import React, { Component, createContext } from "react";

// export this
const LanguageContext = createContext();
// export this
class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { language: "french" }
        this.changeLanguage = this.changeLanguage.bind(this);
    }
    //this would go in some input menu
    changeLanguage(e) {
        this.setState({ language: e.target.value })
    }
    render() {
        return (
            <LanguageContext.Provider value={{ ...this.state, changeLanguage: this.changeLanguage }}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

// Language Context Consumer
// this variable would have a bunch of the different words in their respective languages.
const words = {
    english: {
        email: "Email"
    },
    french: {
        email: "Adresse Electronique"
    },
    spanish: {
        email: "Correo Electronico"
    }
};

class Form extends Component {
    static contextType = LanguageContext;
    render() {
        const { language } = this.context;
        const { email } = words[language];
        return (
            <Input>{email}</Input>
        )
    }
}

// Another way to provide context is by making a higher-order component and passing another component into that, which will now have access to that context
const withLanguageContext = Component => props => {
    <LanguageContext.Consumer>
        {value => <Component LanguageContext={value} {...props} />}
    </LanguageContext.Consumer>
}

// export default withLanguageContext(Navbar);