import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import About from './components/about';
import BuyAndSell from './components/buyandsell';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar">
            <div className="logo"><NavLink to={'/'} className="nav-link">Triple Point <span>Liquidity</span></NavLink></div>
            <ul className="nav-ul">
              <li><NavLink to={'/buyandsell'} className="nav-link" activeClassName="isActive"> Buy and Sell </NavLink></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={About} />
            <Route path='/buyandsell' component={BuyAndSell} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
