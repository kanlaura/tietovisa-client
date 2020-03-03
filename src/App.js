import React from 'react';
import './App.css';
import EtusivuComponent from './Komponentit/EtusivuComponent';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import RoutesComponent from './Komponentit/RoutesComponent';
import HighScoreComponent from './Komponentit/HighScoreComponent';
import KysymyksetComponent from './Komponentit/KysymyksetComponent';

function App() {
  return (
    <body>
    <div className="App">
      <RoutesComponent />
    </div>
    <div>
      <Switch>
      <Route exact path="/" component={EtusivuComponent} />
      <Route path="/highscore" component={HighScoreComponent} />
      <Route path ="/kysymykset" component={KysymyksetComponent} />
    </Switch>

          <EtusivuComponent />
    </div>
    </body>

  );
}

export default App;
