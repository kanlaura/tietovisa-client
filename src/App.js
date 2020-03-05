import React from 'react';
import './App.css';
import EtusivuComponent from './Komponentit/EtusivuComponent';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import RoutesComponent from './Komponentit/RoutesComponent';
import HighScoreComponent from './Hooks/HighScore';
import KysymyksetComponent from './Komponentit/KysymyksetComponent';

function App() {
  return (
    <Router>
      <span>
        <div className="navi">
          <RoutesComponent />
        </div>
        <div className="sivu">
          <Switch>
            <Route exact path="/" component={EtusivuComponent} />
            <Route path="/highscore" component={HighScoreComponent} />
            <Route path ="/kysymykset" component={KysymyksetComponent} />
          </Switch>
        </div>
      </span>
    </Router>
  );
}

export default App;
