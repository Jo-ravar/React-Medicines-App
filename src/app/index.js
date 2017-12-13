import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
const store = configureStore();
//import { Router, Route, browserHistory } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './home';
import Medicine from './medicine';

class App extends Component {
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log('-------Error-----');
    console.log(error);
    console.log('-------Info-----');
    console.log(info);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/medicine" component={Medicine} />
        </Switch>
      </BrowserRouter>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById('app')
);
