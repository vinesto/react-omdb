import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={Detail} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
