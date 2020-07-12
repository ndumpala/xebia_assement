import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import login from './pages/LoginPage';
import searchResultsPage from './pages/SearchResultsPage';

const App = ({ store }) =>{
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact strict component={login} />
            <Route path="/searchResultsPage" component={searchResultsPage} />
            {/* <Route component={errorPage} /> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;