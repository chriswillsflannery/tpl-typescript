import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/about';
import BuyAndSell from './components/buyandsell';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar">
            <div className="Logo">Triple Point <span>Liquidity</span></div>
            <ul className="nav-ul">
              <li><Link to={'/about'} className="nav-link"> About </Link></li>
              <li><Link to={'/buyandsell'} className="nav-link"> Buy and Sell </Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/buyandsell' component={BuyAndSell} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
