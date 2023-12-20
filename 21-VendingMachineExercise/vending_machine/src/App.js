import { NavLink, Route } from "react-router-dom";
import './App.css';
import VendingMachine from './VendingMachine';
import Chips from "./Chips";
import Soda from "./Soda";
import Podracer from "./Podracer";
function App() {
  return (
    <div className="App">
      {/* <nav className="App-nav">
        <NavLink exact activeClassName="active-link" to="/chips">Chips</NavLink>
        <NavLink exact activeClassName="active-link" to="/soda">Soda</NavLink>
        <NavLink exact activeClassName="active-link" to="/podracer">Podracer</NavLink>
        <NavLink exact activeClassName="active-link" to="/">Vending Machine</NavLink>
      </nav> */}

      <Route exact path="/" render={() => <VendingMachine />} />
      <Route exact path="/chips" render={() => <Chips />} />
      <Route exact path="/soda" render={() => <Soda />} />
      <Route exact path="/podracer" render={() => <Podracer />} />
    </div>
  );
}

export default App;
