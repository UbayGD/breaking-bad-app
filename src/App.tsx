import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AppBarComponent from './components/appbar.component/appbar.component';
import HomeComponent from './components/home.component/home.component';

const App = () => {
  return (
    <Router>
      <AppBarComponent />
      <Switch>
        <Route exact path="/">
          <HomeComponent />
        </Route>
        <Route path="/character/:id">
          <></>
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
