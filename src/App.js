import React from 'react';
import './App.css';
import EtusivuComponent from './Komponentit/EtusivuComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RoutesComponent from './Komponentit/RoutesComponent';
import HighScoreComponent from './Hooks/HighScore';
import KysymyksetBoxComponent from './Komponentit/KysymyksetBoxComponent';
import GameOverComponent from './Komponentit/GameOverComponent';

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
            <Route path ="/kysymykset" component={KysymyksetBoxComponent} />
            <Route path ="/gameover" component={GameOverComponent} />
          </Switch>
        </div>
      </span>
    </Router>
  );
}

export default App;