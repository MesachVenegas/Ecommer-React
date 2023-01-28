import App from './App';
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import "bootswatch/dist/morph/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
