import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './pages/LoginPage';
import searchResultsPage from './pages/SearchResultsPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact strict component={login} />
          <Route path="/searchResultsPage" component={searchResultsPage} />
          {/* <Route component={errorPage} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;