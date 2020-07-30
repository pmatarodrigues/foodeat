import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profile from './pages/Profile'
import Last from './pages/Last'
import Favorites from './pages/Favorites'
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import TopBar from './components/TopBar';
import BottomMenu from './components/BottomMenu';
import ButtonGenerate from './components/ButtonGenerate';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
    <TopBar/>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/last" component={Last} />
          <Route path="/profile" component={Profile} />
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/restaurant/:restaurantName" component={Restaurant} />
      </Switch>
      <BottomMenu/>
    </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
