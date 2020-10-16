import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import './scss/main.scss';

import store from "./store/store";
import App from "./App";

const WithProvider = (
    <Provider store={ store }>
        <App />
    </Provider>
);

ReactDOM.render(WithProvider, document.getElementById('super-notes'));