import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import {createBrowserHistory} from 'history';
import indexRoutes from './routes';
import {Router,Route, Switch} from 'react-router-dom';
import thunk  from 'redux-thunk';
import './App.css';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers'

let store = createStore(reducers,applyMiddleware(thunk))

const hist = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
    <Router history={hist}>
        <Switch>
            {
                indexRoutes.map((prop,key)=>{
                      return( <Route path={prop.path} component={prop.component} key={key}/>
                  )
                })
            }
        </Switch>
   </Router>
   </Provider>
   ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
