import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/index.css'
import './assets/css/theme.css'

import { Layout } from './component/layout/Layout'
import { createStore } from 'redux';
import rootReducer from './redux/reducers'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './screen/Login'
import Register from './screen/Register'

document.title = 'Teacher';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <Switch>
        <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/' >
            <Layout/>
          </Route>
        </Switch>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

reportWebVitals();

