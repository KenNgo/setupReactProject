import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./store";
import App from './App';
import * as serviceWorker from './serviceWorker';


render((
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
serviceWorker.unregister();